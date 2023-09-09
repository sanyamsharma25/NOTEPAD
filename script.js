document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.querySelector(".btn-save");
  const deleteButton = document.querySelector(".btn-del");
  const inputBox = document.querySelector(".input-box");

  // Load saved text from local storage, if available
  const savedText = localStorage.getItem("savedText");
  if (savedText) {
    inputBox.innerText = savedText;
  }

  saveButton.addEventListener("click", function () {
    const textToSave = inputBox.innerText;
    localStorage.setItem("savedText", textToSave);
    alert("Text saved to local storage!");
  });

  deleteButton.addEventListener("click", function () {
    inputBox.innerText = "";
    localStorage.removeItem("savedText");
    alert("Text cleared and removed from local storage!");
  });
});
