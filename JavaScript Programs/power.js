"use strict";

const calcPow = function (num, pow) {
  if (pow !== 1) {
    return num * calcPow(num, pow - 1);
  }
  return num;
};
console.log(calcPow(2, 4));
