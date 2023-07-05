"use strict";

const colorTypr = (color) => {
  const primaryColor = ["red", "blue", "yellow", "green"];
  const secondaryColor = ["green", "pink", "white"];

  if (primaryColor.includes(color)) {
    console.log(`${color} is primary color`);
  } else if (secondaryColor.includes(color)) {
    console.log(`${color} is secondary color`);
  } else {
    return `${color} not present`;
  }
};

console.log(colorTypr("green"));
