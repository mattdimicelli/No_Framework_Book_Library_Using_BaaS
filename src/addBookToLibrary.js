import { myLibrary } from './loadMyLibrary.js';
import { saveLibraryToDatabase } from './firebaseRealtimeDatabase.js';
import { globalUser } from './firebaseAuthentication.js';

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
    saveLibraryToDatabase(globalUser.uid);
}

Book.prototype.removeBook = function(index) {
    myLibrary.splice(index, 1);
    saveLibraryToDatabase(globalUser.uid);
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
    console.log(globalUser);
    saveLibraryToDatabase(globalUser.uid);
}