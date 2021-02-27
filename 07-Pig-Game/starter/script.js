'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dieEl = document.querySelector('.die');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
dieEl.classList.add('hidden');
const scores = [0,0];
let curScore = 0;
let activePlayer = 0;
let playing = true;

// Rolling Dice
btnRoll.addEventListener('click', function() {

    if(playing) {
        // Generate random die roll
        const die = Math.trunc(Math.random() * 6) + 1;
        // Display die
        dieEl.classList.remove('hidden');
        dieEl.src = `die-${die}.png`;

        // Check if 1 was rolled
        if(die !== 1) {
            curScore += die;
            document.getElementById(`current--${activePlayer}`).textContent = curScore;
        } else {
            switchPlayer();
        }
    }
    
});

btnHold.addEventListener('click', function() {

    if(playing) {
        // Add current score to active player score
        scores[activePlayer] += curScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // Check if player's score is >= 100

        if(scores[activePlayer] >= 100) {
            // Finish game
            playing = false;
            dieEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // Switch to the next player
            switchPlayer();
        }   
    }
     
});

btnNew.addEventListener('click', function() {
    window.location.reload();
});

const switchPlayer = function() {
    curScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = curScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};