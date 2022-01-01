import populateStats from "./populateStats.js";
import { myLibrary } from "./loadMyLibrary";

function renderBooks() {
    let library = document.querySelector('.library');
    library.innerHTML = '';
    let fragment = new DocumentFragment();
    sortLibrary(myLibrary);
    myLibrary.forEach((book, index) => {
        const {
            title,
            authorName,
            authorSurname,
            pages,
            readStatus,
            language, 
            published,
            genres
        } = book;


        const whitespaceOnlyRegex = /^\s+$/;


        let bookCard = document.createElement('article');
        bookCard.classList.add('book-card');
        bookCard.dataset.id = index;
        let bookTitle = document.createElement('h2');
        bookTitle.textContent = `Title:  ${title}`;
        let by = document.createElement('p');


        if ((whitespaceOnlyRegex.test(authorName) || authorName === '')
        && (whitespaceOnlyRegex.test(authorSurname) || authorSurname === '')
        ) {
            by.textContent = '';
        }
        else if(whitespaceOnlyRegex.test(authorName) || authorName === '') {
            by.textContent = `By:  ${authorSurname}`;
        }
        else if(whitespaceOnlyRegex.test(authorSurname) || authorSurname === '') {
            by.textContent = `By:  ${authorName}`;
        }
        else by.textContent = `By:  ${authorName} ${authorSurname}`;


        let bookPages = document.createElement('p');
        if (whitespaceOnlyRegex.test(pages) || pages === '') {
            bookPages.textContent = '';
        }
        else bookPages.textContent = `Pages:  ${pages}`;


        let selectDiv = document.createElement('div');
        // this div is used to color the <select> el
        selectDiv.classList.add('select');
        let selectSpan = document.createElement('span');
        // the span is also used to style the <select> el
        selectSpan.classList.add('focus');
        let readStatusSelect = document.createElement('select');
        // readStatusSelect.id = 'read-status';
        readStatusSelect.classList.add('book-card-select-btn');
        readStatusSelect.required = true;
        readStatusSelect.addEventListener('change', function(e) {
            const newReadStatus = e.currentTarget.value;
            readStatusSelectChangeHandler(
                book,
                newReadStatus,
                selectDiv,
                bookCard
            );
        });


        let readOption = document.createElement('option');
        readOption.value = 'was-read';
        readOption.textContent = 'Read';
        let notReadOption = document.createElement('option');
        notReadOption.value = 'not-read';
        notReadOption.textContent = "Not read";
        let readingOption = document.createElement('option');
        readingOption.value = 'reading';
        readingOption.textContent = 'Reading';
        if (readStatus === 'was-read') {
            readOption.selected = true;
            bookCard.classList.add('read-color');
            selectDiv.classList.add('read-color');
        }
        else if (readStatus === 'not-read') {
            notReadOption.selected = true;
            bookCard.classList.add('not-read-color');
            selectDiv.classList.add('not-read-color');
        } 
        else if (readStatus === 'reading') {
            readingOption.selected = true;
            bookCard.classList.add('reading-color');
            selectDiv.classList.add('reading-color');
        } 


        readStatusSelect.append(readOption, notReadOption, readingOption);
        selectDiv.append(readStatusSelect, selectSpan);


        let bookLanguage = document.createElement('p');
        if (whitespaceOnlyRegex.test(language) || language === '') {
            bookLanguage.textContent = '';
        }
        else bookLanguage.textContent = `Language:  ${language}`;


        let datePublished = document.createElement('p');
        datePublished.textContent = published ? `Published:  ${published}` : '';


        let bookGenre = document.createElement('p');
        bookGenre.textContent = '';
        if (genres.length === 1) bookGenre.textContent = `Genres:  ${genres[0]}`;
        if (genres.length > 1) {
            genres.forEach((genre, index) => {
                if (index === 0) bookGenre.textContent = `Genres:  ${genre}, `;
                else if (index === genres.length - 1) {
                    bookGenre.textContent += genre;
                } 
                else bookGenre.textContent += genre + ', ';
            });
        }


          
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-book-btn');
        removeBtn.textContent = '×';
        removeBtn.addEventListener('click', function(e) {
            let bookCardToDelete = e.currentTarget.parentElement;
            removeBookHandler(bookCardToDelete);
        });


        bookCard.append(
            removeBtn,
            bookTitle,
            by,
            bookPages,
            bookLanguage,
            datePublished,
            bookGenre,
            selectDiv,
        );


        fragment.append(bookCard);
    });

    
    library.append(fragment);
    populateStats();
}

function sortLibrary(myLibrary) {
    const sortByValue 
    = Array.from(document.querySelectorAll('select.sort-select > option'))
    .find(option => option.selected).value;

    const sortOrder 
    = Array.from(document.querySelectorAll('select.sort-order-select > option'))
    .find(option => option.selected).value;

    if(sortByValue === 'pages') {
        myLibrary.sort((book1, book2) => {
            if (book1.pages > book2.pages) return 1;
            if (book1.pages == book2.pages) return 0;
            if (book1.pages < book2.pages) return -1;
        });
    }
    else if(sortByValue === 'published') {
        myLibrary.sort((book1, book2) => {
            return new Date(book1.published) - new Date(book2.published);
        }); 
    }
    else {
        /* for title, authorName, authorSurname, readStatus, language, and
        genres, use localeCompare to more accurately sort strings */
        myLibrary.sort((book1, book2) => {
            return book1[sortByValue].localeCompare(book2[sortByValue]);
        }); 
    }
    
    myLibrary.sort(() => sortOrder === 'Desc' ? 1 : -1);
}

function readStatusSelectChangeHandler(book, newReadStatus, selectDiv, bookCard) {
    book.setReadStatus(newReadStatus);
    let colorClass;
    if (newReadStatus === 'was-read') colorClass = 'read-color';
    if (newReadStatus === 'not-read') colorClass = 'not-read-color';
    if (newReadStatus === 'reading') colorClass = 'reading-color';
    bookCard.classList.remove('read-color', 'not-read-color', 'reading-color');
    selectDiv.classList.remove('read-color', 'not-read-color', 'reading-color');
    /* the div around the select el is what colors it.  the select can't be 
    colored itself */
    bookCard.classList.add(colorClass);
    selectDiv.classList.add(colorClass);
    renderBooks();
}

function removeBookHandler(bookCardToDelete) {
    const index = bookCardToDelete.dataset.id;
    let bookToDelete = myLibrary[index];
    bookToDelete.removeBook(index);
    bookCardToDelete.remove();
    renderBooks();
}

export default renderBooks;