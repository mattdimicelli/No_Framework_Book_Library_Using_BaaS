let myLibrary = [{title: 'Harry Potter', author: 'J.K. Rowling', pages: 334, wasRead: true}];

renderBooks();

function renderBooks() {
    let library = document.querySelector('.library');
    let fragment = new DocumentFragment();
    myLibrary.forEach(book => {
        const { title, author, pages, wasRead } = book;
        let bookCard = document.createElement('article');
        let bookTitle = document.createElement('h2');
        bookTitle.textContent = title;
        let by = document.createElement('p');
        by.textContent = `By: ${author}`;
        let bookPages = document.createElement('p');
        bookPages.textContent = `Pages: ${pages}`;
        bookCard.append(bookTitle, by, bookPages);
        const toggleSwitch = 
        `<div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked="${wasRead}">
            <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
        </div>`;
        // depending on the input for wasRead, might need to sanitize wasRead to prevent XSS attacks
        bookCard.insertAdjacentHTML('beforeend', toggleSwitch);
        fragment.append(bookCard);
    });
    library.append(fragment);
}

function addBookToLibrary() {
    let newBook = new Book(title, author, pages, wasRead);
    myLibrary.push(newBook);
}

function Book(title, author, pages, wasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.wasRead ? 
        'read' : 'not yet read'}`;
}

