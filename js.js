const myLibrary = [];

function Book(title, pages, read) {
  this.title = title || "Anonymous";
  this.pages = pages || null;
  this.read = read || false;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
