const myLibrary = [];

//Construct a new Book

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

//Add book to the library
function addBookToLibrary(title, author, pages) {
  myLibrary.push(new Book(title, author, pages));
}

//Display books in the library to the page

function displayBook() {
  myLibrary.forEach((book) => {
    const newTitle = document.createElement("h2");
    newTitle.textContent = book.title;

    const newAuthor = document.createElement("h3");
    newAuthor.textContent = book.author;

    const newPage = document.createElement("p");
    newPage.textContent = book.page;

    const card = document.createElement("div");
  });
}

document.addEventListener("DOMContentLoaded", displayBook);
