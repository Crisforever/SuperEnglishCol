const menuBtn = document.getElementById("menu-btn"),
  navLinks = document.getElementById("nav-links"),
  menuBtnIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  let n = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", n ? "ri-close-line" : "ri-menu-line");
}),
  navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open"),
      menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1e3,
};
ScrollReveal().reveal(".container__left h1", { ...scrollRevealOption }),
  ScrollReveal().reveal(".container__left .container__btn", {
    ...scrollRevealOption,
    delay: 500,
  }),
  ScrollReveal().reveal(".container__right h4", {
    ...scrollRevealOption,
    delay: 2e3,
  }),
  ScrollReveal().reveal(".container__right h2", {
    ...scrollRevealOption,
    delay: 2500,
  }),
  ScrollReveal().reveal(".container__right h3", {
    ...scrollRevealOption,
    delay: 3e3,
  }),
  ScrollReveal().reveal(".container__right p", {
    ...scrollRevealOption,
    delay: 3500,
  }),
  ScrollReveal().reveal(".container__right .tent-1", {
    duration: 1e3,
    delay: 4e3,
  }),
  ScrollReveal().reveal(".container__right .tent-2", {
    duration: 1e3,
    delay: 4500,
  }),
  ScrollReveal().reveal(".location", {
    ...scrollRevealOption,
    origin: "left",
    delay: 5e3,
  }),
  ScrollReveal().reveal(".socials span", {
    ...scrollRevealOption,
    origin: "top",
    delay: 5500,
    interval: 500,
  });
const questions = [
  { question: "\xbfC\xf3mo se dice 'manzana' en ingl\xe9s?", answer: "apple" },
  { question: "\xbfC\xf3mo se dice 'agua' en ingl\xe9s?", answer: "water" },
  { question: "\xbfC\xf3mo se dice 'sol' en ingl\xe9s?", answer: "sun" },
  {
    question: "Traduce al ingl\xe9s: 'La casa es grande'",
    answer: "The house is big",
  },
  {
    question: "Traduce al espa\xf1ol: 'I love to read books'",
    answer: "Me encanta leer libros",
  },
  { question: "\xbfC\xf3mo se dice 'perro' en ingl\xe9s?", answer: "dog" },
  {
    question: "Traduce al ingl\xe9s: 'La mesa est\xe1 limpia'",
    answer: "The table is clean",
  },
  { question: "\xbfC\xf3mo se dice 'gato' en ingl\xe9s?", answer: "cat" },
  {
    question: "Traduce al espa\xf1ol: 'He is my friend'",
    answer: "El es mi amigo"
  },
  { question: "\xbfC\xf3mo se dice 'ni\xf1o' en ingl\xe9s?", answer: "boy" },
];
let currentQuestionIndex = 0,
  score = 0;
const questionElement = document.getElementById("question"),
  answerInput = document.getElementById("answer"),
  feedbackElement = document.getElementById("feedback"),
  checkAnswerButton = document.getElementById("checkAnswer"),
  nextQuestionButton = document.getElementById("nextQuestion"),
  scoreElement = document.getElementById("score"),
  finalScoreContainer = document.getElementById("final-score"),
  quizContainer = document.getElementById("quiz-container");
function loadQuestion() {
  let e = questions[currentQuestionIndex];
  (questionElement.textContent = e.question),
    (answerInput.value = ""),
    (feedbackElement.textContent = ""),
    answerInput.focus();
}
function checkAnswer() {
  let e = questions[currentQuestionIndex],
    n = answerInput.value.trim().toLowerCase();
  n === e.answer.toLowerCase()
    ? ((feedbackElement.textContent = "\xa1Correcto!"),
      feedbackElement.classList.add("correct"),
      feedbackElement.classList.remove("incorrect"),
      document.getElementById("correctSound").play(),
      score++)
    : ((feedbackElement.textContent = `Incorrecto. La respuesta correcta es: ${e.answer}`),
      feedbackElement.classList.add("incorrect"),
      feedbackElement.classList.remove("correct"),
      document.getElementById("incorrectSound").play()),
    (checkAnswerButton.disabled = !0),
    (nextQuestionButton.disabled = !1);
}
function nextQuestion() {
  ++currentQuestionIndex < questions.length
    ? (loadQuestion(),
      (checkAnswerButton.disabled = !1),
      (nextQuestionButton.disabled = !0))
    : showFinalScore();
}
function showFinalScore() {
  (quizContainer.style.display = "none"),
    (finalScoreContainer.style.display = "block"),
    (scoreElement.textContent = score);
}
function restartQuiz() {
  (currentQuestionIndex = 0),
    (score = 0),
    (finalScoreContainer.style.display = "none"),
    (quizContainer.style.display = "block"),
    loadQuestion(),
    (checkAnswerButton.disabled = !1),
    (nextQuestionButton.disabled = !0);
}
document.getElementById("startQuiz").addEventListener("click", () => {
  (document.getElementById("intro-container").style.display = "none"),
    (quizContainer.style.display = "block"),
    loadQuestion();
}),
  checkAnswerButton.addEventListener("click", checkAnswer),
  nextQuestionButton.addEventListener("click", nextQuestion),
  document.getElementById("restartQuiz").addEventListener("click", restartQuiz);
