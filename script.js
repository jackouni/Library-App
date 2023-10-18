const addBookForm = document.querySelector("form");
const addBookBtn = document.getElementById("add-book");
const bookShelf = document.getElementById("book-shelf");

let library = [];

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

let exampleBook = new Book("Example Title", "Mr.Author-Person", 300, true);
library.push(exampleBook);
addNewBookToShelf();

addBookBtn.addEventListener("click", function () {
	addBookForm.style.display = "flex";
});

addBookForm.addEventListener("submit", function (event) {
	event.preventDefault();
	console.log("'Submit' event");

	let isValid = true;

	let userTitle = document.getElementById("title");
	let userAuthor = document.getElementById("author");
	let userPages = document.getElementById("pages");
	let userRead = document.querySelector('input[name="read-or-not"]:checked');

	let authorValue = userAuthor.value;
	let pagesValue = userPages.value;

	let titleError = document.getElementById("titleError");
	let authorError = document.getElementById("authorError");
	let pagesError = document.getElementById("pagesError");

	if (userTitle.validity.tooShort || userTitle.validity.valueMissing) {
		console.log("User Title is too short");
		isValid = false;
		userTitle.setCustomValidity("Title too short. Must be at least 2 characters.");

		titleError.textContent = "Title has to be at least 2 characters long.";
		titleError.style.opacity = "1";
	} else {
		userTitle.setCustomValidity("");
		titleError.style.opacity = "0";
	}

	if (userTitle.validity.tooLong) {
		console.log("User Title is too short");
		isValid = false;
	}

	if (userAuthor.value.length === 0) {
		console.log("Author is missing value");
		authorValue = "?";
	}

	if (userPages.validity.valueMissing || userPages.value < 1) {
		console.log("Pages is missing value");
		pagesValue = "?";
	}

	if (isValid) {
		let newBook = new Book(userTitle.value, authorValue, pagesValue, userRead.value);
		library.push(newBook);
		addNewBookToShelf();

		addBookForm.style.display = "none";
	}
});

function addNewBookToShelf() {
	let bookIndex = library.length - 1;
	let newBook = library[bookIndex];
	let bookCard = document.createElement("div");
	bookCard.bookIndex = bookIndex;
	bookCard.className = "book-card";
	bookShelf.appendChild(bookCard);

	bookTitle = document.createElement("h1");
	bookTitle.className = "book-titles";
	bookTitle.innerText = newBook.title;
	bookCard.appendChild(bookTitle);

	bookAuthor = document.createElement("p");
	bookAuthor.className = "book-authors";
	bookAuthor.innerText = `Author: ${newBook.author}`;
	bookCard.appendChild(bookAuthor);

	bookPages = document.createElement("p");
	bookPages.className = "book-pages";
	bookPages.innerText = `Pages: ${newBook.pages}`;
	bookCard.appendChild(bookPages);

	bookReadContainer = document.createElement("span");
	bookReadContainer.className = "book-read-container";
	bookReadContainer.innerText = "Read: ";
	bookCard.appendChild(bookReadContainer);

	bookReadBtn = document.createElement("button");
	bookReadBtn.classList.add("book-read-btn");
	bookReadBtn.innerText = newBook.read;
	bookReadContainer.appendChild(bookReadBtn);

	if (bookReadBtn.innerText === "true") {
		bookReadBtn.classList.add("read-true");
	}

	bookReadBtn.addEventListener("click", function (e) {
		e.target.classList.toggle("read-true");
		if (e.target.innerText === "true") {
			e.target.innerText = "false";
		} else {
			e.target.innerText = "true";
		}
	});

	removeBookBtn = document.createElement("button");
	removeBookBtn.className = "remove-book-btn";
	removeBookBtn.innerText = "Remove";
	removeBookBtn.bookIndex = bookIndex;
	bookCard.appendChild(removeBookBtn);

	removeBookBtn.addEventListener("click", function (e) {
		const isConfirmed = confirm(
			"Are you sure you want to delete this book from your list?"
		);
		console.log(`remove button clicked for index: [${e.target.bookIndex}]`);
		if (!isConfirmed) {
			e.preventDefault(); // Stop the action if user clicked "Cancel"
		} else {
			let allBookCards = document.getElementsByClassName("book-card");
			let allRemoveBookBtns = document.getElementsByClassName("remove-book-btn");
			for (let i = e.target.bookIndex + 1; i < library.length; i++) {
				allBookCards[i].bookIndex -= 1;
				allRemoveBookBtns[i].bookIndex -= 1;
			}
			allBookCards[e.target.bookIndex].remove();
			library.splice(e.target.bookIndex, 1);
		}
	});
}
