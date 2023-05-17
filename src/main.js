async function calculate(n1, n2) {
  // this task is going to take 10 min
  // ...very complex logic.
  // API CALL, DB CALL
  return n1 + n2;
}

async function main() {
  console.log("ASYNC TASK HANDLING");
  let data = await calculate(10, 20);
  console.log("Output=", data);
}

main();
