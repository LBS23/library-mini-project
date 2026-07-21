const library = [];
const addButton = document.querySelector("#toggle-form");
const submitButton = document.querySelector("#submit-book");
const queryModal = document.querySelector("#form-modal");
const form = document.querySelector("#form-book");
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

function createCard(bookTitle, bookAuthor, bookPages, readCheck, id) {
    const card = document.createElement("div");
    const cardTitle = document.createElement("h3");
    const cardAuthor = document.createElement("p");
    const cardPages = document.createElement("p");
    const cardRead = document.createElement("p");
    const cardInput = document.createElement("input");
    const removeButton = document.createElement("button");
    card.setAttribute("data-id", id);
    card.classList.add("card");
    cardInput.type = "checkbox";
    cardRead.append(cardInput, "Read");
    cardTitle.textContent = `${bookTitle}`;
    cardAuthor.textContent = `${bookAuthor}`;
    cardPages.textContent = `${bookPages}`;
    cardInput.checked = readCheck;
    removeButton.textContent = "Remove Book";
    removeButton.classList.add("deleteBtn");
    removeButton.addEventListener("click", removeBook);
    card.append(cardTitle, cardAuthor, cardPages, cardRead, removeButton);
    return card;
}

function addCardToContainer(card) {
    const cardContainer = document.querySelector("#card-container");
    cardContainer.appendChild(card);
    return cardContainer;
}
function removeBook(event) {
    const card = event.target.parentElement;
    const idToRemove = card.dataset.id;
    const index = library.findIndex(book => book.id === idToRemove);
    library.splice(index, 1);
    card.remove();

}
addButton.addEventListener("click", () => {
    queryModal.style.display = "flex";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    queryModal.style.display = "none";
    const newBook = createBook(form.bookName.value, form.bookAuthor.value, form.bookPages.value, form.bookRead.checked);
    addBookToLibrary(newBook);
    const newCard = createCard(newBook.title, newBook.author, newBook.pages, newBook.isRead, newBook.id);
    addCardToContainer(newCard);
    form.reset();
})