const mainEl = document.querySelector('main');
const colours = ['242, 201, 76', '242, 153, 74', '235, 87, 87', '155, 81, 224', '86, 204, 242', '47, 128, 237', '111, 207, 151', '39, 174, 96'];
async function getData() {
    let data = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books');
    let response = await data.json();
    return response;
}
const books = await getData();
books.forEach(book => {
    let bookEl = document.createElement('a');
    bookEl.href = "./book.html";
    bookEl.innerHTML = `<article><div class="book-line"></div><h2>${book.title}</h2><h3>${book.author}</h3></article>`;
    bookEl.style.backgroundColor = `rgb(${colours[book.id - 1]})`;
    mainEl.appendChild(bookEl);
    bookEl.addEventListener('click', () => {
        let bookObj = JSON.stringify(book);
        localStorage.setItem('clickedBook', bookObj);
        console.log(localStorage);
    });
});
export {};
