const addBtn = document.getElementById('add-book')
const bookShelf = document.getElementById('book-shelf')
const stats = document.getElementById('stats')

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

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {

}

let library = [book1, book2, book3] ; 
