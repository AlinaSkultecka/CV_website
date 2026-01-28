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
