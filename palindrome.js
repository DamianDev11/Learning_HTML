"use strict";

const isPalindrome = (word) => {
  let wordArr = [];
  let revWord = [];
  for (const w in word) {
    wordArr.push(w);
    revWord.push(w);
  }
  return wordArr.toString() === revWord.reverse().toString();
};

console.log(
  isPalindrome("madam") ? "Is a palindrome" : "Is not a palindrome..."
);
