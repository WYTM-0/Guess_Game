let targetNumber = Math.floor(Math.random() * 20) + 1;
let attempt = 0;
const maxAttempt = 5;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const attemptDisplay = document.getElementById("attempt");
const resultDisplay = document.getElementById("result");

function isNumeric(value) {
    return !isNaN(value) && value.trim() !== "";
}

// Initial page state
window.onload = function () {
    guessInput.value = "";
    attemptDisplay.innerHTML = "Attempt 0/5";
    resultDisplay.innerHTML = "";

    guessBtn.style.display = "block";
    restartBtn.style.display = "none";

    guessInput.focus();
};

function restartGame() {
    targetNumber = Math.floor(Math.random() * 20) + 1;
    attempt = 0;

    guessInput.value = "";
    attemptDisplay.innerHTML = "Attempt 0/5";
    resultDisplay.innerHTML = "";

    guessBtn.style.display = "block";
    restartBtn.style.display = "none";

    guessInput.focus();
}

function guessNumber() {
    let value = guessInput.value;

    // Empty or non-number
    if (value === "" || !isNumeric(value)) {
        return;
    }

    value = Number(value);

    // Only allow 1-20
    if (value < 1 || value > 20) {
        resultDisplay.innerHTML = "Please enter a number between 1 and 20";
        guessInput.value = "";
        guessInput.focus();
        return;
    }

    attempt++;
    attemptDisplay.innerHTML = "Attempt " + attempt + "/" + maxAttempt;

    if (value === targetNumber) {
        resultDisplay.innerHTML = "You WIN";

        guessBtn.style.display = "none";
        restartBtn.style.display = "block";
    }
    else if (attempt >= maxAttempt) {
        resultDisplay.innerHTML = "You LOSE";

        guessBtn.style.display = "none";
        restartBtn.style.display = "block";
    }
    else if (value > targetNumber) {
        resultDisplay.innerHTML = value + " is too high";
    }
    else {
        resultDisplay.innerHTML = value + " is too low";
    }

    guessInput.value = "";
    guessInput.focus();
}

// Button events
guessBtn.addEventListener("click", guessNumber);
restartBtn.addEventListener("click", restartGame);

// Press Enter to Guess
guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && guessBtn.style.display !== "none") {
        guessNumber();
    }
});