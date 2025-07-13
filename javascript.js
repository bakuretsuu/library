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

  function displayBooks(){

  }


  // Manually add a few books for now
myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, false, crypto.randomUUID()));
myLibrary.push(new Book("1984", "George Orwell", 328, true, crypto.randomUUID()));
myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", 281, false, crypto.randomUUID()));

displayBooks();