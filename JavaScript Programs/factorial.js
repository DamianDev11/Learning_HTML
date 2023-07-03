let num = parseInt(prompt("Enter the number"));

if (num === 0) {
  alert(`Factorial of 0 is: 1`);
} else if (num < 0) {
  alert("Enter positive integer");
} else {
  fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  alert(fact);
}
