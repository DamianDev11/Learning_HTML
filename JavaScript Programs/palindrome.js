"use strict";

const isPalindrome = (word) => word.split("").reverse().join("") === word;

console.log(isPalindrome("madam") ? "is a palindrome" : "not a palindrome");
