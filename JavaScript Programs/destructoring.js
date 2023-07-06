"use strict";

let fruits = ["apple", "banana", "kiwi", "orange", "onion"];
let [fruit1, fruit2, ...rest] = fruits;

console.log(`I love ${fruit1}`);
console.log(`I also love ${fruit2}`);
console.log(`Remaining fruits ${rest}`);
