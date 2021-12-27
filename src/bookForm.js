import renderBooks from "./renderBooks";
import { addBookToLibrary } from './addBookToLibrary.js';

export function newBookFormSubmitHandler(e) {
    e.preventDefault();
    const form = document.querySelector('.new-book-form');
    const valid = form.reportValidity();
    if (!valid) return;

    const titleUnformatted = document.querySelector('#title').value.trim(); 
    //string (with content)
    const titleFormatted = titleUnformatted.slice(0,1).toUpperCase()
    + titleUnformatted.slice(1);  //string

    const authorNameUnformatted = document.querySelector('#author-name').value.trim();  
    //empty string or string (non-empty)
    const authorNameFormatted = authorNameUnformatted.slice(0,1).toUpperCase()
    + authorNameUnformatted.slice(1);  //string

    const authorSurnameUnformatted = document.querySelector('#author-surname').value.trim();  
    //empty string or string (non-empty)
    const authorSurnameFormatted = authorSurnameUnformatted.slice(0,1).toUpperCase()
    + authorSurnameUnformatted.slice(1);  //string

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
        titleFormatted,
        authorNameFormatted,
        authorSurnameFormatted,
        pages,
        readStatus,
        languageFormatted,
        publishedDate,
        selectedGenres
    );
    form.remove();
    document.querySelector('.book-form-modal').style.display = '';
    renderBooks();
}

export function newBookFormCancelHandler() {
    document.querySelector('.new-book-form').remove();
    document.querySelector('.book-form-modal').style.display = '';
}

export function openNewBookForm() {
    const formInDOM = document.querySelector('.new-book-form');
    if(formInDOM) return;
    let form = 
    `<form class="new-book-form">
        <button class="cancel-new-book-btn" onclick="newBookFormCancelHandler(event)">
        ×
        </button>
        <h1 class="new-book-form-title">Add New Book</h1>
        <label for="title">Title*</label>
        <input type="text" required="true" id="title" placeholder="Title"
        pattern=".*\\S.*">
        <!-- the pattern is so that the title of the book can't be only 
        whitespace. -->

        <label for="author-name">Author's names</label>
        <input type="text" id="author-name" placeholder="Author's names">

        <label for="author-surname">Author's surname</label>
        <input type="text" id="author-surname" placeholder="Author's surname">

        <label for="pages">Number of pages</label>
        <input type="number" id="pages" placeholder="Number of pages">
        
        <label for="read-status">Have you read this book?</label>
        <select id="read-status-select" required>
            <option value="was-read" selected>Read</option>
            <option value="not-read">Not read</option>
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
    </form>
    `;
    let modal = document.querySelector('.book-form-modal');
    modal.insertAdjacentHTML('beforeend', form);    
    modal.style.display = 'block';
}