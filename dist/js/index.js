const mainEl = document.querySelector('main');
const searchEl = document.getElementById('search');
const resultsEl = document.querySelector('.results');
const colours = ['242, 201, 76', '242, 153, 74', '235, 87, 87', '155, 81, 224', '86, 204, 242', '47, 128, 237', '111, 207, 151', '39, 174, 96'];
const theAlphabet = [...'qwertyuiopasdfghjklzxcvbnm'];
async function getData() {
    let data = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books');
    let response = await data.json();
    return response;
}
const books = await getData();
books.forEach((book) => {
    let bookEl = document.createElement('a');
    bookEl.href = "./book.html";
    bookEl.innerHTML = `<article><div class="book-line"></div><h2>${book.title}</h2><h3>${book.author}</h3></article>`;
    bookEl.style.backgroundColor = `rgb(${colours[book.id - 1]})`;
    mainEl.appendChild(bookEl);
    bookEl.addEventListener('click', () => {
        let bookObj = JSON.stringify(book);
        localStorage.setItem('clickedBook', bookObj);
    });
});
searchEl.addEventListener('keyup', (e) => {
    resultsEl.innerHTML = '';
    books.forEach((book) => {
        if (book.title.toLowerCase().includes(searchEl.value.toLowerCase()) && theAlphabet.includes(e.key)) {
            let resultEl = document.createElement('li');
            resultEl.innerHTML = `<a href="./book.html">${book.title}</a>`;
            resultsEl.appendChild(resultEl);
            resultEl.addEventListener('click', () => {
                let bookObj = JSON.stringify(book);
                localStorage.setItem('clickedBook', bookObj);
            });
        }
    });
});
export {};
