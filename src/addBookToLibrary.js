import { myLibrary } from './script.js';

function Book(title, authorName, authorSurname, pages, readStatus, language, published, genres) {
    this.title = title;
    this.authorName = authorName;
    this.authorSurname = authorSurname;
    this.pages = pages;
    this.readStatus = readStatus;
    this.language = language;
    this.published = published;
    this.genres = genres;
}

Book.prototype.setReadStatus = function(readStatus) {
    this.readStatus = readStatus;
}

Book.prototype.removeBook = function(e) {
    let bookCard = e.currentTarget.parentElement;
    myLibrary.splice(bookCard.dataset.id, 1);
    bookCard.remove();
}

export function addBookToLibrary(
    title,
    authorName,
    authorSurname,
    pages,
    readStatus,
    language,
    published,
    genres
    ) {
    let newBook = new Book(
        title,
        authorName,
        authorSurname,
        pages,
        readStatus,
        language,
        published,
        genres
        );
    myLibrary.push(newBook);
}