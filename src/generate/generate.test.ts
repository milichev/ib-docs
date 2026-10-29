import { describe, expect, test } from "bun:test";
import { createHash } from "node:crypto";
import { access, mkdir, mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import type { Manifest } from "../types.ts";
import { stripBoilerplate } from "./boilerplate.ts";
import { extractH1Title, unescapeHeadings } from "./headings.ts";
import {
  buildRootIndex,
  buildSectionIndex,
  changelogIsoDate,
  indexLinkTitle,
  subsectionSegments,
  titleFromSlug,
} from "./indexes.ts";
import { generate } from "./index.ts";
import { filterByLang, pickLangWithFallback, resolveLangId } from "./lang.ts";
import { relativeHref, repairBrokenIbLinks, rewriteLinks } from "./links.ts";
import { buildPageHeader, prependPageHeader, toSourceUrl } from "./source.ts";
import { transformPage } from "./transform.ts";

function sha(text: string): string {
  return createHash("sha256").update(text, "utf8").digest("hex");
}

describe("stripBoilerplate", () => {
  test("removes leading IB banner blockquotes", () => {
    const raw = `> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Bonds

Content here.
`;
    expect(stripBoilerplate(raw)).toBe("# Bonds\n\nContent here.\n");
  });

  test("does not strip mid-document blockquotes", () => {
    const raw = `# Title

> This page is for TWS API.

Body.
`;
    expect(stripBoilerplate(raw)).toContain("> This page is for TWS API.");
  });
});

describe("unescapeHeadings", () => {
  test("unescapes underscores in H1", () => {
    expect(unescapeHeadings("# get\\_account\\_summary()")).toBe(
      "# get_account_summary()",
    );
  });

  test("unescapes C\\# language heading", () => {
    expect(unescapeHeadings("#### C\\#")).toBe("#### C#");
  });

  test("leaves body escapes alone", () => {
    expect(unescapeHeadings("use get\\_foo in prose")).toBe(
      "use get\\_foo in prose",
    );
  });

  test("extractH1Title", () => {
    expect(extractH1Title("# Hello\n\nbody")).toBe("Hello");
  });
});

describe("filterByLang", () => {
  test("keeps python fence and drops java", () => {
    const md = `#### Python

\`\`\`python
print(1)
\`\`\`

#### Java

\`\`\`java
System.out.println(1);
\`\`\`
`;
    const out = filterByLang(md, "python");
    expect(out).toContain("```python");
    expect(out).toContain("print(1)");
    expect(out).not.toContain("```java");
    expect(out).not.toContain("#### Java");
  });

  test("keeps json when filtering to python", () => {
    const md = `\`\`\`python
x = 1
\`\`\`

\`\`\`json
{"a": 1}
\`\`\`
`;
    const out = filterByLang(md, "py");
    expect(out).toContain("```json");
    expect(out).toContain("```python");
  });

  test("javascript falls back to python when js missing", () => {
    const md = `#### Python

\`\`\`python
print(1)
\`\`\`

#### Java

\`\`\`java
System.out.println(1);
\`\`\`

#### C#

\`\`\`csharp
Console.WriteLine(1);
\`\`\`
`;
    expect(pickLangWithFallback(md, "javascript")).toBe("python");
    const out = filterByLang(md, "javascript");
    expect(out).toContain("```python");
    expect(out).toContain("print(1)");
    expect(out).not.toContain("```java");
    expect(out).not.toContain("```csharp");
  });

  test("javascript falls back to java when python missing", () => {
    const md = `\`\`\`java
x = 1;
\`\`\`

\`\`\`csharp
x = 1;
\`\`\`
`;
    expect(pickLangWithFallback(md, "js")).toBe("java");
    expect(filterByLang(md, "js")).toContain("```java");
  });

  test("keeps requested lang when present", () => {
    const md = `\`\`\`javascript
1
\`\`\`

\`\`\`python
1
\`\`\`
`;
    expect(pickLangWithFallback(md, "javascript")).toBe("javascript");
    expect(filterByLang(md, "javascript")).toContain("```javascript");
    expect(filterByLang(md, "javascript")).not.toContain("```python");
  });

  test("resolveLangId aliases", () => {
    expect(resolveLangId("C#")).toBe("csharp");
    expect(resolveLangId("vb.net")).toBe("vbnet");
  });
});

describe("page header", () => {
  test("strips .md for human URL", () => {
    expect(
      toSourceUrl(
        "https://www.interactivebrokers.com/docs/tws-api/contracts/bonds.md",
      ),
    ).toBe("https://www.interactivebrokers.com/docs/tws-api/contracts/bonds");
  });

  test("builds home | section | source with relative hrefs", () => {
    expect(
      buildPageHeader({
        currentRelativePath:
          "tws-api/doc/connectivity/broken-api-socket-connection.md",
        sourceUrl:
          "https://www.interactivebrokers.com/docs/tws-api/doc/connectivity/broken-api-socket-connection",
        sectionIndexPaths: new Map([["tws-api", "tws-api/index.md"]]),
      }),
    ).toBe(
      "[home](../../../index.md) | [tws-api](../../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/doc/connectivity/broken-api-socket-connection)",
    );
  });

  test("prepends above H1", () => {
    const out = prependPageHeader("# Title\n\nBody.\n", {
      currentRelativePath: "tws-api/contracts/bonds.md",
      sourceUrl:
        "https://www.interactivebrokers.com/docs/tws-api/contracts/bonds",
      sectionIndexPaths: new Map([["tws-api", "tws-api/index.md"]]),
    });
    expect(out.startsWith("[home](")).toBe(true);
    expect(out).toContain(" | [tws-api](");
    expect(out).toContain(" | [source](");
    expect(out).toContain("\n# Title\n");
  });
});

describe("relativeHref / rewriteLinks", () => {
  test("posix relative from dirname", () => {
    expect(
      relativeHref("tws-api/doc/introduction.md", "web-api/introduction.md"),
    ).toBe("../../web-api/introduction.md");
    expect(
      relativeHref(
        "tws-api/doc/introduction.md",
        "tws-api/doc/quick-start/x.md",
      ),
    ).toBe("quick-start/x.md");
  });

  test("repairs IB \\[text]/(path) into markdown links", () => {
    expect(
      repairBrokenIbLinks(
        "see \\[exerciseOptions method]/(tws-api/doc/orders/exercise-options) here",
      ),
    ).toBe(
      "see [exerciseOptions method](/tws-api/doc/orders/exercise-options) here",
    );
  });

  test("rewrites repaired IB glitch links to relative hrefs", () => {
    const urlToPath = new Map([
      [
        "https://www.interactivebrokers.com/docs/tws-api/doc/orders/exercise-options.md",
        "tws-api/doc/orders/exercise-options.md",
      ],
    ]);
    const md =
      "Added \\[exerciseOptions method]/(tws-api/doc/orders/exercise-options).";
    const out = rewriteLinks(md, {
      currentRelativePath: "tws-api/changelog/2023/10/26.md",
      urlToPath,
      sectionIndexPaths: new Map([["tws-api", "tws-api/index.md"]]),
    });
    expect(out).toBe(
      "Added [exerciseOptions method](../../../doc/orders/exercise-options.md).",
    );
  });

  test("leaves bare \\[Label] without path", () => {
    const md = "new class object, \\[OrderAllocation].";
    expect(
      rewriteLinks(md, {
        currentRelativePath: "tws-api/changelog/2024/12/17.md",
        urlToPath: new Map(),
        sectionIndexPaths: new Map(),
      }),
    ).toBe(md);
  });

  test("rewrites absolute docs links", () => {
    const urlToPath = new Map([
      [
        "https://www.interactivebrokers.com/docs/tws-api/doc/account-portfolio-data/account-summary/account-summary-tags.md",
        "tws-api/doc/account-portfolio-data/account-summary/account-summary-tags.md",
      ],
    ]);
    const md =
      "see [tags](/docs/tws-api/doc/account-portfolio-data/account-summary/account-summary-tags)";
    const out = rewriteLinks(md, {
      currentRelativePath: "tws-api/sync-doc/account-summary.md",
      urlToPath,
      sectionIndexPaths: new Map([["tws-api", "tws-api/index.md"]]),
    });
    expect(out).toBe(
      "see [tags](../doc/account-portfolio-data/account-summary/account-summary-tags.md)",
    );
  });

  test("rewrites llms.txt to section index", () => {
    const out = rewriteLinks(
      "[idx](https://ibkrcampus.com/docs/tws-api/llms.txt)",
      {
        currentRelativePath: "tws-api/doc/introduction.md",
        urlToPath: new Map(),
        sectionIndexPaths: new Map([["tws-api", "tws-api/index.md"]]),
      },
    );
    expect(out).toBe("[idx](../index.md)");
  });

  test("leaves external links", () => {
    const md =
      "[oop](https://www.geeksforgeeks.org/introduction-of-object-oriented-programming/)";
    expect(
      rewriteLinks(md, {
        currentRelativePath: "tws-api/doc.md",
        urlToPath: new Map(),
        sectionIndexPaths: new Map(),
      }),
    ).toBe(md);
  });

  test("leaves uncached docs pages and assets unchanged", () => {
    const md =
      "see [missing](/docs/tws-api/doc/tws-settings) and ![](/docs/_fern-img/x.webp)";
    const out = rewriteLinks(md, {
      currentRelativePath: "tws-api/doc/quick-start/installation.md",
      urlToPath: new Map(),
      sectionIndexPaths: new Map([["tws-api", "tws-api/index.md"]]),
    });
    expect(out).toBe(md);
  });

  test("leaves ghost openapi links absolute when not mirrored", () => {
    const md = "spec: [OpenAPI JSON](https://ibkrcampus.com/docs/openapi.json)";
    const out = rewriteLinks(md, {
      currentRelativePath: "web-api/introduction.md",
      urlToPath: new Map([
        [
          "https://www.interactivebrokers.com/docs/web-api/introduction.md",
          "web-api/introduction.md",
        ],
      ]),
      sectionIndexPaths: new Map([["web-api", "web-api/index.md"]]),
    });
    expect(out).toBe(md);
  });
});

describe("indexes", () => {
  test("root lists sections", () => {
    const md = buildRootIndex(["tws-api"]);
    expect(md).toContain("[TWS API](tws-api/index.md)");
  });

  test("section index uses relative links", () => {
    const md = buildSectionIndex("tws-api", [
      { relativePath: "tws-api/doc/introduction.md", title: "Introduction" },
    ]);
    expect(md).toContain("[Introduction](doc/introduction.md)");
  });

  test("titleFromSlug and subsectionSegments", () => {
    expect(titleFromSlug("notes-limitations")).toBe("Notes Limitations");
    expect(titleFromSlug("doc")).toBe("Docs");
    expect(titleFromSlug("ref")).toBe("Reference");
    expect(titleFromSlug("quick-start")).toBe("Quick Start");
    expect(
      subsectionSegments(
        "tws-api",
        "tws-api/doc/notes-limitations/requirements.md",
      ),
    ).toEqual(["doc", "notes-limitations"]);
    expect(subsectionSegments("fix", "fix/intro.md")).toEqual([]);
  });

  test("changelogIsoDate and indexLinkTitle", () => {
    expect(changelogIsoDate("tws-api/changelog/2023/10/26.md")).toBe(
      "2023-10-26",
    );
    expect(changelogIsoDate("tws-api/changelog/2024/2/8.md")).toBe(
      "2024-02-08",
    );
    expect(changelogIsoDate("tws-api/doc.md")).toBeNull();
    expect(
      indexLinkTitle("tws-api/changelog/2023/10/26.md", "IBKR TWS API"),
    ).toBe("2023-10-26");
    expect(indexLinkTitle("tws-api/doc.md", "Introduction")).toBe("Docs");
    expect(indexLinkTitle("tws-api/ref.md", "Introduction")).toBe("Reference");
    expect(
      indexLinkTitle(
        "tws-api/doc/orders/exercise-options.md",
        "Exercise Options",
      ),
    ).toBe("Exercise Options");
  });

  test("section index uses ISO dates for changelog entries", () => {
    const md = buildSectionIndex("tws-api", [
      {
        relativePath: "tws-api/changelog/2023/10/26.md",
        title: "2023-10-26",
      },
      { relativePath: "tws-api/doc.md", title: "Docs" },
      { relativePath: "tws-api/ref.md", title: "Reference" },
    ]);
    expect(md).toContain("- [2023-10-26](changelog/2023/10/26.md)");
    expect(md).toContain("- [Docs](doc.md)");
    expect(md).toContain("- [Reference](ref.md)");
  });

  test("section index nests headings from path", () => {
    const md = buildSectionIndex("tws-api", [
      { relativePath: "tws-api/doc/introduction.md", title: "Introduction" },
      {
        relativePath: "tws-api/doc/notes-limitations/requirements.md",
        title: "Requirements",
      },
      {
        relativePath: "tws-api/doc/notes-limitations/tws-api-limitations.md",
        title: "TWS API Limitations",
      },
      {
        relativePath: "tws-api/doc/quick-start/installation.md",
        title: "Installation",
      },
      {
        relativePath:
          "tws-api/doc/tws-settings/tws-configuration-for-api-use/never-lock-trader-workstation-setting.md",
        title: "Never Lock",
      },
      {
        relativePath: "tws-api/doc/tws-settings/memory-allocation.md",
        title: "Memory Allocation",
      },
    ]);
    expect(md).toContain("## Docs\n\n- [Introduction](doc/introduction.md)");
    expect(md).toContain("### Notes Limitations");
    expect(md).toContain("### Quick Start");
    expect(md).toContain("### Tws Settings");
    expect(md).toContain("#### Tws Configuration For Api Use");
    // After nested page, re-emit parent so Memory sits under Tws Settings
    expect(md).toMatch(
      /#### Tws Configuration For Api Use\n\n- \[Never Lock\].*\n### Tws Settings\n\n- \[Memory Allocation\]/s,
    );
  });
});

describe("transformPage", () => {
  test("full pipeline on bonds-like page", () => {
    const raw = `> This page is for TWS API.

> For clean Markdown of any page, append .md to the page URL.
> For a complete documentation index, see https://ibkrcampus.com/docs/llms.txt.

# Bonds

#### Python

\`\`\`python
x = 1
\`\`\`

#### Java

\`\`\`java
int x = 1;
\`\`\`
`;
    const out = transformPage(raw, {
      sourceFinalUrl:
        "https://www.interactivebrokers.com/docs/tws-api/contracts/bonds.md",
      sourceUrl:
        "https://www.interactivebrokers.com/docs/tws-api/contracts/bonds.md",
      lang: "python",
      linkCtx: {
        currentRelativePath: "tws-api/contracts/bonds.md",
        urlToPath: new Map(),
        sectionIndexPaths: new Map([["tws-api", "tws-api/index.md"]]),
      },
    });
    expect(
      out.startsWith(
        "[home](../../index.md) | [tws-api](../index.md) | [source](https://www.interactivebrokers.com/docs/tws-api/contracts/bonds)",
      ),
    ).toBe(true);
    expect(out).toContain("# Bonds");
    expect(out).toContain("```python");
    expect(out).not.toContain("```java");
    expect(out).not.toContain("> This page is for");
  });
});

describe("generate ghosts", () => {
  test("skips HTML cache pages and leaves links to them absolute", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "ib-gen-ghost-"));
    const cacheDir = path.join(root, "cache");
    const outDir = path.join(root, "out");
    await mkdir(path.join(cacheDir, "web-api"), { recursive: true });

    const pageUrl =
      "https://www.interactivebrokers.com/docs/web-api/introduction.md";
    const ghostUrl = "https://www.interactivebrokers.com/docs/openapi.json";
    const pageBody = `# Intro

See [OpenAPI JSON](https://ibkrcampus.com/docs/openapi.json).
`;
    const ghostBody = `<!DOCTYPE html>
<html lang="en"><body><h1>Available APIs</h1></body></html>
`;

    const manifest: Manifest = {
      version: 1,
      scrapedAt: new Date().toISOString(),
      sectionPageOrder: { "web-api": [pageUrl] },
      entries: [
        {
          url: pageUrl,
          finalUrl: pageUrl,
          kind: "page",
          section: "web-api",
          cachePath: "web-api/introduction.md",
          sha256: sha(pageBody),
          status: "ok",
          contentType: "text/markdown; charset=utf-8",
          fetchedAt: new Date().toISOString(),
        },
        {
          url: ghostUrl,
          finalUrl: ghostUrl,
          kind: "page",
          section: null,
          cachePath: "openapi.json",
          sha256: sha(ghostBody),
          status: "ok",
          contentType: "text/html; charset=utf-8",
          fetchedAt: new Date().toISOString(),
        },
      ],
    };

    await writeFile(
      path.join(cacheDir, "web-api", "introduction.md"),
      pageBody,
    );
    await writeFile(path.join(cacheDir, "openapi.json"), ghostBody);
    await writeFile(
      path.join(cacheDir, "manifest.json"),
      `${JSON.stringify(manifest, null, 2)}\n`,
    );
    // Stale ghost from a prior generate run
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "openapi.json"), "stale");

    const result = await generate({ cacheDir, outDir });
    expect(result.ok).toBe(true);
    expect(result.stats?.pagesWritten).toBe(1);
    expect(result.stats?.ghosts).toBe(1);

    const outPage = await readFile(
      path.join(outDir, "web-api", "introduction.md"),
      "utf8",
    );
    expect(outPage).toContain(
      "[OpenAPI JSON](https://ibkrcampus.com/docs/openapi.json)",
    );

    await expect(access(path.join(outDir, "openapi.json"))).rejects.toThrow();
  });
});
