// 'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.guess').value = "";

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        displayMessage('No Number 😤');

        // when player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!')
        document.querySelector('body').style.backgroundColor = "#60b347"
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            score = highscore;
            document.querySelector('.highscore').textContent = highscore;
        }

        // when guess is too high or too low
    } else {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high 📈' : 'Too low 📉')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'What a Loser! 🤦‍♂️';
        }

    }
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.score').textContent = 20;
    displayMessage('Start guessing...')
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = "?";

})