import { DEFAULT_CONCURRENCY } from "./constants.ts";
import { generate } from "./generate/index.ts";
import { scrape } from "./scrape/index.ts";
import { validate } from "./validate/index.ts";

export type Command = "scrape" | "generate" | "validate";

function usage(exitCode = 1): never {
  console.error(`Usage:
  bun run scrape [--section <name>] [--concurrency <n>] [--force] [--keep-going]
  bun run generate [--lang <id>] [--section <name>]
  bun run validate

Stages:
  scrape    Fetch llms.txt + pages into cache/; write cache/manifest.json
  generate  Build docs/ from cache/ (no network)
  validate  Audit cache/ + docs/ [not yet implemented]
`);
  process.exit(exitCode);
}

function parsePositiveInt(raw: string, flag: string): number {
  const n = Number.parseInt(raw, 10);
  if (!Number.isFinite(n) || n < 1) {
    console.error(`Invalid ${flag}: expected positive integer, got ${JSON.stringify(raw)}`);
    process.exit(1);
  }
  return n;
}

type FlagMap = {
  section?: string;
  concurrency?: number;
  force: boolean;
  keepGoing: boolean;
  lang?: string;
  help: boolean;
};

function parseFlags(argv: string[]): FlagMap {
  const flags: FlagMap = {
    force: false,
    keepGoing: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]!;
    switch (arg) {
      case "-h":
      case "--help":
        flags.help = true;
        break;
      case "--force":
        flags.force = true;
        break;
      case "--keep-going":
        flags.keepGoing = true;
        break;
      case "--section": {
        const v = argv[++i];
        if (!v) {
          console.error("--section requires a value");
          process.exit(1);
        }
        flags.section = v;
        break;
      }
      case "--concurrency": {
        const v = argv[++i];
        if (!v) {
          console.error("--concurrency requires a value");
          process.exit(1);
        }
        flags.concurrency = parsePositiveInt(v, "--concurrency");
        break;
      }
      case "--lang": {
        const v = argv[++i];
        if (!v) {
          console.error("--lang requires a value");
          process.exit(1);
        }
        flags.lang = v;
        break;
      }
      default:
        if (arg.startsWith("-")) {
          console.error(`Unknown flag: ${arg}`);
          usage(1);
        }
        console.error(`Unexpected argument: ${arg}`);
        usage(1);
    }
  }

  return flags;
}

export async function runCli(argv: string[]): Promise<void> {
  if (argv.length === 0) usage(1);

  const command = argv[0] as Command | string;
  if (command === "-h" || command === "--help") usage(0);

  if (command !== "scrape" && command !== "generate" && command !== "validate") {
    console.error(`Unknown command: ${command}`);
    usage(1);
  }

  const flags = parseFlags(argv.slice(1));
  if (flags.help) usage(0);

  if (command === "scrape") {
    if (flags.lang) {
      console.error("scrape does not accept --lang (use generate)");
      process.exit(1);
    }
    const result = await scrape({
      section: flags.section,
      concurrency: flags.concurrency ?? DEFAULT_CONCURRENCY,
      force: flags.force,
      keepGoing: flags.keepGoing,
    });
    process.exit(result.ok ? 0 : 1);
  }

  if (command === "generate") {
    if (flags.force || flags.keepGoing || flags.concurrency !== undefined) {
      console.error("generate only accepts --lang and --section");
      process.exit(1);
    }
    const result = await generate({
      lang: flags.lang,
      section: flags.section,
    });
    console.error(result.message);
    process.exit(result.ok ? 0 : 1);
  }

  // validate
  if (flags.lang || flags.section || flags.force || flags.keepGoing || flags.concurrency !== undefined) {
    console.error("validate does not accept scrape/generate flags");
    process.exit(1);
  }
  const result = await validate();
  console.error(result.message);
  process.exit(result.ok ? 0 : 1);
}
