const books = [];

class Book {
  constructor(title, author, genre, status){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.status = status;
  }
}


const fetchBooks = () =>{
  const fetchedBooks = books.map((book) => {
    return(
      `<div class = 'book'>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.genre}</p>
        <p>${book.status}</p>
      </div>`
    )
  });

  return fetchedBooks;
}

const render = (template, node) => {
  if (!node) return;
  node.innerHTML = template;
  console.log(node);
}

const setBooks = () =>{
  const allBooks = fetchBooks();
  const node = document.querySelector('.books');
  render(allBooks, node);
}

const openFormModal = (e) => {
  if (e.target.id != 'new-book-btn') return;
  const bookModal = document.querySelector('#book-modal');
  bookModal.classList.toggle('open-modal');
  bookModal.classList.toggle('book-form');
  bookModal.classList.toggle('new-book-form');
}

const close = (e) => {
  if (e.target.id == 'form-close-button'){
    let modal = document.querySelector('#book-modal');
  }
  modal.classList.toggle('new-book-form');
}

const addBookToLibrary = (e) => {
  if (e.target.id != 'form-submit') return;
  e.preventDefault();
  const form = document.getElementById('book-form');
  const title = form.elements[0].value;
  const author = form.elements[1].value;
  const genre = form.elements[2].value;
  const status = form.elements[3].value;
  let book = new Book(title, author, genre, status);
  books.push(book);
  setBooks();
}
