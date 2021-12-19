let myLibrary = [{
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    pages: 334,
    wasRead: true,
    language: 'English',
    published: undefined,
    genre: undefined,
}];

renderBooks();

function renderBooks() {
    let library = document.querySelector('.library');
    let fragment = new DocumentFragment();
    myLibrary.forEach(book => {
        const {title, author, pages, wasRead, language, published, genre} = book;
        let bookCard = document.createElement('article');
        let bookTitle = document.createElement('h2');
        bookTitle.textContent = title;
        let by = document.createElement('p');
        by.textContent = `By: ${author}`;
        let bookPages = document.createElement('p');
        bookPages.textContent = `Pages: ${pages}`;
        let wasReadSelect = document.createElement('select');
        wasReadSelect.id = 'was-read';
        wasReadSelect.required = true;
        let readOption = document.createElement('option');
        readOption.value = 'read';
        readOption.textContent = 'Read';
        let notReadOption = document.createElement('option');
        notReadOption.value = 'not-read';
        notReadOption.textContent = "Haven't read";
        let readingOption = document.createElement('option');
        readingOption.value = 'reading';
        readingOption.textContent = 'Reading';
        wasReadSelect.append(readOption, notReadOption, readingOption);
        let bookLanguage = document.createElement('p');
        bookLanguage.textContent = language ? `Language: ${language}` : '';
        let datePublished = document.createElement('p');
        datePublished.textContent = published ? `Published: ${published}` : '';
        let bookGenre = document.createElement('p');
        bookGenre.textContent = genre ? `Genre: ${genre}` : '';
        bookCard.append(
            bookTitle, by, bookPages, wasReadSelect, bookLanguage, datePublished,
             bookGenre
        );
        fragment.append(bookCard);
    });
    library.append(fragment);
}

function addBookToLibrary() {
    let newBook = new Book(title, author, pages, wasRead);
    myLibrary.push(newBook);
}

function Book(title, author, pages, wasRead, language, published, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.wasRead ? 
        'read' : 'not yet read'}`;
}

