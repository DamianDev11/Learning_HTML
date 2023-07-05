"use strict";

const randomNums = (count) =>
  Array.from(new Array(count), (elem) => parseInt(Math.random() * 1000));

console.log(randomNums(20));
