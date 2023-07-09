"use strict";

const isPalindrome = (word) => {
  let arrword = [];
  let revword = [];
  for (const w of word) {
    arrword.push(w);
    revword.push(w);
  }
  return arrword.toString() === revword.reverse().toString();
};

console.log(
  isPalindrome("1234554321") ? "is a palindrome" : "is not a palindrome"
);
