"use strict";

const fruits = [
  ["apple", "banana", "mango"],
  ["kiwi", "orange", "grapes"],
];

for (let i = 0; i < fruits.length; i++) {
  for (let j = 0; j < fruits[i].length; j++) {
    console.log(fruits[i][j]);
  }
}
