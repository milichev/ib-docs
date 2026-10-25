import { describe, expect, test } from "bun:test";
import { stripBoilerplate } from "./boilerplate.ts";
import { extractH1Title, unescapeHeadings } from "./headings.ts";
import { buildRootIndex, buildSectionIndex } from "./indexes.ts";
import { filterByLang, resolveLangId } from "./lang.ts";
import { relativeHref, rewriteLinks } from "./links.ts";
import { prependSourceLink, toSourceUrl } from "./source.ts";
import { transformPage } from "./transform.ts";

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

  test("resolveLangId aliases", () => {
    expect(resolveLangId("C#")).toBe("csharp");
    expect(resolveLangId("vb.net")).toBe("vbnet");
  });
});

describe("source link", () => {
  test("strips .md for human URL", () => {
    expect(
      toSourceUrl(
        "https://www.interactivebrokers.com/docs/tws-api/contracts/bonds.md",
      ),
    ).toBe(
      "https://www.interactivebrokers.com/docs/tws-api/contracts/bonds",
    );
  });

  test("prepends above H1", () => {
    const out = prependSourceLink(
      "# Title\n\nBody.\n",
      "https://www.interactivebrokers.com/docs/tws-api/contracts/bonds",
    );
    expect(out.startsWith("[source](")).toBe(true);
    expect(out).toContain("\n# Title\n");
  });
});

describe("relativeHref / rewriteLinks", () => {
  test("posix relative from dirname", () => {
    expect(
      relativeHref("tws-api/doc/introduction.md", "web-api/introduction.md"),
    ).toBe("../../web-api/introduction.md");
    expect(
      relativeHref("tws-api/doc/introduction.md", "tws-api/doc/quick-start/x.md"),
    ).toBe("quick-start/x.md");
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
    const md = "[oop](https://www.geeksforgeeks.org/introduction-of-object-oriented-programming/)";
    expect(
      rewriteLinks(md, {
        currentRelativePath: "tws-api/doc.md",
        urlToPath: new Map(),
        sectionIndexPaths: new Map(),
      }),
    ).toBe(md);
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
    expect(out.startsWith("[source](https://www.interactivebrokers.com/docs/tws-api/contracts/bonds)")).toBe(
      true,
    );
    expect(out).toContain("# Bonds");
    expect(out).toContain("```python");
    expect(out).not.toContain("```java");
    expect(out).not.toContain("> This page is for");
  });
});
