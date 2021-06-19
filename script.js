let myLibrary = [];

class Book {
  constructor(title, author, pages, have_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.have_read = have_read;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function displayCollection() {
  const bookCollection = document.querySelector('.book-collection');
  myLibrary.forEach(function(book){
    bookCollection.appendChild(displayBook(book));
  })
}

function displayBook(book) {
  const bookContainer = document.createElement('ul');
  const title = document.createElement('li');
  const author = document.createElement('li');
  const pages = document.createElement('li');
  const have_read = document.createElement('li');
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  have_read.textContent = book.have_read ? 'read' : 'not yet read';
  bookContainer.appendChild(title);
  bookContainer.appendChild(author);
  bookContainer.appendChild(pages);
  bookContainer.appendChild(have_read);
  return bookContainer;
}

// Temporary book data
const applesBook = new Book('Apples', 'Amy Atkins', '123', false)
const bananasBook = new Book('Bananas', 'Beth Baker', '456', false)
const cookiesBook = new Book('Cookies', 'Carl Clark', '789', true)

addBookToLibrary(applesBook);
addBookToLibrary(bananasBook);
addBookToLibrary(cookiesBook);

displayCollection();
