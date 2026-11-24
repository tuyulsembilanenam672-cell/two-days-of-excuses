import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I was 99.9% confident I'd finish on time. The deadline was the 0.1%.";

const MAX_CODE_POINTS = 200;
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > MAX_CODE_POINTS) {
  throw new Error(`entry must be 1-${MAX_CODE_POINTS} code points, got ${codePoints}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);
