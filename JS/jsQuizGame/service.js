import { quizzes } from "../../DATA/dataQuizGame/quizzes.js";

// Save quizzes to localStorage
const saveQuizzesToLocalStorage = () => {
  localStorage.setItem("quizzes", JSON.stringify(quizzes));
};

// Initialize quiz storage
const initializeQuizzesLocalStorage = () => {
  if (!localStorage.getItem("quizzes")) {
    saveQuizzesToLocalStorage();
  }
};

// Load quizzes from localStorage
const getQuizzesFromLocalStorage = () => {
  const data = localStorage.getItem("quizzes");
  return data ? JSON.parse(data) : [];
};

export {
  initializeQuizzesLocalStorage,
  getQuizzesFromLocalStorage
};

