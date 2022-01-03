/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const titleInput = document.querySelector('#book_title');
const authorInput = document.querySelector('#book_author');
const addBookBtn = document.querySelector('#add_book');
const addForm = document.querySelector('.addBookForm');
const bookList = document.querySelector('.list_present');

function addBook() {
  const titleValue = titleInput.value;
  const authorValue = authorInput.value;

  if (titleValue !== '' && authorValue !== '') {
    if (booksData.length === 0) {
      bookList.innerHTML = '';
    }

    const bookId = Math.random().toString(36).slice(2);
    booksData.unshift({
      id: bookId,
      title: titleValue,
      author: authorValue,
    });
    localStorage.setItem('bookData', JSON.stringify(booksData));
    addForm.reset();

    bookList.innerHTML = ` <li>
                            <h3> ${titleValue} </h3>
                            <p>by - ${authorValue} </p>
                            <input type="button" value="Remove" id="${bookId}" class="removeBook" onClick="removeBook('${bookId}')"/>
                        </li>${bookList.innerHTML}`;
  }
}

addBookBtn.addEventListener('click', addBook);

function removeBook(bookId) {
  booksData = booksData.filter((books) => books.id !== bookId);
  localStorage.setItem('bookData', JSON.stringify(booksData));
  // readBookData();
}

function buildBookLists(book) {
  const bookData = `<li>
                        <h3> ${book.title} </h3>
                        <p>by - ${book.author} </p>
                        <input type="button" value="Remove" id="${book.id}" onClick="removeBook('${book.id}')"/>
                    </li>`;
  return bookData;
}
