const titleInput = document.querySelector('#book_title');
const authorInput = document.querySelector('#book_author');
const addBookBtn = document.querySelector('#add_book');
const addForm = document.querySelector('.addBookForm');
const bookList = document.querySelector('.list_present');
addBookBtn.addEventListener('click', addBook);

function addBook() {
    const titleValue = titleInput.value;
    const authorValue = authorInput.value;
    
    if (titleValue !== "" && authorValue !== "" ) {

        if (books_data.length === 0) {
            bookList.innerHTML = '';
        }

        const bookId = Math.random().toString(36).slice(2);
        books_data.unshift({
            id: bookId,
            title: titleValue,
            author: authorValue
        });
        localStorage.setItem('bookData', JSON.stringify(books_data));
        addForm.reset();

        bookList.innerHTML = ` <li>
                            <h3> ${titleValue} </h3>
                            <p>by - ${authorValue} </p>
                            <input type="button" value="Remove" id="${bookId}" class="removeBook" onClick="removeBook('${bookId}')"/>
                        </li>` +  bookList.innerHTML;

    }
 }

 function removeBook(bookId) {
    books_data = books_data.filter(books => books.id !== bookId);
    localStorage.setItem('bookData', JSON.stringify(books_data));
    readBookData();
 }


function buildBookLists(book) {
    const bookData = `<li>
                        <h3> ${book.title} </h3>
                        <p>by - ${book.author} </p>
                        <input type="button" value="Remove" id="${book.id}" onClick="removeBook('${book.id}')"/>
                    </li>`;
    return bookData;
}
  
  
