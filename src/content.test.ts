import { describe, expect, test } from "bun:test";
import { isGhostPage, isHtmlContentType, looksLikeHtml } from "./content.ts";

describe("isHtmlContentType", () => {
  test("matches text/html with charset", () => {
    expect(isHtmlContentType("text/html; charset=utf-8")).toBe(true);
  });

  test("rejects markdown and json", () => {
    expect(isHtmlContentType("text/markdown; charset=utf-8")).toBe(false);
    expect(isHtmlContentType("application/json")).toBe(false);
    expect(isHtmlContentType(null)).toBe(false);
  });
});

describe("looksLikeHtml / isGhostPage", () => {
  const openapiHtml = `<!DOCTYPE html>
<html lang="en">
<head><title>Available APIs</title></head>
<body><h1>Available APIs</h1></body>
</html>`;

  test("sniffs doctype html", () => {
    expect(looksLikeHtml(openapiHtml)).toBe(true);
    expect(isGhostPage({ body: openapiHtml })).toBe(true);
  });

  test("content-type wins even for markdown-looking body", () => {
    expect(
      isGhostPage({
        body: "# Title\n",
        contentType: "text/html; charset=utf-8",
      }),
    ).toBe(true);
  });

  test("real markdown is not a ghost", () => {
    expect(
      isGhostPage({
        body: "# Bonds\n\nContent.\n",
        contentType: "text/markdown; charset=utf-8",
      }),
    ).toBe(false);
    expect(looksLikeHtml("# Bonds\n")).toBe(false);
  });
});
