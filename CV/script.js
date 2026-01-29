// ================================
// Smooth scroll for internal links
// ================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ================================
// Quiz button (external page)
// ================================
const quizLinks = document.querySelectorAll('a[href*="quiz"]');

quizLinks.forEach(link => {
  link.addEventListener("click", () => {
    console.log("Opening quiz page...");
  });
});


// Modal elements
const modal = document.getElementById("modal");
const modalContent = modal.querySelector(".modal-content");

// Content for each card
const modalData = {
  education: `
    <h3>Education</h3>
    <p><strong>.NET Cloud Development</strong><br>IT-Högskolan</p>
    <p>Focused on C#, ASP.NET, Azure, cloud architecture and databases.</p>

    <p><strong>MSc Global Health</strong><br>University of Gothenburg</p>
    <p>Data analysis, epidemiology, statistics and research methods.</p>
  `,
  experience: `
    <h3>Experience</h3>
    <p><strong>Epidemiologist</strong><br>Centre for Disease Prevention and Control of Latvia</p>
    <ul>
      <li>Contact tracing & outbreak investigation</li>
      <li>Emergency response coordination</li>
      <li>High-pressure decision making</li>
    </ul>
  `,
  tools: `
    <h3>Tools & Technologies</h3>
    <ul>
      <li>Git & GitHub</li>
      <li>MongoDB & SQL</li>
      <li>Power BI, SPSS, Stata</li>
      <li>HTML, CSS, JavaScript, C#</li>
    </ul>
  `
};

// Open modal when clicking a card
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.modal;
    modalContent.innerHTML = modalData[key] || "<p>No content found.</p>";
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // prevent background scroll
  });
});

// Close when clicking outside the modal box
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") closeModal();
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

