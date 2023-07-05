"use strict";

const books = [
  "lord of the rings",
  "some random book 2",
  "book of games",
  "game of the books",
];

const reversebook = function (elem, index) {
  console.log(elem.split(" ").reverse().join(" "));
};

books.forEach(reversebook);
