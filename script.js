let timeRemaining = 30;

const timerElement = document.querySelector(".timer");

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins} min ${secs} sec`;
}

function updateTimer() {
  if (timeRemaining > 0) {
    timeRemaining--;
    timerElement.textContent = formatTime(timeRemaining);
  } else {
    clearInterval(timerInterval);
    window.location.href = "Troubleshot.html";
  }
}

const timerInterval = setInterval(updateTimer, 1000);
