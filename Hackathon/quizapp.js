const questions = [
  {
    q: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Hot Mail", "How To Make Lasagna", "Home Tool Markup Language"],
    answer: 0
  },
  {
    q: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    q: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Style Sheet", "Colorful Style Sheet", "Creative Style Syntax"],
    answer: 0
  },
  {
    q: "Inside which HTML element do we put JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: 0
  },
  {
    q: "What is the correct syntax for referring to an external script?",
    options: ["<script src='script.js'>", "<script href='script.js'>", "<script name='script.js'>", "<script file='script.js'>"],
    answer: 0
  },
    {
    q: "What does HTML stand for?",
    options: ["HyperText Markup Language", "Hot Mail", "How To Make Lasagna", "Home Tool Markup Language"],
    answer: 0
  },
  {
    q: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    q: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Style Sheet", "Colorful Style Sheet", "Creative Style Syntax"],
    answer: 0
  },
  {
    q: "Inside which HTML element do we put JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: 0
  },
  {
    q: "What is the correct syntax for referring to an external script?",
    options: ["<script src='script.js'>", "<script href='script.js'>", "<script name='script.js'>", "<script file='script.js'>"],
    answer: 0
  },
  {
    q: "What is default type of input element?",
    options: ["text", "number", "alphanumeric", "strings"],
    answer: 0
  },
  {
    q: "What is number of header tags in html?",
    options: ["8", "6", "9", "7"],
    answer: 1
  },
  {
    q: "Which input button selects a single option?",
    options: ["checkbox", "dropdown", "radio", "button"],
    answer: 2
  },
  {
    q: "which symbol is used to change the properties of element in css provided id?",
    options: ["$", ".", "{}", "#"],
    answer: 3
  },
  {
    q: "Which input button selects a single option?",
    options: ["checkbox", "dropdown", "radio", "button"],
    answer: 2
  },
  {
    q: "Correct way to declare a variable in Javascript",
    options: ["let a=10", "a=10", "num a=10", "10" ],
    answer: 0
  },
];
let current = 0;
let score = 0;
let timer;
let timeLeft = 10;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerBar = document.getElementById("timer-bar");
const nextBtn = document.getElementById("next-btn");
const modal = document.getElementById("result-modal");
const finalScore = document.getElementById("final-score");
const leaderboard = document.getElementById("leaderboard");
const starsEl = document.getElementById("stars");
function loadQuestion() {
  reset();
  const q = questions[current];
  questionEl.textContent = q.q;
  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="radio" id="opt${i}" name="option" value="${i}">
      <label for=`opt${i}">${opt}`</label>
    ;
    optionsEl.appendChild(li);
  });
  startTimer();
}
function reset() {
  clearInterval(timer);
  timeLeft = 10;
  timerBar.style.width = "100%";
  optionsEl.innerHTML = "";
}
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerBar.style.width = (timeLeft * 10) + "%";
    if (timeLeft <= 0) {
      clearInterval(timer);
      autoNext();
    }
  }, 1000);
}
function autoNext() {
  checkAnswer();
  setTimeout(() => {
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1000);
}
function checkAnswer() {
  const selected = document.querySelector("input[name='option']:checked");
  const correctIndex = questions[current].answer;
  const labels = document.querySelectorAll("label");

  labels[correctIndex].classList.add("correct");
  if (selected) {
    const val = parseInt(selected.value);
    if (val === correctIndex) {
      score++;
    } else {
      labels[val].classList.add("incorrect");
    }
  }
}
nextBtn.addEventListener("click", () => {
  autoNext();
});
function showResult() {
  document.getElementById("quiz-box").style.display = "none";
  modal.style.display = "flex";
  finalScore.textContent = score;
  let starCount = score >= 13 ? 3 : score >= 8 ? 2 : 1;
  starsEl.innerHTML = "★".repeat(starCount) + "☆".repeat(3 - starCount);
  saveToLeaderboard(score);
  loadLeaderboard();
}
function saveToLeaderboard(score) {
  let scores = JSON.parse(localStorage.getItem("topScores")) || [];
  scores.push(score);
  scores.sort((a, b) => b - a);
  scores = scores.slice(0, 5);
  localStorage.setItem("topScores", JSON.stringify(scores));
}
function loadLeaderboard() {
  const scores = JSON.parse(localStorage.getItem("topScores")) || [];
  leaderboard.innerHTML = scores.map(s => <li>${s}/15</li>).join("");
}
function restartQuiz() {
  score = 0;
  current = 0;
  document.getElementById("quiz-box").style.display = "block";
  modal.style.display = "none";
  loadQuestion();
}
loadQuestion();
