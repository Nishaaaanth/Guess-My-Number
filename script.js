let secretNumber = Math.trunc(Math.random() * 20 + 1);
const check = document.querySelector("#checkbox");
let guess = document.querySelector("#guessbox");
let title = document.querySelector("#title");
let comment = document.querySelector("#comment");
let box = document.querySelector("#secret-number");
let highscore = document.querySelector("#highscore");
let score = document.querySelector("#score");
const again = document.querySelector("#again");

check.addEventListener("click", () => {
    if (guess.value == secretNumber) {
        title.textContent = "You Guessed it Right!";
        comment.textContent = "Numbers Match tbh";
        box.textContent = secretNumber;
        highscore.textContent = score.textContent;
        guess.setAttribute("maxlength", "0");
    }
    else if (guess.value == "" || isNaN(guess.value)) {
        title.textContent = "Guess My Number!";
        comment.textContent = "Yo what're you doing!";
    }
    else if (guess.value > secretNumber) {
        title.textContent = "Guess My Number!";
        comment.textContent = "lil less than that";
        score.textContent = score.textContent - 1;
    }
    else if (guess.value < secretNumber) {
        title.textContent = "Guess My Number!";
        comment.textContent = "lil more than that";
        score.textContent = score.textContent - 1;
    }
});

again.addEventListener("click", () => {
    title.textContent = "Guess My Number!";
    comment.textContent = "No Numbers Yet!";
    score.textContent = "20";
    highscore.textContent = "0";
    guessbox.value = "";
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    box.textContent = "?";
    guess.setAttribute("maxlength", "2");
})
