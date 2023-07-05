"use strict";

const doctors = [
  { id: 1, name: "dam1", age: 24, sp: "derma" },
  { id: 2, name: "dam2", age: 25, sp: "onco" },
  { id: 3, name: "dam3", age: 26, sp: "dent" },
  { id: 4, name: "dam4", age: 27, sp: "neuro" },
];

const findDoctor = (sp, arr) =>
  arr.find((elem) => elem.sp === sp)?.name || "No record found";

console.log(findDoctor("onco", doctors));
console.log(findDoctor("physio", doctors));
