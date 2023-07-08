// let allBooks = [];
// let book = {
//   id: 1,
//   title: "Angels and Demons",
//   author: "Dan Brown",
//   rating: [3.0, 3.5, 4.0, 4.6],
//   review: [
//     {
//       username: "John",
//       content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam placeatiste minima repudiandae, libero dolorum vitae unde soluta magni?",
//     },
//     {
//       username: "John",
//       content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam placeatiste minima repudiandae, libero dolorum vitae unde soluta magni?",
//     },
//     {
//       username: "John",
//       content:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam placeatiste minima repudiandae, libero dolorum vitae unde soluta magni?",
//     },
//   ],
// };

function Book(title, author, year) {
  (this.title = title), (this.author = author), (this.year = year);
  this.id = Date.now().toString();
  this.rating = [];
  this.reviews = [];
}

const BookCollection = {
  book: [],
  //1.Add a book
  addBook: function (book) {
    this.books.push(book);
    console.log(`Book ${book.title} added successfully with ID ${book.id}`);
  },

  //2.Remove the book
  removeBook: function (removeId) {
    let bookToBeRemoved = this.books.findIndex((book) => book.id === removeId);
    if (bookToBeRemoved == -1) {
      console.log(`No book with ID : ${removeId} found in the collection!`);
    } else {
      let removedBook = this.books.splice(bookToBeRemoved, 1);
      console.log(
        `The book ${removedBook.title} hsa been removed from the collection`
      );
    }
  },

  //3.search a book
  searchBook: function (title) {
    let filteredBooks = this.books.filter((book) => book.title.includes(title));
    if (filteredBooks.length == 0) {
      console.log(`No books found with the title : ${title}`);
    } else {
      console.log("Here's what we found : ");
      filteredBooks.forEach((book) =>
        console.log(
          `${book.title} released in ${book.year} written by ${book.author}`
        )
      );
    }
  },
  //4.Add a rating
  rateBook: function (id, rating) {
    let book = this.books.find((book) => book.id === id);
    if (!book) {
      console.log(`No book withID ${id} found in the collection`);
    } else {
      book.ratings.push(rating);
      console.log(`Your rating for ${book.title} stored successfully`);
    }
  },

  //5.Add a review

  //6.calculate avg rating
  calculateAverageRating: function (id) {
    let book = this.books.find((book) => book.id === id);
    let initialValue = 0;
    let noOfRatings = book.ratings.length;
    let totalRatins = book.ratings.reduce(
      (accumulator, currentValue) => (accumulator = currentValue),
      initialValue
    );
    let averageRating = totalRatins / noOfRatings;
    console.log(`The rating of `);
  },
};

let choice = -1;

do {
  console.log(
    "CHoose an option : \n1:Add a book\n2.Remove a book\n3.search for book\n4.Add a rating\n5.Add a review\n6.Compute Avg of all rating\n7.Exit"
  );

  choice = parseInt(prompt("Enter your choice :"));
  switch (choice) {
    case 1:
      let title = prompt("Enter the title:");
      let author = prompt("Enter the author name: ");
      let year = prompt("Enter the release year: ");
      let newBook = new Book(title, author, year);
      BookCollection.addBook(newBook);
      break;
    case 2:
      let removedId = prompt("Enter the ID : of the book ");
      BookCollection.removeBook(removedId);
      break;
    case 3:
      let searchTitle = prompt("Enter the title you are looking for: ");
      BookCollection.searchBook(searchTitle);
      break;
    case 4:
      let ratingID = prompt("Enter the ID of the book u eant to rate :");
      let rating = prompt("Enter thr rating (1 -- 5");
      BookCollection.rateBook(ratingID, rating);
      break;
    case 5:
      let reviewID = prompt("Enter the ID you want to review");
      let username = prompt("Enter the name : ");
      let content = prompt("Enter the reveiew");
      let newReview = { username: username, content: content };
      BookCollection.reviewBook(reviewID, newReview);
      break;
    case 6:
      let averageID = prompt("Enter the ID you want to review");

      break;
    case 7:
      console.log("Thanks for adding the book");
      break;
    default:
  }
} while (choice >= 1 && choice < 7);
