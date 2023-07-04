let secretNumber = Math.trunc(Math.random() * 20 + 1);
const check = document.querySelector("#checkbox");
let guess = document.querySelector("#guessbox");
let title = document.querySelector("#title");
let comment = document.querySelector("#comment");
let box = document.querySelector("#secret-number");
let highscore = document.querySelector("#highscore");
let score = document.querySelector("#score");
const again = document.querySelector("#again");
let prevHigh = 0;
let high = 0;

function checker() {
    if (guess.value == secretNumber) {
        title.textContent = "You Guessed it Right!";
        comment.textContent = "Numbers Match tbh";
        box.textContent = secretNumber;
        high = score.textContent;
        if(high > prevHigh) highscore.textContent = high;
        else highscore.textContent = prevHigh;
        guess.setAttribute("maxlength", "0");
        prevHigh = high;
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
}

check.addEventListener("click", checker);
guess.addEventListener("keyup", (e)=>{
    if(e.key == "Enter") checker();
});

again.addEventListener("click", () => {
    title.textContent = "Guess My Number!";
    comment.textContent = "No Numbers Yet!";
    score.textContent = "20";
    guessbox.value = "";
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    box.textContent = "?";
    guess.setAttribute("maxlength", "2");
})
