import { readFileSync } from "node:fs";

function main() {
  console.log("Hello World");

  let filePath = "/Users/research/Desktop/day9/package.json";
  let fileData = readFileSync(filePath, { encoding: "utf-8" });

  console.log(fileData);
}

main();
