let myLibrary = [];
addBookToLibrary('Harry Potter', 'J.K. Rowling', 334, 'not-read', 'English', undefined, undefined);


renderBooks();

function renderBooks() {
    let library = document.querySelector('.library');
    let fragment = new DocumentFragment();
    myLibrary.forEach((book, index) => {
        const {title, author, pages, readStatus, language, published, genre} = book;
        let bookCard = document.createElement('article');
        let bookTitle = document.createElement('h2');
        bookTitle.textContent = title;
        let by = document.createElement('p');
        by.textContent = `By: ${author}`;
        let bookPages = document.createElement('p');
        bookPages.textContent = `Pages: ${pages}`;
        let readStatusSelect = document.createElement('select');
        readStatusSelect.id = 'was-read';
        readStatusSelect.required = true;
        readStatusSelect.addEventListener('change', function(e) {
            book.setReadStatus(e, book);
        });
        let readOption = document.createElement('option');
        readOption.value = 'read';
        readOption.textContent = 'Read';
        let notReadOption = document.createElement('option');
        notReadOption.value = 'not-read';
        notReadOption.textContent = "Haven't read";
        let readingOption = document.createElement('option');
        readingOption.value = 'reading';
        readingOption.textContent = 'Reading';
        readStatusSelect.append(readOption, notReadOption, readingOption);
        readStatusSelect.value = readStatus;
        let bookLanguage = document.createElement('p');
        bookLanguage.textContent = language ? `Language: ${language}` : '';
        let datePublished = document.createElement('p');
        datePublished.textContent = published ? `Published: ${published}` : '';
        let bookGenre = document.createElement('p');
        bookGenre.textContent = genre ? `Genre: ${genre}` : '';
        bookCard.dataset.id = index;  
        let removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.addEventListener('click', book.removeBook);
        bookCard.append(
            bookTitle, by, bookPages, readStatusSelect, bookLanguage, datePublished,
             bookGenre, removeBtn
        );
        fragment.append(bookCard);
    });
    library.append(fragment);
}

function addBookToLibrary(title, author, pages, readStatus, language, published, genre) {
    let newBook = new Book(title, author, pages, readStatus, language, published, genre);
    myLibrary.push(newBook);
}

function Book(title, author, pages, readStatus, language, published, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.language = language;
    this.published = published;
    this.genre = genre;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus ? 
        'read' : 'not yet read'}`;
}
Book.prototype.setReadStatus = function(e, book) {
    const readStatus = e.currentTarget.value;
    book.readStatus = readStatus;
}
Book.prototype.removeBook = function(e) {
    console.log('fire');
    let bookCard = e.currentTarget.parentElement;
    console.log(bookCard);
    myLibrary.splice(bookCard.dataset.id);
    bookCard.remove();
}



