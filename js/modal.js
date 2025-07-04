const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const modal = document.querySelector("#modal");

openModal.addEventListener("click", function () {
  if (modal.classList.contains("d-none")) {
    modal.classList.remove("d-none")
    openModal.classList.add("d-none")
  }
});

closeModal.addEventListener("click", function () {
  modal.classList.add("d-none")
  openModal.classList.remove("d-none")
});
