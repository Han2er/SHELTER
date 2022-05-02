const cards = document.querySelectorAll(".card");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal-wraper");
const modalCcontent = document.getElementById("modal-content");
const petsAvatar = document.getElementById("pet-avatar");
const petStats = document.getElementById("pet-stats");

const pets = {
  petName: ["Katrine", "Jennifer", "Woody"],
  petBreed: [
    "Cat - British Shorthair",
    "Dog - Labrador",
    "Dog - Golden Retriever",
  ],
  petAvatar: [
    "../../assets/images/pets-katrine.png",
    "../../assets/images/pets-jennifer.png",
    "../../assets/images/pets-woody.png",
  ],
  petsDescription: [
    "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
  ],
  age: ["7 month", "2 month", "5 month"],
  inoculations: ["all", "none", "first"],
  diseases: ["none", "none", "none"],
  parasites: ["yes", "none", "some"],
};

const popUpModal = (el) => {
  modal.style.visibility = "visible";
  console.log(el);
};

const closeModal = () => {
  modal.style.visibility = "hidden";
};

cards.forEach((el, i) =>
  el.addEventListener("click", () => {
    petsAvatar.setAttribute("src", pets.petAvatar[i]);
    modalCcontent.innerHTML = `
    <h3>${pets.petName[i]}</h3>
    <h4>${pets.petBreed[i]}</h4>
    <h5>${pets.petsDescription[i]}</h5>
    <ul id="pet-stats">
        <li><span class="h5-modal-window">Age:</span><span class="h5"> ${pets.age[i]}</span></li>
        <li><span class="h5-modal-window">Inoculations:</span><span class="h5"> ${pets.inoculations[i]}</span></li>
        <li><span class="h5-modal-window">Diseases:</span><span class="h5"> ${pets.diseases[i]}</span></li>
        <li><span class="h5-modal-window">Parasites:</span><span class="h5"> ${pets.parasites[i]}</span></li>
    </ul>
    `;

    modal.style.visibility = "visible";
  })
);

closeModalBtn.addEventListener("click", closeModal);
