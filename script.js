/*declare the variables*/
let answers = document.querySelectorAll(".Answers");

let button = document.querySelectorAll(".Incorrect");

let correct = document.querySelectorAll(".Correct");

let score = 0;

let myQuestions = [];

let gameOver = document.querySelector(".game-over");

let Questions = document.querySelectorAll(".Questions");

let submitButton = document.querySelector("button");

console.log(answers.length);
console.log(correct);

/*loop to make the correct buttons clickable with some event*/

for (i = 0; i < correct.length; i++) {
  let correctAnswer = correct[i];

  correctAnswer.addEventListener("click", itsCorrect);

  function itsCorrect(e) {
    score += 10;
  }
}

/*function to submit the game */

let popUp = document.querySelector(".final-score");
submitButton.addEventListener("click", submitGame);

/*window with score pops up*/

function submitGame() {
  popUp.innerText = `Your Score Is ${score}`;
  popUp.style.opacity = 1;
  console.log(popUp.innerText);
}

/*on loadl function*/
window.onload = alert("You have 2 minutes to complete this quiz!");

/*timeout function*/

window.setTimeout(submitGame, 100000);
