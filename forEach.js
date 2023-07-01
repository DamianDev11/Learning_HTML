"use strict";

const name = [
  "dam1 is the first name",
  "dam2 is the second name",
  "dam3 is the third name",
];

const flipName = function (elem, index) {
  console.log(elem.split(" ").reverse().join(" "));
};

name.forEach(flipName);
