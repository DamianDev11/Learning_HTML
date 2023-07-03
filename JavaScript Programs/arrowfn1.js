"use strict";

const obj = {
  x: 10,
  y: 20,
  addZ() {
    return (z) => {
      return this.x + this.y + z;
    };
  },
};

let addThem = obj.addZ();

console.log(addThem(30));
