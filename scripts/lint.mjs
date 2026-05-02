import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const scanRoots = ["app", "scripts", "tests"];
const extensions = new Set([".js", ".jsx", ".mjs", ".cjs", ".ts", ".tsx"]);
const ignoredDirectories = new Set([".git", ".next", "node_modules"]);

const focusedTestPattern = /\b(?:test|describe)\.(?:only|skip)\s*\(/;
const debuggerPattern = /\bdebugger\b/;
const consolePattern = /\bconsole\.(?:log|debug|info)\s*\(/;

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name)) continue;

    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(fullPath));
      continue;
    }

    if (entry.isFile() && extensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

const findings = [];

for (const scanRoot of scanRoots) {
  const directory = path.join(root, scanRoot);
  const files = await collectFiles(directory);

  for (const file of files) {
    const source = await readFile(file, "utf8");
    const relativePath = path.relative(root, file).replaceAll(path.sep, "/");

    if (relativePath !== "scripts/lint.mjs" && debuggerPattern.test(source)) {
      findings.push(`${relativePath}: remove debugger statements`);
    }

    if (relativePath !== "scripts/lint.mjs" && consolePattern.test(source)) {
      findings.push(`${relativePath}: remove console.log/debug/info statements`);
    }

    if (focusedTestPattern.test(source)) {
      findings.push(`${relativePath}: remove committed test.only/test.skip/describe.only/describe.skip`);
    }
  }
}

if (findings.length) {
  console.error("Lint checks failed:");
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log("Lint checks passed.");
