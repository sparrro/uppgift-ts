import { book } from "./interfaces"

const mainEl: HTMLElement = document.querySelector('main')
const searchEl: HTMLInputElement = document.getElementById('search') as HTMLInputElement
const resultsEl: HTMLElement = document.querySelector('.results')

const colours: string[] = ['242, 201, 76', '242, 153, 74', '235, 87, 87', '155, 81, 224', '86, 204, 242', '47, 128, 237', '111, 207, 151', '39, 174, 96']
const theAlphabet: string[] = [...'qwertyuiopasdfghjklzxcvbnm']

async function getData(): Promise<book[]> {
    let data: Response = await fetch('https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books')
    let response: book[] = await data.json()
    return response
}

const books: book[] = await getData()
books.forEach((book):void => {
    let bookEl: HTMLAnchorElement = document.createElement('a')
    bookEl.href = "./book.html"
    bookEl.innerHTML = `<article><div class="book-line"></div><h2>${book.title}</h2><h3>${book.author}</h3></article>`
    bookEl.style.backgroundColor = `rgb(${colours[book.id-1]})`
    mainEl.appendChild(bookEl)
    bookEl.addEventListener('click', ():void => {
        let bookObj: string = JSON.stringify(book)
        localStorage.setItem('clickedBook', bookObj)
    })
})

searchEl.addEventListener('keyup', (e):void => {
    resultsEl.innerHTML = ''
    books.forEach((book):void => {
        if (book.title.toLowerCase().includes(searchEl.value.toLowerCase()) && theAlphabet.includes(e.key)) {
            let resultEl: HTMLElement = document.createElement('li')
            resultEl.innerHTML = `<a href="./book.html">${book.title}</a>`
            resultsEl.appendChild(resultEl)
            resultEl.addEventListener('click', ():void => {
                let bookObj: string = JSON.stringify(book)
                localStorage.setItem('clickedBook', bookObj)
            })
        }
    })
})