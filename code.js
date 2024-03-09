"use strict";

function solveProblem(tests) {
  return tests;
}

process.stdin.setEncoding("utf8");
process.stdin.on("data", (input) => {
  const tests = input.trim().split(" ");
  console.log(calcScore(tests));
});
