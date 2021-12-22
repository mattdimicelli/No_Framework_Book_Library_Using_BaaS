import { myLibrary } from "./script.js";
function renderBooks() {
    let library = document.querySelector('.library');
    let fragment = new DocumentFragment();
    myLibrary.forEach((book, index) => {
        const {title, author, pages, readStatus, language, published, genres} 
        = book;
        const whitespaceOnlyRegex = /\s+/;
        let bookCard = document.createElement('article');
        let bookTitle = document.createElement('h2');
        bookTitle.textContent = `Title: ${title}`;
        let by = document.createElement('p');
        if(whitespaceOnlyRegex.test(author) || author === '') {
            by.textContent = '';
        }
        else by.textContent = `By: ${author}`;
        let bookPages = document.createElement('p');
        if (whitespaceOnlyRegex.test(pages) || pages === '') {
            bookPages.textContent = '';
        }
        else bookPages.textContent = `Pages: ${pages}`;
        let readStatusSelect = document.createElement('select');
        readStatusSelect.id = 'read-status';
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
        if (readStatus === 'read') readOption.selected = true;
        else if (readStatus === 'not-read') notReadOption.selected = true;
        else if (readStatus === 'reading') readingOption.selected = true;
        readStatusSelect.append(readOption, notReadOption, readingOption);
        let bookLanguage = document.createElement('p');
        if (whitespaceOnlyRegex.test(language) || language === '') {
            bookLanguage.textContent = '';
        }
        else bookLanguage.textContent = `Language: ${language}`;
        let datePublished = document.createElement('p');
        datePublished.textContent = published ? `Published: ${published}` : '';
        let bookGenre = document.createElement('p');
        bookGenre.textContent = '';
        if (genres.length > 0) {
            genres.forEach((genre, index) => {
                if (index === 0) bookGenre.textContent = `Genres: ${genre}, `;
                else if (index === genres.length - 1) {
                    bookGenre.textContent += genre;
                } 
                else bookGenre.textContent += genre + ', ';
            });
        }
        bookCard.dataset.id = index;  
        let removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.addEventListener('click', function(e) {
            book.removeBook(e);
        });
        bookCard.append(
            bookTitle,
            by,
            bookPages,
            readStatusSelect,
            bookLanguage,
            datePublished,
            bookGenre,
            removeBtn
        );
        fragment.append(bookCard);
    });
    library.append(fragment);
}

export default renderBooks;