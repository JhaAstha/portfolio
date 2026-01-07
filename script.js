// Projects data
const projects = [
  { 
    title: "Portfolio Website", 
     
    desc: "A responsive personal portfolio built using HTML, CSS, and JS. Includes interactive sections and Netflix-style UI.",
    link: "https://github.com/astha/portfolio"
  },
  { 
    title: "tic tac toe", 
     
    desc: "A tic toe interactive game with beautiful color pop ups using language C",
    
  },
  { 
    title: "Calculator", 
    desc: "A calculator with scientific functions and expressive colors.",
    link: "https://jhaastha.github.io/calculator/"
  },
  { 
    title: "netflix clone", 
     
    desc: "A netfix clone with use of APIs and basic html,css and js.",
    
  }
];

const projectsContainer = document.getElementById("projectsContainer");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");
const closeModal = document.getElementById("closeModal");

// Display projects
projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    
    <div class="project-info">
      <h4>${project.title}</h4>
      <p>${project.desc.slice(0, 50)}...</p>
    </div>
  `;

  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.innerText = project.title;
    modalDesc.innerText = project.desc;
    modalLink.href = project.link;
  });

  projectsContainer.appendChild(card);
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target == modal) modal.style.display = "none";
});