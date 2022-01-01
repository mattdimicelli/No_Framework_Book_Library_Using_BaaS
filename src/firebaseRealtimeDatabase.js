import { getDatabase, ref, child, get, set } from 'firebase/database';
import { myLibrary } from './loadMyLibrary.js';

export async function loadLibraryFromDatabase(userId) {
    const dbRef = ref(getDatabase());
    try {
      const snapshot = await get(child(dbRef, `users/${userId}`));
      if (snapshot.exists()) {
        console.log('snapshot returned')
        let library = snapshot.val();
        return JSON.parse(library);
      } else {
      console.log("User does not have library stored in database");
      } 
    }
    catch(error) {
      console.error(error);
    }
}

export function saveLibraryToDatabase(userId) {
    console.log(userId);
    let dataToUpload;
    for (let book of myLibrary) {
        
    })    
    console.log(myLibrary);
    const db = getDatabase();
    set(ref(db, 'users/' + userId), JSON.stringify(myLibrary));
}


