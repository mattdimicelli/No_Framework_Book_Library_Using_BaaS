import { myLibrary } from "./script.js";
function renderBooks() {
    let library = document.querySelector('.library');
    let fragment = new DocumentFragment();
    myLibrary.forEach((book, index) => {
        const {title, author, pages, readStatus, language, published, genres} 
        = book;
        const whitespaceOnlyRegex = /^\s+$/;
        let bookCard = document.createElement('article');
        bookCard.classList.add('book-card');
        let bookTitle = document.createElement('h2');
        bookTitle.textContent = `Title:  ${title}`;
        let by = document.createElement('p');
        if(whitespaceOnlyRegex.test(author) || author === '') {
            by.textContent = '';
        }
        else by.textContent = `By:  ${author}`;
        let bookPages = document.createElement('p');
        if (whitespaceOnlyRegex.test(pages) || pages === '') {
            bookPages.textContent = '';
        }
        else bookPages.textContent = `Pages:  ${pages}`;
        let selectDiv = document.createElement('div');
        selectDiv.classList.add('select');
        let selectSpan = document.createElement('span');
        selectSpan.classList.add('focus');
        let readStatusSelect = document.createElement('select');
        readStatusSelect.id = 'read-status';
        readStatusSelect.required = true;
        readStatusSelect.addEventListener('change', function(e) {
            book.setReadStatus(e, book);
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
        if (genres.length > 0) {
            genres.forEach((genre, index) => {
                if (index === 0) bookGenre.textContent = `Genres:  ${genre}, `;
                else if (index === genres.length - 1) {
                    bookGenre.textContent += genre;
                } 
                else bookGenre.textContent += genre + ', ';
            });
        }
        bookCard.dataset.id = index;  
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-book-btn');
        removeBtn.textContent = '×';
        removeBtn.addEventListener('click', function(e) {
            book.removeBook(e);
        });
        bookCard.append(
            removeBtn,
            bookTitle,
            by,
            bookPages,
            selectDiv,
            bookLanguage,
            datePublished,
            bookGenre,
        );
        fragment.append(bookCard);
    });
    library.append(fragment);
}

export default renderBooks;