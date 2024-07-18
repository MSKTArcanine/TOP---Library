const myLibrary = [];

function Book(title, pages, read) {
  this.title = title || "Anonymous";
  this.pages = pages || null;
  this.read = read || false;
}

function addBookToLibrary() {
  const book = createBook();
  myLibrary.push(book);
}

function addBookToHTMLLibrary() {}

// INPUTs
function createBook() {
  const getTitle = document.querySelector("input").value;
  const getPages = document.querySelector("input[type=number]").value;
  const getHasRead = document.querySelector(
    "input[name=hasRead]:checked"
  ).value;
  return new Book(getTitle, getPages, getHasRead);
}

//SUMBIT
const SUBMITBUTTON = document.querySelector("button");
SUBMITBUTTON.addEventListener("click", function (e) {
  e.preventDefault();
  addBookToLibrary();
});
