let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];

const bookForm = document.querySelector('form');
const modalButton = document.querySelector('.modal-button');
const modalBackground = document.querySelector('.modal-background');
const modalCancel = document.querySelector('.modal-cancel');

class Book {
  constructor(title, author, pages, have_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.have_read = have_read;
  }
}

function displayCollection() {
  myLibrary.forEach(function(book){
    displayBook(book)
  })
}

function displayBook(book) {
  const bookCollection = document.querySelector('.book-collection');
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
  bookCollection.appendChild(bookContainer);
}

function displayModal() {
  modalBackground.style.display = "block";
};

function closeModal() {
  modalBackground.style.display = "none";
};

const addBook = (event)=>{
  event.preventDefault();

  const book =  new Book(
    document.getElementById('title').value,
    document.getElementById('author').value,
    document.getElementById('pages').value,
    document.getElementById('status').checked
  );

  displayBook(book);
  myLibrary.push(book);
  bookForm.reset();
  closeModal();
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary) );
};

displayCollection();

bookForm.addEventListener('submit', addBook);
modalButton.addEventListener('click', displayModal);
modalCancel.addEventListener('click', closeModal);
