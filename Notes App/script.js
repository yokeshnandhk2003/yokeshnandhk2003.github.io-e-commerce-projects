const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  const inputBox = document.createElement("p");
  const img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  updateStorage();
});

//  Handle delete and typing with event delegation
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

// Listen to keyup events to update storage when editing loaded notes
notesContainer.addEventListener("keyup", (e) => {
  if (e.target.classList.contains("input-box")) {
    updateStorage();
  }
});

//  Prevent new paragraph, insert line break instead
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

