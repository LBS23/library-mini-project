const library = [];
const addButton = document.querySelector("#toggle-form");
const submitButton = document.querySelector("submit-book");
const queryModal = document.querySelector("#form-modal");
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.id = crypto.randomUUID();
        this.isRead = read;
    }
}

function createBook(titleGiven, authorGiven, pagesGiven, read) {
    const book = new Book(titleGiven, authorGiven, pagesGiven, read);
    return book;
}

function addBookToLibrary(newBook) {
    library.push(newBook);
}

function createCard(bookTitle, bookAuthor, bookPages, readCheck) {
    const card = document.createElement("div");
    const cardTitle = document.createElement("h3");
    const cardAuthor = document.createElement("p");
    const cardPages = document.createElement("p");
    const cardRead = document.createElement("p");
    const cardInput = document.createElement("input");
    cardInput.setAttribute("type", "checkbox");
    cardRead.appendChild(cardInput);
    cardTitle.textContent = `${bookTitle}`;
    cardAuthor.textContent = `${bookAuthor}`;
    cardPages.textContent = `${bookPages}`;
    cardRead.textContent = "Read/Not Read";
    cardInput.checked = readCheck;
    card.append(cardTitle, cardAuthor, cardPages, cardRead);
    return card;
}

function addCardToContainer(card) {
    const cardContainer = document.querySelector("#card-container");
    cardContainer.appendChild(card);
    return cardContainer;
}

addButton.addEventListener("click", () => {
    queryModal.style.display = "flex";
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.querySelector("#form-book");
    const newBook = createBook(form.bookName.value, form.bookAuthor.value, form.bookPages.value, form.bookRead.checked);
    addBookToLibrary(newBook);
    const newCard = createCard(newBook.title, newBook.author, newBook.pages, newBook.isRead);
    addCardToContainer(newCard);
})