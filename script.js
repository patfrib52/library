const display = document.getElementById("display-book");
const form = document.getElementById("book-form");
const openBtn = document.getElementById("openBtn");
const dialog = document.getElementById("my-dialog");
const bookNameInput = document.getElementById("book-name");
const bookTitleInput = document.getElementById("book-title");
const authorInput = document.getElementById("author");
const bookPagesInput = document.getElementById("pages");
const mySelection = document.getElementById("mySelection");

const myLibrary = [
  {
    name: "Alice",
    title: "in wonderland",
    author: "me!",
    pages: 12,
    status: "/",
    id: "",
  },
];

class Book {
  constructor(name, title, author, pages, status, id) {
    this.name = name;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = id;
  }
}

openBtn.addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const bookName = bookNameInput.value;
  const bookTitle = bookTitleInput.value;
  const author = authorInput.value;
  const pages = bookPagesInput.value;

  const book = new Book(bookName, bookTitle, author, pages, "", "");
  myLibrary.push(book);
  displayBook();
  console.log(book);
  dialog.close();
});

function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    // make sure every book get an id.
    if (!myLibrary[i].id) {
      myLibrary[i].id += crypto.randomUUID();
    }

    if (mySelection.value === "read") {
      myLibrary[i].status += "READ";
    } else if (mySelection.value === "notRead") {
      myLibrary[i].status += "Not Read";
    }

    display.innerHTML += `<tr>
    <td>${myLibrary[i].name}</td>
    <td>${myLibrary[i].title}</td>
    <td>${myLibrary[i].author}</td>
    <td>${myLibrary[i].pages}</td>
    <td>${myLibrary[i].status}</td>
    <td>${myLibrary[i].id}</td>
    
    </tr>`;
  }
}
