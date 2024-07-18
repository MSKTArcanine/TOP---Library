const myLibrary = [];

function Book(title, pages, read) {
  this.title = title || "Anonymous";
  this.pages = pages || null;
  this.read = read || false;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addBookToHTMLLibrary() {
  myLibrary.forEach((item) => {
    const divBook = document.createElement("div");
    divBook.classList.add("bookDiv");
    divBook.textContent = item.title;
    document.querySelector("#library").appendChild(divBook);
  });
}
