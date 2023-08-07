"use strict";
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#number").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector("body").style.backgroundColor = "#50C878";
    document.querySelector(".ques").style.width = "300px";
    document.querySelector(".ques").style.left = "43%";
    document.querySelector(".ques").textContent = secretNumber;
    if (score>highScore) {
        highScore = score;
        document.querySelector(".hs").textContent = highScore
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score-num").textContent = score;
    } else {
      document.querySelector(".score-num").textContent = 0;
      document.querySelector(".message").textContent = "You lose the GAME!";
      document.querySelector("body").style.backgroundColor = "#800000";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score-num").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the GAME!";
      document.querySelector(".score-num").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#800000";
    }
  }
});
document.querySelector(".btn-again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score-num').textContent = score
  document.querySelector('body').style.backgroundColor = '#1e1e1e'
  document.querySelector('#number').value = ''
  document.querySelector('.ques').textContent = "?"
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.ques').style.width = '150px'
  document.querySelector('.ques').style.left = '46%'
});
