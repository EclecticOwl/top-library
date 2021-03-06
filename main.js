myLibrary = []


// Book Class
class Book {
    constructor(title, author, pages, read = false) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
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

let ui = () => {
    // Displays the books currently in the array
    myLibrary.forEach( (book) => {
        let libTr = document.createElement('tr')
        libTr.classList.add('book')
        let title = document.createElement('td')
        let author = document.createElement('td')
        let pages = document.createElement('td')
        let read = document.createElement('td')
        let deleteTd = document.createElement('td')


        let readCheck = document.createElement('input')
        readCheck.classList.add('readCheck')
        readCheck.type = 'checkbox'
        
        if (book.read == true) {
            readCheck.checked = true
        }else {
            readCheck.checked = false
        }

        
        let deleteCheck = document.createElement('input')
        deleteCheck.classList.add('deleteCheck')
        deleteCheck.type = 'checkbox'
        deleteCheck.checked = false
        read.append(readCheck)
        deleteTd.append(deleteCheck)



        title.textContent += book.title
        author.textContent += book.author
        pages.textContent += book.pages

        libTable.append(libTr)
        libTr.append(title)
        libTr.append(author)
        libTr.append(pages)
        libTr.append(read)
        libTr.append(deleteTd)
    })

    // Checking UI for check marks in read and delete columns

    let bookCheck = document.querySelectorAll('.book').forEach( (element, index) => {
        element.addEventListener('change', (e) => {
            if (e.target.className == 'deleteCheck') {
                if (confirm('Are you sure you want to delete this book?')) {
                    myLibrary.splice(index, 1);
                    clearui()
                    ui()
                }else {
                    e.target.checked = false
                }
            }else if (e.target.className == 'readCheck') {
                if (myLibrary[index]['read'] == false) {
                     element.classList.add('markAsRead')
                    myLibrary[index]['read'] = true
                    e.target.checked = true
                    clearui()
                    ui()
                }else {
                    element.classList.remove('markAsRead')
                    myLibrary[index]['read'] = false
                    e.target.checked = false
                    clearui()
                    ui()
                }
            }
        })
    })
}

//Adds a book to the array
const addBookForm = document.querySelector('#addBookForm')
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = addBookForm.elements[0].value
    let author = addBookForm.elements[1].value
    let pages = addBookForm.elements[2].value

    let newBook = new Book(title, author, pages)
    myLibrary.push(newBook)

    addBookForm.reset()

    clearui()
    ui()
})

//Clears the table to prevent duplicates
const clearui = () => {
    const books = document.querySelectorAll('.book')
    books.forEach( (book) => {
        libTable.removeChild(book);
    })
}



let toggleTheme = (a) => {
    let sheets = document.getElementsByTagName('link');

    sheets[0].href = a;
    
}



ui()