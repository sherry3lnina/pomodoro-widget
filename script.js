let timeLeft = 1500;
let timerId = null;
let isRunning = false;
const minDisplay = document.getElementById('minDisplay');
const secDisplay = document.getElementById('secDisplay');
const playIcon = document.getElementById('playIcon');
const alarm = new Audio('https://www.soundjay.com/buttons/sounds/button-10.mp3');

function updateDisplay() {
    minDisplay.innerText = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    secDisplay.innerText = (timeLeft % 60).toString().padStart(2, '0');
}

function toggleTimer() {
    if (!isRunning) {
        isRunning = true;
        playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
        timerId = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerId);
                isRunning = false;
                playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
                alarm.play();
            }
        }, 1000);
    } else {
        clearInterval(timerId);
        isRunning = false;
        playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
    }
}

function stopTimer() { 
    clearInterval(timerId); 
    isRunning = false; 
    playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>'; 
}

function resetTimer() { 
    stopTimer(); 
    timeLeft = 1500; 
    updateDisplay(); 
}

function setTimer(seconds) { 
    stopTimer(); 
    timeLeft = seconds; 
    updateDisplay(); 
}