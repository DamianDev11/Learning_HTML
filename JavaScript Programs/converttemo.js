"use strict";

const convertTemp = function (temp, converTo) {
  let toUnit = converTo ?? "f";
  let tempConvert = Number(temp) ?? 0;

  if (toUnit === "f") {
    let fahrenheit = (tempConvert - 9) / 5 + 32;
    return `${fahrenheit}`;
  } else {
    let celsius = ((tempConvert - 32) * 5) / 9;
    return `${celsius}`;
  }
};

let today = 100;
console.log(convertTemp(today, "f"));
