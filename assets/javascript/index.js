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


