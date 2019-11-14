let books = [];

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
      `
      <div class = 'column'>
        <div class = 'book'>
          <div class='overlay row'>
            <div class='column'>
              <i class = 'delete-icon fas fa-times-circle' onclick = 'deleteBooks(${book.id})'></i>
              ${ book.status == 'Unread' ? 
              `<button class='mark-as-read' onclick='markAsRead(${book.id})'>Read</button>` : `<button class='mark-as-read' onclick='markAsUnread(${book.id})'>Unread</button>`
              }
            </div>
          </div>
        </div>
        <div class = 'book-details'>
          <p><span>Title:</span> ${book.title}</p>
          <p><span>Author:</span> ${book.author}</p>
          <p><span>Genre:</span> ${book.genre}</p>
          <p><span>Status:</span> ${book.status}</p>
        </div>
      </div>`
    )
  });

  return fetchedBooks.join('');
}

const render = (template, node) => {
  if (!node) return;
  node.innerHTML = template;
}

const setBooks = () =>{
  const allBooks = fetchBooks();
  const node = document.querySelector('.books');
  render(allBooks, node);
}


const createBooks = () => {for(let i = 0; i <= 10; i++){
  let book = new Book(`The boy who cried wolf ${i + 1}`, 'The man who saw the boy', 'A genre of tears', 'Unread' )
  books.push(book);
  book.id = books.indexOf(book);
}
setBooks();
}

const openFormModal = (e) => {
  if (e.target.id != 'new-book-btn') return;
  const bookModal = document.querySelector('#book-modal');
  bookModal.classList.toggle('book-form');
  bookModal.classList.toggle('closed-book-form');
}

const closeModal = (e) => {
  e.preventDefault();
  if (e.target.id == 'close'){
    const modal = document.querySelector('#book-modal');
    modal.classList.toggle('book-form');
    modal.classList.toggle('closed-book-form');
  }
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
  book.id = books.indexOf(book);
}

const deleteBooks = (id) => {
  books = books.filter( book => book.id != id);
  setBooks();
}

const markAsRead = (id) =>{
  let book = books[id];
  book.status = 'Read'
  setBooks();
}

const markAsUnread = (id) =>{
  let book = books[id];
  book.status = 'Unread'
  setBooks();
}