
const form = document.querySelector('form')
const author = document.querySelector('#author')
const title = document.querySelector('#title')
const numberPages = document.querySelector('#number_of_pages')
const readStatus = document.querySelector('#read_status')

let myLibrary = [];

function Book(author, title, numberPages, readStatus) {
    // the constructor...
    this.author = author;
    this.title = title;
    this.numberPages = numberPages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const newBook1 = new Book(
    "Brian W. Kernighan - Dennis Ritchie",
    "C Programming Language",
    274,
    "Read"
)

const newBook2 = new Book(
    " H. M. Deitel",
    "C++: Como Programar",
    1208,
    "Not Read"
)

addBookToLibrary(newBook1)
addBookToLibrary(newBook2)

const bringsUp = () => {
    const el = document.querySelector(".book-form")
    el.style.display = el.style.display == "none" ? "block" : "none"
}

const deleteRow = (e) => {
    e.parentElement.parentElement.remove()
}

const createBtn = (value) => {
    const btn = document.createElement('button')
    const btnText = document.createTextNode(value)
    btn.appendChild(btnText)
    btn.setAttribute('onclick', 'deleteRow(this)')
    return btn
}

const createCell = (value) => {
    const cell = document.createElement("td")
    const cellText = document.createTextNode(value)
    cell.appendChild(cellText)
    return cell
}

count = 0
const display = () => {
    const table = document.querySelector('table')
    for (let i = 0 + count; i < myLibrary.length; i++) {
        const row = document.createElement("tr")
        for (const [_, value] of Object.entries(myLibrary[i])) {
            row.appendChild(createCell(value))
        }
        const cell = document.createElement("td")
        cell.appendChild(createBtn("Remove"))
        row.append(cell)
        table.appendChild(row)
        count++
    }

}

display() // testing

form.addEventListener('submit', event => {
    event.preventDefault()
    const newBook = new Book(author.value, title.value, numberPages.value, readStatus.value)
    addBookToLibrary(newBook)
    display()
    bringsUp()
})


