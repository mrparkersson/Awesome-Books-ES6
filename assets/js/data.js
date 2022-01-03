/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Books {
    constructor (element, storedItems) {
        this.showBooksElement = element;
        this.booksData = storedItems;
    }

    updateStorage() {
        localStorage.setItem('bookData', JSON.stringify(this.booksData));
    }

    static createBookDisplay (book, empty = false) {
        const li = document.createElement('li');
        if (!empty) {
            li.innerHTML = `<h3> ${book.title} </h3>
                            <p>by - ${book.author} </p>
                            <input type="button" value="Remove" id="${book.id}" class="removeBook" onClick="removeBook('${book.id}')"/>`;
        } else {
            li.innerHTML = `<h3>No books available</h3>`;
        }
      
        return li;
    }

    updateUI () {
        while (this.showBooksElement.firstChild) {
            this.showBooksElement.removeChild(this.showBooksElement.firstChild);
        }

        if (this.booksData.length > 0) {
            for (const book of this.booksData) {
                this.showBooksElement.appendChild(Books.createBookDisplay(book));
            }
        } else {
            this.showBooksElement.appendChild(Books.createBookDisplay({}, true));
        }   
    }

    add (title, author) {
        const bookId = Math.random().toString(36).slice(2);
        this.booksData.unshift({
          id: bookId,
          title: title,
          author: author,
        });
        this.updateStorage();
        this.updateUI();
    }

    remove (bookId) {
        this.booksData = this.booksData.filter((books) => books.id !== bookId);
        this.updateStorage();
        this.updateUI();
    }
}
