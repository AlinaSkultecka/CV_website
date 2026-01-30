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
    </br>
    <p><strong>.NET Cloud Development (2025 aug - 2027 may)</strong><br>IT-Högskolan</p>
    <p>Focused on C#, Databases, Web development, Agile methodology, Cloud architecture, Cloud solutions administration.</p>

    <p><strong>MSc Global Health (2021 aug - 2023 jun)</strong><br>University of Gothenburg</p>
    <p>Data analysis, epidemiology, statistics and research methods.</p>
    
    </br>

    <h3>Courses</h3>
    </br>
    <p><strong>Introduction to Machine Learning</strong><br>Mälardalen University</p>
    <p>Studied fundamentals of machine learning as well as basic concepts of data manipulation and processing, mathematics, statistics and probability insofar they are related to machine learning.</p>

    <p><strong>R programming</strong><br>University of Gothenburg</p>
    <p>Mastering the programming language R. The scope of the course ranges from importing data, processing and tidying data, transforming and manipulating data, performing statistical analyses, and summarizing and visualizing the results.</p>

    <p><strong>Introduction to Relational Databases</strong><br>Dalarna University</p>
    <p>In this course, I learned the basic principles of SQL.</p>
  `,
  experience: `
    <h3>Experience</h3>
    </br>
    <p><strong>Epidemiologist (2020 apr - 2021 jul)</strong><br>Centre for Disease Prevention and Control of Latvia</p>
    <ul>
        <li>Organised preventive and anti-epidemic measures to stop infectious disease transmission.</li>
        <li>Contributed to achieving and keeping the Covid-19 transmission rate in Latvia the lowest in the
        European Union (approx. 10 times lower than in average in EU) for several months in a row in
        the early stage of pandemic.</li>
        <li>Interviewed patients, did contact persons tracing and were giving recommendations to state
        institutions.</li>
        <li>Participated in emergency preparedness and response in cases of biological hazard.</li>
    </ul>
    <p>Working under high pressure for more than one year, I developed stress resistance and problemsolving skills. </p>
  `,
  tools: `
    <h3>Skills & Tools</h3>
    </br>
    <ul>
      <li><strong>Technical Proficiencies:</strong> Stata, SPSS, GitHub, MongoDB, Power BI, Azure, AWS</li>
      <li><strong>Hard Skills:</strong> C# (.NET, WPF, EF Core), SQL, Python (PySide6, Pandas, LangGraph, PyTorch), R,
      CSS/HTML/JS (React)</li>
      <li><strong>Soft Skills:</strong> Leadership, Communication, Creative & Analytical Skills, Flexibility, Problem Solving</li>
      <li><strong>Languages:</strong> English (Advanced), Swedish (Plus Intermediate), Latvian (Native), Russian (Native)</li>
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

// Footer year update
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".mobile-menu-list");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
     btn.classList.toggle("open"); 
  });
});

