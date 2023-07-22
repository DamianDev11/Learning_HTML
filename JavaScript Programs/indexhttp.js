//https://www.googleapis.com/books/v1/volumes?q=quilting

let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", fetchBooks);

let allBooks = document.getElementById("allBooks");

let content = "";

function fetchBooks() {
  //Step 1 = Read user input
  let bookTitle = document.getElementById("bookTitle").value;

  //Step -2 = create request
  let myReq = new XMLHttpRequest(); //readystate = 0;
  myReq.open(
    "GET",
    `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
  ); //readystate = 1

  //Step 3 = Send the request and received the response
  myReq.send(); //readystate = 2

  //server processing, readystate = 3
  //after response, readystate
  myReq.onreadystatechange = () => {
    if (myReq.readyState === 4 && myReq.status === 200) {
      let convertedBooks = JSON.parse(myReq.response);
      let newBook = convertedBooks.items
        .map(
          (book) =>
            `<div class="book">
            <img src = ${book.volumeInfo.imageLinks.thumbnail}/>
        <h1>${book.volumeInfo.title}</h1>
        <p>${book.volumeInfo.description}</p>
      </div>)`
        )
        .join("");

      content += newBook;
    }
    allBooks.innerText = content;
  };
  //Step 4 = Convert response to JSON object

  //Step 5 = Display on the front end
}
