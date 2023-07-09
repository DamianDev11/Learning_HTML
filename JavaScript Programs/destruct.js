"use strict";

const num = [
  [2, 3],
  [5, 6],
  [8, 9],
];

const toSum = (arr) => arr.map(([a, b]) => a + b);
console.log(toSum(num));
