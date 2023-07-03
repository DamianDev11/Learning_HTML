"use strict";

let point1 = {
  x: 2,
  y: 4,
};
let point2 = {
  x: 5,
  y: 6,
};

function calcDist(p1, p2) {
  return Math.hypot(p2.x - p1.x, p2.y - p1.y);
}

console.log(`Distance btwn two point is : ${calcDist(point1, point2)}`);
