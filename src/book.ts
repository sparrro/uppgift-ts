import { book } from "./interfaces"

const bookEl: HTMLElement = document.querySelector('.book')
const infoEl: HTMLElement = document.querySelector('.book-info')
const bodyEl: HTMLElement = document.querySelector('body')

const colours: string[] = ['242, 201, 76', '242, 153, 74', '235, 87, 87', '155, 81, 224', '86, 204, 242', '47, 128, 237', '111, 207, 151', '39, 174, 96']

const bookObj: book = JSON.parse(localStorage.clickedBook)

document.title = bookObj.title

bodyEl.style.backgroundColor = '#222222'

bookEl.style.backgroundColor = `rgb(${colours[bookObj.id-1]})`

bookEl.innerHTML = `
    <div class="book-line"></div>
    <h2>${bookObj.title}</h2>
    <h3>${bookObj.author}</h3>
`

infoEl.innerHTML = `
    <h2>${bookObj.title}</h2>
    <p>By ${bookObj.author}</p>
    <p>${bookObj.plot}</p>
    <div>
        <p><b>Audience: </b>${bookObj.audience}</p>
        <p><b>First published: </b>${bookObj.year}</p>
        <p><b>Pages: </b>${bookObj.pages == null ? 'i forgot to count, sorry' : bookObj.pages}</p>
        <p><b>Publisher: </b>${bookObj.publisher}</p>
    </div>
    <button>Oh, I want to read it!</button>
`