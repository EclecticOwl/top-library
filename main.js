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


// Grabbing Library table and creating elements
let libTable = document.querySelector('#library-table')

let display = () => {
    myLibrary.forEach( (book) => {
        let libTr = document.createElement('tr')
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














