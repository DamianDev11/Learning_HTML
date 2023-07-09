"use strict";

const arr = ["mouse", "keyboard", "monitor", "CPU", "desk"];

const copyArr = [...arr];

console.log(copyArr);
copyArr.push("UPS");
arr.push("Laptop");
console.log(arr);
console.log(copyArr);
