const cards = document.getElementsByClassName("card");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal-wraper");

const petsArr = ["Katrine", "Jennifer", "Woody"];

const popUpModal = () => {
  modal.style.visibility = "visible";
};

const closeModal = () => {
  modal.style.visibility = "hidden";
};

Array.from(cards).forEach(function (e) {
  e.addEventListener("click", popUpModal);
});

closeModalBtn.addEventListener("click", closeModal);
