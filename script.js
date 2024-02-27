const myLibrary = [];
let cardIndex = 0;

const lib = document.querySelector("main");
const displayBookForm = document.querySelector(".add");
const bookForm = document.querySelector(".modal-container");
const closeBookForm = document.querySelector(".close");
const addBook = document.querySelector(".submit");

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

// function displayBook() {
//   myLibrary.forEach((book) => {
//     const newTitle = document.createElement("h2");
//     newTitle.textContent = book.title;

//     const newAuthor = document.createElement("h3");
//     newAuthor.textContent = book.author;

//     const newPage = document.createElement("p");
//     newPage.textContent = book.pages;

//     const statusBtn = document.createElement("button");
//     statusBtn.textContent = "Read";
//     statusBtn.classList.add("status");

//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "Remove";
//     removeBtn.classList.add("remove");

//     const interact = document.createElement("div");
//     interact.classList.add("interact");

//     interact.appendChild(statusBtn);
//     interact.appendChild(removeBtn);

//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.appendChild(newTitle);
//     card.appendChild(newAuthor);
//     card.appendChild(newPage);
//     card.appendChild(interact);
//     lib.appendChild(card);
//   });
// }

//Display newly created book on the page
function displayNewBook(title, author, pages, hasRead) {
  const newTitle = document.createElement("h2");
  newTitle.textContent = title;

  const newAuthor = document.createElement("h3");
  newAuthor.textContent = author;

  const newPage = document.createElement("p");
  newPage.textContent = pages;

  const statusBtn = document.createElement("button");
  if (hasRead.value === "Yes") {
    statusBtn.textContent = "Read";
    statusBtn.classList.add("status");
  } else if (hasRead.value === "No") {
    statusBtn.textContent = "Unread";
    statusBtn.classList.add("undone");
  }

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove");

  const interact = document.createElement("div");
  interact.classList.add("interact");

  interact.appendChild(statusBtn);
  interact.appendChild(removeBtn);

  const card = document.createElement("div");
  card.classList.add("card");
  card.appendChild(newTitle);
  card.appendChild(newAuthor);
  card.appendChild(newPage);
  card.appendChild(interact);
  lib.appendChild(card);

  const attribute = document.createAttribute("data-index");
  attribute.value = cardIndex;
  card.setAttributeNode(attribute);
  cardIndex++;
}

//Initialized the form
function initForm() {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");

  title.value = "";
  author.value = "";
  pages.value = "";
}

// document.addEventListener("DOMContentLoaded", displayBook);

displayBookForm.addEventListener("click", () => {
  bookForm.classList.remove("hidden");
});

bookForm.addEventListener("click", (e) => {
  if (e.target.className === "modal-container") {
    bookForm.classList.toggle("hidden");
  }
});

closeBookForm.addEventListener("click", () => {
  bookForm.classList.toggle("hidden");
});

addBook.addEventListener("click", (e) => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const hasRead = document.querySelector("input[name=readStatus]:checked");

  if (title && author && pages && hasRead) {
    e.preventDefault();
    addBookToLibrary(title, author, pages);
    displayNewBook(title, author, pages, hasRead);
    initForm();

    bookForm.classList.toggle("hidden");
  }
});

lib.addEventListener("click", (e) => {
  if (e.target.className === "remove") {
    const card = e.target.parentNode.parentNode;
    const indexInLib = card.dataset.index;
    delete myLibrary[indexInLib];

    const books = lib.querySelectorAll(".card");
    for (book of books) {
      if (book.dataset.index === indexInLib) {
        book.remove();
      }
    }
  }
});
