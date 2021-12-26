import { myLibrary } from './script.js';

function Book(title, author, pages, readStatus, language, published, genres) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.language = language;
    this.published = published;
    this.genres = genres;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus ? 
        'read' : 'not yet read'}`;
}
Book.prototype.setReadStatus = function(e, book) {
    const readStatus = e.currentTarget.value;
    const selectDiv = e.currentTarget.parentElement;
    const bookCard = selectDiv.parentElement;
    let colorClass;
    if (readStatus === 'was-read') colorClass = 'read-color';
    if (readStatus === 'not-read') colorClass = 'not-read-color';
    if (readStatus === 'reading') colorClass = 'reading-color';
    bookCard.classList.remove('read-color', 'not-read-color', 'reading-color');
    selectDiv.classList.remove('read-color', 'not-read-color', 'reading-color');
    bookCard.classList.add(colorClass);
    selectDiv.classList.add(colorClass);
    book.readStatus = readStatus;
}

Book.prototype.removeBook = function(e) {
    let bookCard = e.currentTarget.parentElement;
    myLibrary.splice(bookCard.dataset.id);
    bookCard.remove();
}

export function addBookToLibrary(
    title,
    author,
    pages,
    readStatus,
    language,
    published,
    genres
    ) {
    let newBook = new Book(
        title,
        author,
        pages,
        readStatus,
        language,
        published,
        genres
        );
    myLibrary.push(newBook);
}