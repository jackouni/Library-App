
const addBtn = document.getElementById('add-book')
const bookShelf = document.getElementById('book-shelf')

let book1 = {
    title: "New Book",
    author: "Myself", 
    pages: 189,
    read: false
}


let book2 = {
    title: "Second",
    author: "Gary", 
    pages: 400,
    read: true
}

let book3 = {
    title: "New Book the Third",
    author: "Patrick Star", 
    pages: 98,
    read: false
}

let book4 = {
    title: "Wizard of Oz",
    author: "idk who", 
    pages: 201,
    read: true
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {

}

let library = [book1, book2, book3, book4] ; 


function addBooksToShelf() {
    library.forEach(function(book) {
        let bookCard = document.createElement('div')
        bookCard.className = 'book-card'
        bookShelf.appendChild(bookCard)

        bookTitle = document.createElement('h1')
        bookTitle.className = 'book-titles'
        bookTitle.innerText = book.title
        bookCard.appendChild(bookTitle)

        bookAuthor = document.createElement('p')
        bookAuthor.className = 'book-authors'
        bookAuthor.innerText = `Author: ${book.author}`
        bookCard.appendChild(bookAuthor)

        bookPages = document.createElement('p')
        bookPages.className = 'book-pages'
        bookPages.innerText = `Pages: ${book.Pages}`
        bookCard.appendChild(bookPages)

        bookReadContainer = document.createElement('span')
        bookReadContainer.className = 'book-read-container'
        bookReadContainer.innerText = "Read: "
        bookCard.appendChild(bookReadContainer)

        bookReadBtn = document.createElement('button')
        bookReadBtn.className = 'book-read-btn'
        bookReadBtn.innerText = book.read
        bookReadContainer.appendChild(bookReadBtn)
    })
}
