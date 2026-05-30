const toggleButton =
document.getElementById(
  "themeToggle"
);

const body = document.body;

/* =========================
   THEME TOGGLE
========================= */

toggleButton.addEventListener(
  "click",
  () => {

    body.classList.toggle(
      "light-mode"
    );

    if(
      body.classList.contains(
        "light-mode"
      )
    ){

      toggleButton.innerHTML =
      '<i class="fas fa-sun"></i>';

    }

    else{

      toggleButton.innerHTML =
      '<i class="fas fa-moon"></i>';

    }

  }
);

/* =========================
   TYPING EFFECT
========================= */

const typingText =
document.getElementById(
  "typing-text"
);

const words = [

  "Full-Stack Developer",

  "VLSI Aspirant",

  "IoT Enthusiast",

  "Java Programmer",

  "Problem Solver"

];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect(){

  const currentWord =
  words[wordIndex];

  if(!isDeleting){

    typingText.textContent =
    currentWord.substring(
      0,
      charIndex + 1
    );

    charIndex++;

    if(
      charIndex ===
      currentWord.length
    ){

      isDeleting = true;

      setTimeout(
        typeEffect,
        1200
      );

      return;

    }

  }

  else{

    typingText.textContent =
    currentWord.substring(
      0,
      charIndex - 1
    );

    charIndex--;

    if(charIndex === 0){

      isDeleting = false;

      wordIndex++;

      if(
        wordIndex ===
        words.length
      ){

        wordIndex = 0;

      }

    }

  }

  setTimeout(
    typeEffect,
    isDeleting ? 50 : 100
  );

}

typeEffect();

/* =========================
   SCROLL REVEAL
========================= */

const reveals =
document.querySelectorAll(
  ".reveal"
);

function revealSections(){

  reveals.forEach(section => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    section.getBoundingClientRect().top;

    const revealPoint = 100;

    if(
      revealTop <
      windowHeight - revealPoint
    ){

      section.classList.add(
        "active"
      );

    }

  });

}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();

/* =========================
   ACTIVE NAVBAR
========================= */

const sections =
document.querySelectorAll(
  "section"
);

const navLinks =
document.querySelectorAll(
  "nav a"
);

window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop =
      section.offsetTop;

      if(
        pageYOffset >=
        sectionTop - 200
      ){

        current =
        section.getAttribute("id");

      }

    });

    navLinks.forEach(link => {

      link.classList.remove(
        "active-link"
      );

      if(
        link.getAttribute("href")
        ===
        `#${current}`
      ){

        link.classList.add(
          "active-link"
        );

      }

    });

  }
);