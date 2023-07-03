"use strict";

let person = {
  id: 12,
  role: "SDE-1",
  name: "Damian",
  age: 24,
  sayHi() {
    return `My name is ${this.name} and I work as ${this.role}. My id is ${this.id}`;
  },

  canDrive() {
    return this.age >= 18 ? `yes` : `no`;
  },
};

person.myJob = function () {
  return `I work as ${this.role}`;
};

console.log(person.sayHi());
console.log(person.canDrive());
console.log(person);
console.log(person.myJob());
