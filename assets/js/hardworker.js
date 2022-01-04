/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const removeBtn = document.querySelectorAll('.removeBook');
const titleInput = document.querySelector('#book_title');
const authorInput = document.querySelector('#book_author');
const addBookBtn = document.querySelector('#add_book');
const addForm = document.querySelector('.addBookForm');
const bookList = document.querySelector('.list_present');
let localStorageData = JSON.parse(localStorage.getItem('bookData'));

if (localStorageData === null) {
  localStorageData = [];
}
const booksBinding = new Books(bookList, localStorageData);

function addBook() {
  const title = titleInput.value;
  const author = authorInput.value;
  booksBinding.add(title, author);
  addForm.reset();
}

function removeBook(bookId) {
  booksBinding.remove(bookId);
}

addBookBtn.addEventListener('click', addBook);

window.onresize = booksBinding.updateUI();
