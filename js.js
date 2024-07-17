const myLibrary = [];

function Book(title, pages, read) {
  this.title = title || "Anonymous";
  this.pages = pages || null;
  this.read = read || false;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  addBookToHTMLLibrary(book);
}

function addBookToHTMLLibrary(book) {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("bookDiv");
  bookDiv.textContent = book.title;
  document.querySelector("#library").appendChild(bookDiv);
}
