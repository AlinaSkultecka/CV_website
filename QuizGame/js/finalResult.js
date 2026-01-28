// Retrieving and displaying quiz result
const resultData = JSON.parse(localStorage.getItem("quizResult"));

// Display result or error message
if (!resultData) {
  alert("No quiz result found");
} else {
  document.getElementById("quiz-title").textContent = resultData.title;
  document.getElementById("correct-count").textContent = resultData.correct;
  document.getElementById("total-count").textContent = resultData.total;
}