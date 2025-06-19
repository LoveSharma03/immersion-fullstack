const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

let time = 0;
let intervalId = null;
let isRunning = false;

function formatTime(sec) {
    let hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    let mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    let seconds = String(Math.floor(sec % 60)).padStart(2, '0');
    return `${hrs}:${mins}:${seconds}`;
}

function updateDisplay() {
    display.textContent = formatTime(time);
}

function startStop() {
    if (!isRunning) {
        intervalId = setInterval(() => {
            time++;
            updateDisplay();
        }, 1000);
        startStopBtn.textContent = "Stop";
    } else {
        clearInterval(intervalId);
        startStopBtn.textContent = "Start";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(intervalId);
    time = 0;
    updateDisplay();
    startStopBtn.textContent = "Start";
    isRunning = false;
}

updateDisplay();
startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);