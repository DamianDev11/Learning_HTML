let num1 = parseInt(prompt("Enter the numbber..."));
let num2 = parseInt(prompt("Enter the numbber..."));
let num3 = parseInt(prompt("Enter the numbber..."));

const s = (num1 + num2 + num3) / 2;

const areaOfTriangle = Math.sqrt(s * (s - num1) * (s - num2) * (s - num3));

alert(`The area of triangle is ${areaOfTriangle}`);
