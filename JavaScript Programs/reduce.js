"use strict";

const arr = [2, 4, 6, 8, 10];

const reduced = arr.reduce(
  (accumulator, currentElement) => accumulator + currentElement,
  0
);

console.log(reduced);
