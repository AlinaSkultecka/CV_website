import {
  initializeQuizzesLocalStorage,
  getQuizzesFromLocalStorage
} from "./service.js";

// Initialize quiz storage
initializeQuizzesLocalStorage();

// Get quizzes
const quizzes = getQuizzesFromLocalStorage();

// Get quiz list container
const quizListDiv = document.getElementById("quiz-list");

// Create quiz buttons
quizzes.forEach(quiz => {
  const button = document.createElement("button");
  button.textContent = quiz.title;

  button.addEventListener("click", () => {
    localStorage.setItem("selectedQuizId", quiz.id);
    window.location.href = "quiz.html";
  });

  quizListDiv.appendChild(button);
});
