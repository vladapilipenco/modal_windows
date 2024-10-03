let firstButton = document.getElementById("first");
let secondButton = document.getElementById("second");
let thirdButton = document.getElementById("third");

let blurredContent = document.getElementById("blurredDiv");

let modal = document.getElementById("modal");
let modalHeader = document.getElementById("modalHeader");
let modalText = document.getElementById("modalText");
let modalButton = document.getElementById("modalButton");

firstButton.addEventListener("click", function () {
  setContent(
    "The firts modal",
    "Why did the web developer go to therapy? They had too many unresolved issues in their code, and every time they thought they had fixed them, new bugs kept popping up like they were on a never-ending Git branch!"
  );
  showModal();
});

secondButton.addEventListener("click", function () {
  setContent(
    "The second modal",
    "How do web developers deal with imposter syndrome? They spend hours meticulously refactoring their code, only to realize that their 'real' identity was always in their functions — clean, organized, and totally reusable!"
  );
  showModal();
});

thirdButton.addEventListener("click", function () {
  setContent(
    "The third modal",
    "Why did the web developer refuse to play cards? Because every time they tried to deal, they couldn’t help but notice all the 'deck' components had styling inconsistencies, and they couldn’t get past their need for semantic markup!"
  );
  showModal();
});

modalButton.addEventListener("click", function () {
  closeModal();
});

function showModal() {
  blurredContent.classList.remove("hidden");
  modal.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  blurredContent.classList.add("hidden");
}

function setContent(header, text) {
  modalHeader.innerHTML = header;
  modalText.innerHTML = text;
}
