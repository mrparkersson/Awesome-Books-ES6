/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const removeBtn = document.querySelectorAll('.removeBook');
const titleInput = document.querySelector('#book_title');
const authorInput = document.querySelector('#book_author');
const addBookBtn = document.querySelector('#add_book');
const addForm = document.querySelector('.addBookForm');
const bookList = document.querySelector('.list_present');

/*Navigation controls */
const listLink = document.querySelector(".list");
const addLink = document.querySelector(".add");
const contactLink = document.querySelector(".contact");

const listSection = document.querySelector(".bookListSection");
const addSection = document.querySelector(".addBookSection");
const contactSection = document.querySelector(".contactSection");
/*Navigation controls end */


const dateContainer = document.querySelector('.todaysDate');


let localStorageData = JSON.parse(localStorage.getItem('bookData'));

if (localStorageData === null) {
  localStorageData = [];
}
const booksBinding = new Books(bookList, localStorageData);

function addBook() {
  const title = titleInput.value;
  const author = authorInput.value;
  if (title !== "" && author !== "") {
    booksBinding.add(title, author);
    addForm.reset();
  }
}

function removeBook(bookId) {
  booksBinding.remove(bookId);
}

addBookBtn.addEventListener('click', addBook);

window.onresize = booksBinding.updateUI();

function formatAMPM(date) {
  console.log(date);
  const day = date.toDateString();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  seconds = seconds < 10 ? '0'+seconds : seconds;
  var strTime = day + ', ' +hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  return strTime;
}
dateContainer.innerHTML = formatAMPM(new Date);

function setAllLinksColorBlack() {
  const getAllLinks = document.querySelectorAll(".nav-bar ul a");
  getAllLinks.forEach((link) => {
    link.style.color = "black";
  });

}

function manipulateDom(elemArray, elemToShow, linkClicked) {
  setAllLinksColorBlack();
  elemArray = elemArray;
  elemArray.forEach((elem) => {
      elem.style.display = "none";
  });
  elemToShow.style.display = "block";
  linkClicked.style.color = "blue";
}

listLink.addEventListener('click', () => {
  const elemArray = document.querySelectorAll(".addBookSection, .contactSection");
  manipulateDom(elemArray, listSection, listLink);
});

addLink.addEventListener('click', () => {
  const elemArray = document.querySelectorAll(".bookListSection, .contactSection");
  manipulateDom(elemArray, addSection, addLink);
});

contactLink.addEventListener('click', () => {
  const elemArray = document.querySelectorAll(".bookListSection, .addBookSection");
  manipulateDom(elemArray, contactSection, contactLink);
});