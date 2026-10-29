import { describe, expect, test } from "bun:test";
import { ancestorHtmlUrls, findReplacementPath } from "./recover.ts";

const HTML = `
<a href="/docs/excel/rtd/downloads/uninstall-the-api">Uninstall The API</a>
<a href="/docs/excel/rtd/downloads/api-download">API Download</a>
<a href="/docs/excel/activex/downloads/uninstall-the-api">Uninstall The API</a>
<a href="/docs/excel/rtd/introduction">Introduction</a>
`;

describe("findReplacementPath", () => {
  test("prefers the same-section slug over another copy", () => {
    expect(
      findReplacementPath(
        HTML,
        "/docs/excel/rtd/download-the-tws-api/uninstall-the-api.md",
      ),
    ).toBe("/docs/excel/rtd/downloads/uninstall-the-api");
  });

  test("returns null when the slug is ambiguous", () => {
    const body = `
      <a href="/docs/excel/rtd/introduction">Intro</a>
      <a href="/docs/excel/rtd/notes-limitations/introduction">Intro</a>
    `;
    expect(
      findReplacementPath(
        body,
        "/docs/excel/rtd/download-the-tws-api/introduction.md",
      ),
    ).toBeNull();
  });
});

describe("ancestorHtmlUrls", () => {
  test("walks up to the section introduction", () => {
    expect(
      ancestorHtmlUrls(
        "/docs/excel/rtd/download-the-tws-api/uninstall-the-api.md",
      ),
    ).toEqual([
      "https://www.interactivebrokers.com/docs/excel/rtd/download-the-tws-api/introduction",
      "https://www.interactivebrokers.com/docs/excel/rtd/download-the-tws-api",
      "https://www.interactivebrokers.com/docs/excel/rtd/introduction",
      "https://www.interactivebrokers.com/docs/excel/rtd",
    ]);
  });
});
