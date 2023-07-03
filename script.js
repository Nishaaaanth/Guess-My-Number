const secretNumber = Math.trunc(Math.random()*20+1);
console.log(secretNumber);
let guess = document.querySelector(".guessbox");

const check = document.querySelector("#checkbox");
check.addEventListener("click", () => {
    guess = guess.textContent;
    if(guess === secretNumber) console.log("same");

})
