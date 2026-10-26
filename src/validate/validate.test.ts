import { describe, expect, test } from "bun:test";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import {
  auditClassifyLinks,
  extractRawLinksIndependent,
  minimalNormalizeDocsUrl,
} from "./audit-llms.ts";
import { isAllowedAbsoluteDocsHref } from "./link-graph.ts";
import { validate } from "./index.ts";
import type { Manifest } from "../types.ts";

describe("minimalNormalizeDocsUrl", () => {
  test("rewrites campus host and section root paths", () => {
    expect(
      minimalNormalizeDocsUrl(
        "https://ibkrcampus.com/docs/tws-api/doc/introduction.md",
      ),
    ).toBe(
      "https://www.interactivebrokers.com/docs/tws-api/doc/introduction.md",
    );
    expect(minimalNormalizeDocsUrl("/tws-api/doc/introduction")).toBe(
      "https://www.interactivebrokers.com/docs/tws-api/doc/introduction",
    );
  });

  test("rejects foreign hosts", () => {
    expect(minimalNormalizeDocsUrl("https://example.com/docs/x.md")).toBeNull();
  });
});

describe("auditClassifyLinks", () => {
  test("extracts pages and llms independently", () => {
    const text = `
- [Intro](https://ibkrcampus.com/docs/tws-api/doc/introduction.md)
- [Index](https://ibkrcampus.com/docs/tws-api/llms.txt)
- [Bare](/tws-api/doc/quick-start/installation)
`;
    const { pageUrls, llmsUrls } = auditClassifyLinks(text);
    expect(llmsUrls).toContain(
      "https://www.interactivebrokers.com/docs/tws-api/llms.txt",
    );
    expect(pageUrls).toContain(
      "https://www.interactivebrokers.com/docs/tws-api/doc/introduction.md",
    );
    expect(pageUrls).toContain(
      "https://www.interactivebrokers.com/docs/tws-api/doc/quick-start/installation.md",
    );
  });

  test("keeps openapi.json and openapi.yaml extensions", () => {
    const text = `
- [OpenAPI JSON](https://ibkrcampus.com/docs/openapi.json)
- [OpenAPI YAML](https://ibkrcampus.com/docs/openapi.yaml)
`;
    const { pageUrls } = auditClassifyLinks(text);
    expect(pageUrls).toContain(
      "https://www.interactivebrokers.com/docs/openapi.json",
    );
    expect(pageUrls).toContain(
      "https://www.interactivebrokers.com/docs/openapi.yaml",
    );
    expect(pageUrls.some((u) => u.endsWith(".md"))).toBe(false);
  });

  test("extractRawLinksIndependent finds markdown and bare urls", () => {
    const raw = extractRawLinksIndependent(
      "[a](https://ibkrcampus.com/docs/tws-api/llms.txt) https://www.interactivebrokers.com/docs/x.md",
    );
    expect(raw.length).toBeGreaterThanOrEqual(2);
  });
});

describe("isAllowedAbsoluteDocsHref", () => {
  test("allows source HTML docs urls", () => {
    expect(
      isAllowedAbsoluteDocsHref(
        "source",
        "https://www.interactivebrokers.com/docs/tws-api/contracts/bonds",
      ),
    ).toBe(true);
  });

  test("rejects non-source and .md docs urls", () => {
    expect(
      isAllowedAbsoluteDocsHref(
        "Bonds",
        "https://www.interactivebrokers.com/docs/tws-api/contracts/bonds",
      ),
    ).toBe(false);
    expect(
      isAllowedAbsoluteDocsHref(
        "source",
        "https://www.interactivebrokers.com/docs/tws-api/contracts/bonds.md",
      ),
    ).toBe(false);
  });
});

describe("validate integration", () => {
  test("passes a minimal consistent cache + docs tree", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "ib-validate-"));
    const cacheDir = path.join(root, "cache");
    const docsDir = path.join(root, "docs");
    await mkdir(path.join(cacheDir, "tws-api", "doc"), { recursive: true });
    await mkdir(path.join(docsDir, "tws-api", "doc"), { recursive: true });

    const pageUrl =
      "https://www.interactivebrokers.com/docs/tws-api/doc/introduction.md";
    const pageBody = "# Introduction\n\nHello.\n";
    const { createHash } = await import("node:crypto");
    const sha = createHash("sha256").update(pageBody, "utf8").digest("hex");

    const llmsBody = `- [Introduction](${pageUrl})\n`;
    const llmsSha = createHash("sha256").update(llmsBody, "utf8").digest("hex");
    const rootLlms = `# Home\n\n[TWS](https://www.interactivebrokers.com/docs/tws-api/llms.txt)\n`;
    const rootSha = createHash("sha256").update(rootLlms, "utf8").digest("hex");

    await writeFile(path.join(cacheDir, "llms.txt"), rootLlms);
    await writeFile(path.join(cacheDir, "tws-api", "llms.txt"), llmsBody);
    await writeFile(
      path.join(cacheDir, "tws-api", "doc", "introduction.md"),
      pageBody,
    );

    const manifest: Manifest = {
      version: 1,
      scrapedAt: new Date().toISOString(),
      sectionPageOrder: { "tws-api": [pageUrl] },
      entries: [
        {
          url: "https://www.interactivebrokers.com/docs/llms.txt",
          finalUrl: "https://www.interactivebrokers.com/docs/llms.txt",
          kind: "llms",
          section: null,
          cachePath: "llms.txt",
          sha256: rootSha,
          status: "ok",
          fetchedAt: new Date().toISOString(),
        },
        {
          url: "https://www.interactivebrokers.com/docs/tws-api/llms.txt",
          finalUrl: "https://www.interactivebrokers.com/docs/tws-api/llms.txt",
          kind: "llms",
          section: "tws-api",
          cachePath: "tws-api/llms.txt",
          sha256: llmsSha,
          status: "ok",
          fetchedAt: new Date().toISOString(),
        },
        {
          url: pageUrl,
          finalUrl: pageUrl,
          kind: "page",
          section: "tws-api",
          cachePath: "tws-api/doc/introduction.md",
          sha256: sha,
          status: "ok",
          fetchedAt: new Date().toISOString(),
        },
      ],
    };
    await writeFile(
      path.join(cacheDir, "manifest.json"),
      `${JSON.stringify(manifest, null, 2)}\n`,
    );

    await writeFile(
      path.join(docsDir, "index.md"),
      `# Mirror\n\n- [TWS API](tws-api/index.md)\n`,
    );
    await writeFile(
      path.join(docsDir, "tws-api", "index.md"),
      `# TWS API\n\n- [Introduction](doc/introduction.md)\n`,
    );
    await writeFile(
      path.join(docsDir, "tws-api", "doc", "introduction.md"),
      `[source](https://www.interactivebrokers.com/docs/tws-api/doc/introduction)\n\n# Introduction\n\nHello.\n`,
    );

    const result = await validate({ cacheDir, docsDir });
    expect(result.ok).toBe(true);
    expect(result.report?.discovery.expectedPages).toBe(1);
  });

  test("fails when a relative link is broken", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "ib-validate-"));
    const cacheDir = path.join(root, "cache");
    const docsDir = path.join(root, "docs");
    await mkdir(cacheDir, { recursive: true });
    await mkdir(docsDir, { recursive: true });

    const emptySha = (await import("node:crypto"))
      .createHash("sha256")
      .update("", "utf8")
      .digest("hex");
    const manifest: Manifest = {
      version: 1,
      scrapedAt: new Date().toISOString(),
      sectionPageOrder: {},
      entries: [
        {
          url: "https://www.interactivebrokers.com/docs/llms.txt",
          finalUrl: "https://www.interactivebrokers.com/docs/llms.txt",
          kind: "llms",
          section: null,
          cachePath: "llms.txt",
          sha256: emptySha,
          status: "ok",
          fetchedAt: new Date().toISOString(),
        },
      ],
    };
    await writeFile(path.join(cacheDir, "llms.txt"), "");
    await writeFile(
      path.join(cacheDir, "manifest.json"),
      `${JSON.stringify(manifest, null, 2)}\n`,
    );
    await writeFile(
      path.join(docsDir, "index.md"),
      `# Mirror\n\n- [Missing](nope.md)\n`,
    );

    const result = await validate({ cacheDir, docsDir });
    expect(result.ok).toBe(false);
    expect(result.report?.linkGraph.missingTargets.length).toBeGreaterThan(0);
  });
});
