import {
  initializeQuizzesLocalStorage,
  getQuizzesFromLocalStorage
} from "./service.js";

// Initialize quiz storage
initializeQuizzesLocalStorage();

// Quiz state variables
let currentQuestionIndex = 0;
let correctAnswers = 0;
let currentQuiz = null;

const selectedQuizId = Number(localStorage.getItem("selectedQuizId"));
const container = document.getElementById("question-container");

const quizzes = getQuizzesFromLocalStorage();
const quiz = quizzes.find(q => q.id === selectedQuizId);

if (!quiz) {
  alert("Quiz not found");
} else {
  currentQuiz = quiz;
  document.getElementById("quiz-title").textContent = quiz.title;
  showQuestion();
}

// Showing a question
function showQuestion() {
  container.innerHTML = "";
  // Get current question
  const questionObj = currentQuiz.questions[currentQuestionIndex];
  
  // Create question title
  const questionTitle = document.createElement("h3");
  questionTitle.textContent = questionObj.question;
  container.appendChild(questionTitle);
  // Create answers grid
  const answersGrid = document.createElement("div");
  answersGrid.classList.add("answers-grid");
  // Create answer boxes
  questionObj.answers.forEach((answer, index) => {
    const answerBox = document.createElement("div");
    answerBox.classList.add("answer-box");
    answerBox.textContent = answer.text;

    answerBox.addEventListener("click", () => handleAnswer(answer, answerBox, answersGrid));

    answersGrid.appendChild(answerBox);
  });
  // Add answers grid to container
  container.appendChild(answersGrid);
}



// Handling answer click
function handleAnswer(answer, clickedBox, answersGrid) {
  // prevent multiple clicks
  if (answersGrid.classList.contains("answered")) return;
  answersGrid.classList.add("answered");

  const boxes = answersGrid.querySelectorAll(".answer-box");

  // disable all boxes
  boxes.forEach(box => box.classList.add("disabled"));

  // mark correct / wrong
  if (answer.correct) {
    clickedBox.classList.add("correct");
    correctAnswers++;
  } else {
    clickedBox.classList.add("wrong");

    // show correct answer
    currentQuiz.questions[currentQuestionIndex].answers.forEach((a, i) => {
      if (a.correct) {
        boxes[i].classList.add("correct");
      }
    });
  }

  // move to next question after delay
  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuiz.questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}



// Show final result
function showResult() {
  // Save result data to localStorage
  localStorage.setItem("quizResult", JSON.stringify({
    correct: correctAnswers,
    total: currentQuiz.questions.length,
    title: currentQuiz.title
  }));

  // Go to final result page
  window.location.href = "finalResult.html";
}

