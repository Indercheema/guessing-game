'use strict';
/*

JavaScript Basics
Inderjeet Cheema

Basic interaction
*/


//add event listener
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}
// get HTML element by id
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}
//Select html element by selector 
function select(selector, parent = document) {
    return parent.querySelector(selector);
}
const form = select('form');
const userInput = select('.input');
const btn = select('.btn');
const restart = select('.restart');
const output = select('.output p');
const gameOver = select('.output .game-over');


function isNumber(str) {
    let input = str.trim();

    if (input.length > 0 && !isNaN(input))
        return true;


    return false;
}

function showRestart() {
    restart.classList.add('restart-show');
}
let count = 4;

function genRandomNunber() {
    const num = Math.floor(Math.random() * 50) + 1;
    return num;
}

//Adding an event listener
onEvent('click', btn, function () {

    let userNumber = userInput.value;
    let randomNumber = genRandomNunber();
    let maxNumber = 50;
    if (isNumber(userNumber)) {

        if (count < 1) {
            output.innerText = `Your are run out of Chances: You have  ${count} chances `;
            gameOver.innerText = 'Please restart the game';
            showRestart();
            output.innerText = ` ${result}`;
            count = 4;
        } else if (userNumber > maxNumber || userNumber < 1) {
            output.innerText = `Please enter number between 1 - 50`;
            count = 5;
        }
        else if (userNumber == randomNumber) {
            output.innerText = `Congratulations You won:`;
            showRestart();
            userInput.value = '';


        } else if (userNumber < randomNumber) {
            output.innerText = `My number is greater : You have  ${count} chances`;
        } else if (userNumber > randomNumber) {
            output.innerText = `My number is smaller : You have  ${count} chances `;

        }
        count--;
    } else {
        output.innerText = 'Please enter numbers only';
    }

});



onEvent('click', restart, function () {
    output.innerText = '';
    gameOver.innerText = '';
    userInput.value = '';
    count = 4;
    restart.classList.remove('restart-show');
    genRandomNumber();
});