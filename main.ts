// The Funniest Toaster Error Message — make.fun entry.
// Writes a single-line toaster error message to $MAKEFUN_OUTPUT_DIR/entry.txt.
const fs = require("fs");
const path = require("path");

const LINE = "ERROR 04: Bread has unionized. Toasting suspended until demands are met.";

function main() {
  // Validation guard: 1-120 UTF-8 chars, not whitespace-only, no newline.
  const len = [...LINE].length;
  if (len < 1 || len > 120) throw new Error("entry line must be 1-120 chars, got " + len);
  if (!LINE.trim()) throw new Error("entry line must not be whitespace-only");
  if (/[\r\n]/.test(LINE)) throw new Error("entry line must not contain a newline");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output/entry.txt";
  const dir = outDir.endsWith("entry.txt") ? path.dirname(outDir) : outDir;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "entry.txt"), LINE + "\n", "utf8");
}

main();
