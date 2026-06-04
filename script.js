const library = [];
const formBtn = document.querySelector("#toggle-form");
const modal = document.querySelector("#form-modal");
const submitForm = document.querySelector("#submit-book");
const bookGrid = document.querySelector("#card-container");
function BookClass(title, author, pages, read) {
    this.bookId = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = read;
}
function addBook(bookTitle, bookAuthor, bookPages, bookIsRead) {
    const book = new BookClass(bookTitle, bookAuthor, bookPages, bookIsRead);
    library.push(book);
}
function createCard(cardTitle, cardAuthor, cardPages, cardRead, cardId) {
    const card = document.createElement("div");
    card.style.border = "1px solid black";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";
    card.style.gap = "3px"
    card.setAttribute("data-id", cardId);
    const title = document.createElement("h3");
    title.textContent = cardTitle;
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = cardAuthor;
    const paragraph2 = document.createElement("p");
    paragraph2.append("Pages: ", cardPages);
    const paragraph3 = document.createElement("p");
    const checkboxRead = document.createElement("input");
    const deleteBtn = document.createElement("button");
    deleteBtn.style.color = "white";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.borderRadius = "5px";
    deleteBtn.style.border = "1px solid red";
    deleteBtn.style.fontWeight = "600";
    deleteBtn.style.fontFamily = "inherit";
    deleteBtn.style.padding = "10px";
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("onHover-delete");
    checkboxRead.type = "checkbox";
    paragraph3.append(checkboxRead, " Read?");
    card.append(title, paragraph1, paragraph2, paragraph3, deleteBtn);
    bookGrid.appendChild(card);
    deleteBtn.addEventListener("click", () => {
        card.remove();
    })
}

formBtn.addEventListener("click", ()=>{
    modal.style.display = "flex";
})
submitForm.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none";
    const form = document.querySelector("#form-book"); 
    addBook(form.bookName.value, form.bookAuthor.value, form.bookPages.value, form.bookRead.checked);

    createCard(library[library.length-1].title, library[library.length-1].author, library[library.length-1].pages, library[library.length-1].isRead, library[library.length-1].bookId);
})

