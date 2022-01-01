import renderBooks from './renderBooks.js';
import {
    newBookFormSubmitHandler,
    newBookFormCancelHandler,
    openNewBookForm 
} from './newBookForm.js';
import { loadLibraryFromDatabase } from './firebaseRealtimeDatabase.js';

export let myLibrary = [];

export default async function loadMyLibrary(userId) {
    addEventListeners();
    hideSignIn();
    const loadedLibrary = await loadLibraryFromDatabase(userId);
    if (loadedLibrary) myLibrary = loadedLibrary;
    console.log(myLibrary);
    showLibrary();
}



function addEventListeners() {
    window.newBookFormSubmitHandler = newBookFormSubmitHandler;
    window.newBookFormCancelHandler = newBookFormCancelHandler;
    /* the two inline event handlers in the HTML call these functions
    which are renamed when Webpack bundles the app.  Both of these functions
    are added to the global scope so that the HTML can call them even
    after the bundling.  This design choice, while maybe not ideal,
    was a work-around that I found interesting enough to leave */

    let openNewBookFormBtn = document.querySelector('button.open-new-book-form');
    openNewBookFormBtn.addEventListener('click', openNewBookForm);
    let sortBySelect = document.querySelector('select.sort-select');
    sortBySelect.addEventListener('change', renderBooks);
    let sortOrder = document.querySelector('select.sort-order-select');
    sortOrder.addEventListener('change', renderBooks);
}

function hideSignIn() {
    let signInWrapper = document.querySelector('.sign-in-wrapper');
    signInWrapper.classList.add('hidden');
}

function showLibrary() {
    let wrapper = document.querySelector('.wrapper');
    wrapper.classList.remove('hidden');
    
    renderBooks();
}