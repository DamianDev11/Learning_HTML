"use strict";

const arr = [1, 2, 3, 4, 5, 6, 9, 8, 7];
const asc = [...arr].sort((a, b) => a - b);
const des = [...arr].sort((a, b) => b - a);
console.log(asc.toString());
console.log(des.toString());
