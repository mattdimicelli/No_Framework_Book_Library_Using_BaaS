import { myLibrary } from "./script.js";
export default function populateStats() {
    const numRead = myLibrary.filter(book => book.readStatus === 'was-read')
    .length;
    const numNotRead = myLibrary.filter(book => book.readStatus === 'not-read')
    .length;
    const numReading = myLibrary.filter(book => book.readStatus === 'reading')
    .length;
    document.querySelector('.total-num').textContent = String(myLibrary.length);
    document.querySelector('.read-num').textContent = String(numRead);
    document.querySelector('.not-read-num').textContent = String(numNotRead);
    document.querySelector('.reading-num').textContent = String(numReading);
}