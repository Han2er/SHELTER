const cards = document.querySelectorAll(".card");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal-wraper");
const modalCcontent = document.getElementById("modal-content");
const petsAvatar = document.getElementById("pet-avatar");
const petStats = document.getElementById("pet-stats");
const slider = document.getElementById("slider");

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

// fetch("../../assets/json/pets.json")
fetch("./pets.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((pet) => {
      const img = document.createElement("img");
      img.src = pet.img;
      img.alt = pet.name;

      const name = document.createElement("p");
      name.className = "pets-card-title color-dark-l";
      name.innerText = pet.name;

      const learnMore = document.createElement("a");
      learnMore.className = "button_secondary";
      // learnMore.href = "#";
      learnMore.innerText = "Learn more";

      const card = document.createElement("div");
      card.className = "card";
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(learnMore);

      slider.appendChild(card);

      //add event listener
      card.addEventListener("click", () => {
        petsAvatar.setAttribute("src", pet.img);
        modalCcontent.innerHTML = `
      <h3>${pet.name}</h3>
      <h4>${pet.breed}</h4>
      <h5>${pet.description}</h5>
      <ul id="pet-stats">
          <li><span class="h5-modal-window">Age:</span><span class="h5"> ${pet.age}</span></li>
          <li><span class="h5-modal-window">Inoculations:</span><span class="h5"> ${pet.inoculations}</span></li>
          <li><span class="h5-modal-window">Diseases:</span><span class="h5"> ${pet.diseases}</span></li>
          <li><span class="h5-modal-window">Parasites:</span><span class="h5"> ${pet.parasites}</span></li>
      </ul>
      `;

        modal.style.visibility = "visible";
      });
    });

    cards.forEach((el, i) => el.addEventListener("click", () => {}));
    closeModalBtn.addEventListener("click", closeModal);

    //       --- Slider ---

    // Select all slides
    const slides = document.querySelectorAll(".card");

    const slideMargin = 10;
    slides.forEach((el) => {
      el.style.margin = `${slideMargin}px`;
    });

    //get slide width
    const slideWidth = slides[0].offsetWidth + slideMargin * 2;

    // current slide counter
    let curSlide = 0;
    // number of slides shown
    let slidesToShow = 3;
    setSlidesToShowNumber();

    window.onresize = setSlidesToShowNumber;
    function setSlidesToShowNumber() {
      if (slider.offsetWidth / slideWidth >= 3) slidesToShow = 3;
      if (
        slider.offsetWidth / slideWidth < 3 &&
        slider.offsetWidth / slideWidth > 2
      )
        slidesToShow = 2;
      if (slider.offsetWidth / slideWidth < 2) slidesToShow = 1;
    }

    // select previous slide button
    const nextSlide = document.querySelector("#forward-arrow");
    // select next slide button
    const prevSlide = document.querySelector("#back-arrow");

    // maximum number of slides
    let maxSlide = Math.floor((slides.length - 1) / slidesToShow);

    //   move slide forward
    nextSlide.addEventListener("click", function () {
      if (curSlide >= maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      slides.forEach((slide) => {
        slide.style.transform = `translateX(${
          -slideWidth * curSlide * slidesToShow
        }px)`;
      });
    });

    //   move slide backward
    prevSlide.addEventListener("click", function () {
      if (curSlide <= 0) {
        curSlide = maxSlide;
      } else {
        curSlide--;
      }

      slides.forEach((slide) => {
        slide.style.transform = `translateX(${
          -slideWidth * curSlide * slidesToShow
        }px)`;
      });
    });
  });

//   ---   burger   ---

const burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  const burgerNav = document.createElement("nav");
  burgerNav.id = "burger-nav";
  burgerNav.innerHTML = `
  <a class="paragraph-l color-dark-s selected" href="#about">About the shelter</a>
        <a class="paragraph-l color-dark-s" href="../../pages/pets/index.html">Our pets</a>
        <a class="paragraph-l color-dark-s" href="#help">Help the shelter</a>
        <a class="paragraph-l color-dark-s" href="#contacts">Contacts</a>`;

  const burgerWindow = document.createElement("div");
  burgerWindow.appendChild(burgerNav);
  burgerWindow.className = "burger-window";

  document.body.appendChild(burgerWindow);
  burger.replaceWith(burger.cloneNode(true));

  burger.addEventListener("click", () => {
    document.body.removeChild(burgerWindow);
    burger.replaceWith(burger.cloneNode(true));
  });
});
