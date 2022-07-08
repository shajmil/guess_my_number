'use strict';
const header = document.querySelector('header');
const again = document.querySelector('.again');
const button = document.querySelector('.check');
const number = document.querySelector('.number');
let scoreText = document.querySelector('.score');
let secretNum = Math.floor(Math.random() * 20 + 1);
const message = document.querySelector('.message');
let inputNumber;
let score = 20;
let highScore = 0;
let highscore = document.querySelector('.highscore');
// console.log(header);
// console.log(header.textContent);
// header.textContent = 'guesss';
// console.log(button);

// (window.beforeunload = function(ev) {
//     ev.preventDefault();
// }),
// (window.unload = function(ev) {
//     ev.preventDefault();
// }),
button.addEventListener('click', () => {
    inputNumber = Number(document.querySelector('.guess').value);

    if (!inputNumber) {
        alert('Please enter a number');
    }

    if (inputNumber === secretNum) {
        if (score > 1) {
            message.textContent = '🏆🏆you won the game';
            document.querySelector('body').style.backgroundColor = ' #60b347';
            number.style.width = '30rem';
            number.textContent = secretNum;
            if (score > highScore) {
                highscore.textContent = score;
            }
        }
    }
    if (inputNumber > secretNum) {
        if (score > 1) {
            message.textContent = 'too high...';
            score--;
            scoreText.textContent = score;
        } else if (score > 0) {
            document.querySelector('body').style.backgroundColor = ' #FA6934';
            score--;
            scoreText.textContent = score;
            message.textContent = 'you loss the game';
        }
    }
    if (inputNumber < secretNum) {
        if (score > 1) {
            message.textContent = 'too low...';
            score--;
            scoreText.textContent = score;
        } else if (score > 0) {
            document.querySelector('body').style.backgroundColor = ' #FA6934';
            score--;
            scoreText.textContent = score;
            message.textContent = 'you loss the game';
        }
    }

    //   console.log(inputNumber);
    //     console.log(secretNum);
    // console.log(inputNumber);
    // console.log();
});
again.addEventListener('click', () => {
    score = 20;
    secretNum = Math.floor(Math.random() * 20 + 1);
    message.textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = ' #222';
    scoreText.textContent = score;
    number.style.width = '15rem';
    number.textContent = '?';
    document.querySelector('.guess').value = '';
});