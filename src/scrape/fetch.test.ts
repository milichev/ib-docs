import { describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, readdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { isNotFoundPage } from "./fetch.ts";
import { resetCacheIfNotEmpty } from "./index.ts";

const NOT_FOUND = `# Page Not Found

This page does not exist.

## Similar pages

- [Uninstall The API](https://ibkrcampus.com/docs/excel/activex/downloads/uninstall-the-api.md)
`;

describe("isNotFoundPage", () => {
  test("matches the fern not-found body", () => {
    expect(isNotFoundPage(NOT_FOUND)).toBe(true);
    expect(isNotFoundPage(`\n\n${NOT_FOUND}`)).toBe(true);
  });

  test("does not match a real page", () => {
    expect(
      isNotFoundPage(`> This page is for Excel.\n\n# Uninstall The API\n`),
    ).toBe(false);
    expect(isNotFoundPage("# Page Not Found\n\nSomething else.")).toBe(false);
  });
});

describe("resetCacheIfNotEmpty", () => {
  test("leaves an empty directory in place", async () => {
    const dir = await mkdtemp(path.join(tmpdir(), "ib-docs-empty-"));
    await resetCacheIfNotEmpty(dir);
    expect(await readdir(dir)).toEqual([]);
  });

  test("removes previous contents", async () => {
    const dir = await mkdtemp(path.join(tmpdir(), "ib-docs-wipe-"));
    await mkdir(path.join(dir, "excel"), { recursive: true });
    await writeFile(path.join(dir, "excel", "llms.txt"), "old");
    await writeFile(path.join(dir, "manifest.json"), "{}");

    await resetCacheIfNotEmpty(dir);

    expect(await readdir(dir)).toEqual([]);
  });
});
