const inputNote = document.querySelector(".input-note");
const noteBtn = document.querySelector(".note-btn");

// Array to store notes

noteBtn.addEventListener("click", () => {
  // get value from input bar
  const inputValue = inputNote.value;
  console.log(inputValue);
});
