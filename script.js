const input = document.querySelector("input"),
 guess = document.querySelector(".guess"),
 checkButton = document.querySelector("button"),
 remainChances = document.querySelector(".chances");

let randomNum;
let chance;

function startGame() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    chance = 10;
    input.value = "";
    input.disabled = false;
    checkButton.textContent = "Check";
    guess.textContent = "";
    guess.style.color = "#333";
    remainChances.textContent = chance;
    input.focus();
}

startGame();

checkButton.addEventListener("click", () => {
    if (checkButton.textContent === "Replay") {
        startGame();
        return;
    }

    const inputValue = Number(input.value);
    if (!input.value || inputValue < 1 || inputValue > 100) {
        guess.textContent = "Enter a number from 1 to 100";
        guess.style.color = "#DE0611";
        return;
    }

    chance--;
    if (inputValue === randomNum) {
        [guess.textContent, input.disabled] = ["Congratulations!", true];
        [checkButton.textContent, guess.style.color] = ["Replay", "#333"];
    } else if (chance === 0) {
        [guess.textContent, input.disabled] = [`Game over! The number was ${randomNum}.`, true];
        [checkButton.textContent, guess.style.color] = ["Replay", "#DE0611"];
    } else if (inputValue > randomNum) {
        [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
        guess.style.color = "#333";
    } else {
        [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
        guess.style.color = "#333";
    }
});