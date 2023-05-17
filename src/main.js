import pattern from "./pattern.js";
import { addition } from "./calc.js";

function main() {
  console.log("Hello World");

  // calling pattern module
  pattern();

  // calling calc module
  let sum = addition(10, 20);
  console.log("SUM=", sum);
}

main();
