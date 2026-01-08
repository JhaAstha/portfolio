/* Typing Animation */
const texts = [
  "Computer Science Student",
  "Frontend Developer",
  "Problem Solver",
  "Aspiring Software Engineer"
];

let textIndex = 0;
let charIndex = 0;
const typing = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typing.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 90);
  } else {
    setTimeout(eraseEffect, 1800);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typing.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 60);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

/* Scroll Reveal + Active Navbar */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

    if (section.getBoundingClientRect().top < window.innerHeight - 120) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});