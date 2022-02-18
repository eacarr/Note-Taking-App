const inputNote = document.querySelector(".input-note");
const noteBtn = document.querySelector(".note-btn");
const p2 = document.querySelector(".p-2");
var modal = document.querySelector(".modal");
const notes = document.querySelector(".notes");

// Array to store notes
notesArr = [];

noteBtn.addEventListener("click", () => {
  // get value from input bar
  getNote();
  addNote();
  console.log(notesArr);
});

const getNote = () => {
  const inputValue = inputNote.value;
  notesArr.push(inputValue);
  inputNote.value = "";
};
// note.addEventListener("click", () => {
//   noteFunc();
// });

const addNote = () => {
  notes.innerText = "";
  for (let note of notesArr) {
    const div = document.createElement("div");
    div.classList.add("note");
    div.innerHTML = `<p>${note}</p>`;
    notes.append(div);
    div.addEventListener("click", () => {
      openModal(note);
    });
  }
};

var modalDialog = document.querySelector(".modal-dialog");
const openModal = (note) => {
  modal.style.display = "block";
  //   const close = document.querySelector(".close");
  modalDialog.innerHTML = `<div class="modal-body"><p>${note}</p>
    </div>`;
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
};
