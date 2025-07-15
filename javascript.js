const myLibrary = [];

function Book(title, author, pages, isRead, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
  
    this.info = function() {
      const readStatus = this.isRead ? "read" : "not read yet";
      return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
  }

  function addBookToLibrary() {
    // take params, create a book then store it in the array
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let isRead = document.getElementById('isRead').checked;
    let id = crypto.randomUUID();

    let newBook = new Book(title, author, pages, isRead, id);
    myLibrary.push(newBook);
  }

function removeBookFromLibrary(bookId){
  myLibrary.splice(myLibrary.findIndex(book => book.id === bookId),1);
    displayBooks();
  }

Book.prototype.toggleRead = function(){
  this.isRead = !this.isRead;
}

function displayBooks(){
  const library = document.querySelector('.library');
  library.innerHTML = '';

  myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.isRead ? 'Read' : 'Not read yet'}</p>
    `;
    
    const readBtn = document.createElement('button');
    readBtn.textContent = "Read/Unread";
    readBtn.addEventListener('click', () => {
      book.toggleRead();
      displayBooks();
    });
    bookCard.appendChild(readBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete Book";
    deleteBtn.addEventListener('click', () => {
    removeBookFromLibrary(book.id);
    });

    bookCard.appendChild(deleteBtn);
    library.appendChild(bookCard);
  });
}


  // Manually add a few books for now
myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, false, crypto.randomUUID()));
myLibrary.push(new Book("1984", "George Orwell", 328, true, crypto.randomUUID()));
myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", 281, false, crypto.randomUUID()));

displayBooks();

document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.querySelector('dialog');
  const closeBtn = document.querySelector('.closeBtn');
  const form = document.querySelector('#bookForm');
  const openBtn = document.querySelector('#openDialogBtn');
  
  openBtn.addEventListener('click', () => {
  dialog.showModal();
  });

  closeBtn.addEventListener('click', () => {
  dialog.close();
  });

  form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  addBookToLibrary();
  displayBooks();
  form.reset();
  dialog.close();
  });

  
});