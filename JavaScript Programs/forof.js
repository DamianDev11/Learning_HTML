"use strict";

const avgNum = function () {
  let sum = 0;
  for (const args of arguments) {
    sum += args;
  }
  return sum / arguments.length;
};

console.log(avgNum(1, 3, 5, 7, 9));
console.log(avgNum(10, 20, 30, 40, 50));
