let timerInterval;
let time = 25 * 60;
let isPaused = false;

const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const timerDisplay = document.querySelector("#timer");

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timerDisplay.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  if (time <= 0) {
    clearInterval(timerInterval);
    timerDisplay.innerText = "Fim!";
  }
  time--;
}

startButton.addEventListener("click", () => {
  if (!isPaused) {
    startTimer();
  } else {
    startTimer();
    isPaused = false;
  }
});

pauseButton.addEventListener("click", () => {
  pauseTimer();
  isPaused = true;
});

