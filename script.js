const display = document.getElementById("display-book");
const form = document.getElementById("book-form");
const openBtn = document.getElementById("openBtn");
const dialog = document.getElementById("my-dialog");
const bookNameInput = document.getElementById("book-name");
const bookTitleInput = document.getElementById("book-title");
const authorInput = document.getElementById("author");
const bookPagesInput = document.getElementById("pages");
const mySelection = document.getElementById("mySelection");

let myLibrary = [];

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

  bookNameInput.value = "";
  bookTitleInput.value = "";
  authorInput.value = "";
  bookPagesInput.value = "";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const bookName = bookNameInput.value;
  const bookTitle = bookTitleInput.value;
  const author = authorInput.value;
  const pages = bookPagesInput.value;
  const status = mySelection.value === "read" ? "Read" : "Not Read";
  // To prevent saving empty data input.
  const book = new Book(
    bookName,
    bookTitle,
    author,
    pages,
    status,
    crypto.randomUUID(),
  );
  if (!bookName || !bookTitle || !author || !pages) return;
  myLibrary.push(book);
  displayBooks();
  dialog.close();
});

function displayBooks() {
  // clear old books first to prevent duplicate rows.
  display.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const row = document.createElement("tr");

    const nameTd = document.createElement("td");
    nameTd.textContent = myLibrary[i].name;
    const titleTd = document.createElement("td");
    titleTd.textContent = myLibrary[i].title;
    const authorTd = document.createElement("td");
    authorTd.textContent = myLibrary[i].author;
    const pagesTd = document.createElement("td");
    pagesTd.textContent = myLibrary[i].pages;
    const statusTd = document.createElement("td");
    statusTd.textContent = myLibrary[i].status;

    const deleteTd = document.createElement("td");
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.dataset.id = myLibrary[i].id;

    deleteTd.appendChild(deleteBtn);

    row.appendChild(nameTd);
    row.appendChild(titleTd);
    row.appendChild(authorTd);
    row.appendChild(pagesTd);
    row.appendChild(statusTd);
    row.appendChild(deleteTd);
    display.appendChild(row);
  }
}

display.addEventListener("click", (e) => {
  if (!e.target.dataset.id) return;
  const bookId = e.target.dataset.id;

  myLibrary = myLibrary.filter((book) => book.id !== bookId);
  displayBooks();
});
