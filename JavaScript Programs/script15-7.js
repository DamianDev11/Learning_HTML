function Book(title, author, rating) {
  this.title = title;
  this.author = author;
  this.id = Date.now().toString();
  this.rating = rating;
  this.review = [];
}

const BookCollection = {
  books: [],

  //Add a book
  adddBook: function () {
    let bookTitle = document.getElementById("bookTitle").value;
    let bookAuthor = document.getElementById("bookAuthor").value;
    let bookRating = document.getElementById("bookRating").value;
    let book = { title: bookTitle, author: bookAuthor, rating: bookRating };
    this.books.push(this.book);
  },
};

//
let addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", () => {
  BookCollection.adddBook();
});

let individualBook = `<div>
<h3>Title : ${book.title}</h3>
<h4>Author : ${book.author}</h4>
<p>Rating : ${book.rating}</p>
</div`;
