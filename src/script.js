// import './reset.css';
// import './styles.css';

let myLibrary = [];

initializeApp();

function initializeApp() {
    console.log('fire')
    let openNewBookFormBtn = document.querySelector('button.open-new-book-form');
    openNewBookFormBtn.addEventListener('click', openNewBookForm);
    populateStats();
    renderBooks();
}

function populateStats() {
    const numRead = myLibrary.filter(book => book.readStatus === 'read').length;
    const numNotRead = myLibrary.filter(book => book.readStatus === 'not-read')
    .length;
    const numReading = myLibrary.filter(book => book.readStatus === 'reading')
    .length;
    document.querySelector('.total-num').textContent = String(myLibrary.length);
    document.querySelector('.read-num').textContent = String(numRead);
    document.querySelector('.not-read-num').textContent = String(numNotRead);
    document.querySelector('.reading-num').textContent = String(numReading);
}

function openNewBookForm() {
    let form = 
    `<form class="new-book-form">
        <label for="title">Title*</label>
        <input type="text" required="true" id="title" placeholder="Title"
        pattern=".*\\S.*">
        <!-- the pattern is so that the title of the book can't be only 
        whitespace. -->

        <label for="author">Author</label>
        <input type="text" id="author" placeholder="Author">

        <label for="pages">Number of pages</label>
        <input type="number" id="pages" placeholder="Number of pages">
        
        <label for="read-status">Have you read this book?</label>
        <select id="read-status-select" required>
            <option value="was-read" selected>Read</option>
            <option value="not-read">Haven't read</option>
            <option value="reading">Reading</option>
        </select>

        <label for="language">Language</label>
        <input id="language" type="text" placeholder="Language" list="languages"
        autocomplete="off">
        <datalist id="languages">
    `;
    const languages = [
        'Chinese',
        'Spanish',
        'English',
        'Hindi',
        'Arabic',
        'Bengali',
        'Portuguese',
        'Russian',
        'Japanese',
        'Punjabi',
        'German',
        'Javanese',
        'Wu',
        'Malay',
        'Telugu',
        'Vietnamese',
        'Korean',
        'French',
        'Marathi',
        'Tamil',
        'Urdu',
        'Turkish',
        'Italian',
        'Yue',
        'Thai',
        'Gujarati',
        'Jin',
        'Min',
        'Persian',
        'Polish'
    ];
    languages.sort().forEach(language => {
        form += `<option>${language}</option>`;
    });
    form += 
    `
    </datalist>

    <label for="published">Date published </label>
    <input type="date" id="published">

    <label for="genres">Genre(s)</label>
    <select type="text" id="genres" multiple="true">
        <option value="">Genres</option>
    `;
    const genres = [
        'Action & Adventure',
        'Classics',
        "Children's",
        'Comic Book or Graphic Novel',
        'Contemporary Fiction',
        'Detective & Mystery',
        'Dystopian',
        'Fantasy',
        'Historical Fiction',
        'Horror',
        'Literary Fiction',
        'Magical Realism',
        'New Adult',
        'Romance',
        'Science Fiction',
        'Short Stories',
        'Suspense & Thrillers',
        "Women's Fiction",
        'Art & Photography',
        'Biography',
        'Memoir & Autobiography',
        'Essays',
        'Food & Drink',
        'Guide / How-to',
        'History',
        'Humanities & Social Sciences',
        'Humor',
        'Parenting & Families',
        'Poetry',
        'Religion & Spirituality',
        'Science & Technology',
        'Self-Help',
        'Travel',
        'True Crime',
        'Young Adult',
        'Other'
    ]
    genres.sort().forEach(genre => {
        form += `<option>${genre}</option>`;
    });
    form +=
    `
    </select>
    <button class="new-book-form-submit" 
    onclick="newBookFormSubmitHandler(event)">
    Add Book
    </button>
    <button class="new-book-form-cancel" 
    onclick="newBookFormCancelHandler(event)">
    Cancel
    </button>
    </form>
    `;
    document.querySelector('.library').insertAdjacentHTML('beforeend', form);    
}

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
            pages.textContent = '';
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

function addBookToLibrary(
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

function Book(title, author, pages, readStatus, language, published, genres) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.language = language;
    this.published = published;
    this.genres = genres;
}

// eslint-disable-next-line no-unused-vars
function newBookFormSubmitHandler(e) {
    console.log('handler')
    e.preventDefault();
    const form = document.querySelector('.new-book-form');
    const valid = form.reportValidity();
    if (!valid) return;

    const title = document.querySelector('#title').value.trim(); 
    //string (with content)

    const author = document.querySelector('#author').value.trim();  
    //empty string or string (non-empty)

    const pages = document.querySelector('#pages').value.trim();  
    // empty string or string-number

    const readStatus = document.querySelector('#read-status-select').value;  
    //string (non-empty)

    const languageUnformatted = document.querySelector('#language').value.trim();
    const languageFormatted = languageUnformatted.slice(0,1).toUpperCase()
    + languageUnformatted.slice(1).toLowerCase();  //string
    const publishedDate = document.querySelector('#published').value;  
    //string

    const genreSelect = document.querySelector('#genres');  
    const selectedGenres = [...genreSelect.options]
    .filter(option => option.selected).map(option => option.value);  
    //empty array or array of strings
    addBookToLibrary(
        title,
        author,
        pages,
        readStatus,
        languageFormatted,
        publishedDate,
        selectedGenres
    );
    form.remove();
    renderBooks();
}

// eslint-disable-next-line no-unused-vars
function newBookFormCancelHandler() {
    document.querySelector('.new-book-form').remove();
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
    let bookCard = e.currentTarget.parentElement;
    myLibrary.splice(bookCard.dataset.id);
    bookCard.remove();
}



  