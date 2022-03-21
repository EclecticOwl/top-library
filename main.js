myLibrary = []


// Book Class

class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }
}

book1 = new Book('The Hobbit', 'Tolkien', '300')
book2 = new Book('Random Book', 'Random Author', '203')
book3 = new Book('Another Book', 'Another Author', '250')

myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)


// Grabbing library table and displaying books
const libTable = document.querySelector('#library-table')

let display = () => {

    myLibrary.forEach( (book) => {
        let libTr = document.createElement('tr')
        libTr.classList.add('book')
        let title = document.createElement('td')
        let author = document.createElement('td')
        let pages = document.createElement('td')

        title.textContent += book.title
        author.textContent += book.author
        pages.textContent += book.pages

        libTable.append(libTr)
        libTr.append(title)
        libTr.append(author)
        libTr.append(pages)
    })
}

const addBookForm = document.querySelector('#addBookForm')
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = addBookForm.elements[0].value
    let author = addBookForm.elements[1].value
    let pages = addBookForm.elements[2].value

    let newBook = new Book(title, author, pages)
    myLibrary.push(newBook)

    addBookForm.reset()

    clearDisplay()
    display()
})

const clearDisplay = () => {
    const books = document.querySelectorAll('.book')
    books.forEach( (book) => {
        libTable.removeChild(book);
    })
}




