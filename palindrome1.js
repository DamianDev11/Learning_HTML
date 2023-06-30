"use strict";

const isPalindrome = (word) => word.split("").reverse().join("") === word;

console.log(isPalindrome("mada") ? "Is a palindrome" : "Not a plaindrome");
