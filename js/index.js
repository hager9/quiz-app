import Quiz from "./quiz.js";
import Questions from "./question.js";

// //? =========> HTML VARIABLES
export const categoryMenuInput = document.getElementById("categoryMenu");
export const difficultyOptionsInput = document.getElementById("difficultyOptions");
export const questionsNumberInput = document.getElementById("questionsNumber");
export const startQuizBtn = document.getElementById("startQuiz");
export const questionsContainer = document.querySelector(".questions-container");
export const quizOptionForm = document.getElementById("quizOptions");


// //! ============> APP VARIABLES
export let quiz;
export let questions;


startQuizBtn.addEventListener("click", async function () {
    const category = categoryMenuInput.value;
    const difficulty = difficultyOptionsInput.value;
    const number = questionsNumberInput.value;
    quiz = new Quiz(category, difficulty, number);
    questions = await quiz.getQuestions();
    const question = new Questions(0);
    console.log(question)
    question.displayQuestion();
    quizOptionForm.classList.replace("d-flex", "d-none");
    questionsContainer.classList.replace("d-none", "d-flex");
})

