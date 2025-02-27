//your JS code here. If required.
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block"; 
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none"; 
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; 
  }
});