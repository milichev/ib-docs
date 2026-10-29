import { describe, expect, test } from "bun:test";
import {
  isLlmsUrl,
  isSectionRoot,
  isSectionSlug,
  normalizeDocsUrl,
  sectionOfUrl,
  toPageUrl,
  urlToLocalPath,
} from "./urls.ts";

describe("normalizeDocsUrl", () => {
  test("rewrites ibkrcampus to canonical host", () => {
    const u = normalizeDocsUrl(
      "https://ibkrcampus.com/docs/tws-api/doc/introduction.md",
    );
    expect(u?.href).toBe(
      "https://www.interactivebrokers.com/docs/tws-api/doc/introduction.md",
    );
  });

  test("prepends /docs for known section roots", () => {
    const u = normalizeDocsUrl("/tws-api/doc/introduction");
    expect(u?.pathname).toBe("/docs/tws-api/doc/introduction");
  });

  test("keeps canonical /docs paths", () => {
    const u = normalizeDocsUrl(
      "https://www.interactivebrokers.com/docs/web-api/llms.txt",
    );
    expect(u?.pathname).toBe("/docs/web-api/llms.txt");
  });

  test("strips trailing slash", () => {
    const u = normalizeDocsUrl("/docs/tws-api/");
    expect(u?.pathname).toBe("/docs/tws-api");
  });

  test("rejects other hosts", () => {
    expect(
      normalizeDocsUrl("https://example.com/docs/tws-api/x.md"),
    ).toBeNull();
  });

  test("resolves relative against base", () => {
    const base = new URL(
      "https://www.interactivebrokers.com/docs/tws-api/doc/introduction.md",
    );
    const u = normalizeDocsUrl("../ref/foo.md", base);
    expect(u?.pathname).toBe("/docs/tws-api/ref/foo.md");
  });

  test("strips hash", () => {
    const u = normalizeDocsUrl("/docs/tws-api/doc/introduction.md#section");
    expect(u?.pathname).toBe("/docs/tws-api/doc/introduction.md");
    expect(u?.hash).toBe("");
  });
});

describe("toPageUrl / classification", () => {
  test("section root is not a page", () => {
    const u = normalizeDocsUrl("/docs/tws-api/")!;
    expect(isSectionRoot(u)).toBe(true);
    expect(toPageUrl(u)).toBeNull();
  });

  test("llms is not a page", () => {
    const u = normalizeDocsUrl("/docs/tws-api/llms.txt")!;
    expect(isLlmsUrl(u)).toBe(true);
    expect(toPageUrl(u)).toBeNull();
  });

  test("appends .md when missing", () => {
    const u = normalizeDocsUrl("/docs/tws-api/doc/introduction")!;
    expect(toPageUrl(u)?.pathname).toBe("/docs/tws-api/doc/introduction.md");
  });

  test("does not append .md onto an existing file extension", () => {
    const json = normalizeDocsUrl("https://ibkrcampus.com/docs/openapi.json")!;
    const yaml = normalizeDocsUrl("https://ibkrcampus.com/docs/openapi.yaml")!;
    expect(toPageUrl(json)?.pathname).toBe("/docs/openapi.json");
    expect(toPageUrl(yaml)?.pathname).toBe("/docs/openapi.yaml");
    expect(urlToLocalPath(toPageUrl(json)!)).toBe("openapi.json");
  });
});

describe("urlToLocalPath", () => {
  test("strips /docs/ prefix", () => {
    const u = normalizeDocsUrl("/docs/tws-api/doc/introduction.md")!;
    expect(urlToLocalPath(u)).toBe("tws-api/doc/introduction.md");
  });

  test("root llms", () => {
    const u = normalizeDocsUrl("/docs/llms.txt")!;
    expect(urlToLocalPath(u)).toBe("llms.txt");
  });
});

describe("sectionOfUrl", () => {
  test("known nested page", () => {
    const u = normalizeDocsUrl("/docs/tws-api/doc/introduction.md")!;
    expect(sectionOfUrl(u)).toBe("tws-api");
  });

  test("root-level file is not a section", () => {
    const u = normalizeDocsUrl("/docs/openapi.json.md")!;
    expect(isSectionSlug("openapi.json.md")).toBe(false);
    expect(sectionOfUrl(u)).toBeNull();
  });

  test("root llms has no section", () => {
    const u = normalizeDocsUrl("/docs/llms.txt")!;
    expect(sectionOfUrl(u)).toBeNull();
  });
});
