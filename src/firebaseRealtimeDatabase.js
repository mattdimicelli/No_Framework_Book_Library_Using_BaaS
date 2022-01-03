import { getDatabase, ref, child, get, set } from 'firebase/database';
import { myLibrary } from './loadMyLibrary.js';
import { Book } from './addBookToLibrary.js';

export async function loadLibraryFromDatabase(userId) {
    const dbRef = ref(getDatabase());
    try {
      const snapshot = await get(child(dbRef, `users/${userId}`));
      if (snapshot.exists()) {
        let libraryData = snapshot.val();
        let newLocalMyLibrary = [];
        for (let bookData of libraryData) {
          const { title, authorName, authorSurname, pages, readStatus, language,
             published, genres } = bookData;
          let book = new Book(title, authorName, authorSurname, pages, 
            readStatus, language, published, genres);
          if (book.genres === 'no genre') {
            book.genres = [];
            // Locally the book genres are stored in array, but if the book in 
            // question did not have any genres defined, the array was converted
            // into a string for purposes of storing that "empty" genres value
            // in the Firebase database, since the Firebase database will not
            // store an empty array.
          }
          newLocalMyLibrary.push(book);
        }
        return newLocalMyLibrary;
      } else {
      console.log("User does not have library stored in database");
      } 
    }
    catch(error) {
      console.error(error);
    }
}

export function saveLibraryToDatabase(userId) {
    let dataToUpload = [];
    for (let book of myLibrary) {
        let bookData = {...book};
        if (bookData.genres.length === 0) {
          bookData.genres = 'no genre';
          // Firebase will not store an empty array
        }
        dataToUpload.push(bookData);
    }    
    const db = getDatabase();
    set(ref(db, 'users/' + userId), dataToUpload);
}


