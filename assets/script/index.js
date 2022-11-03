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
function  select(selector, parent = document){
return parent.querySelector(selector);
}
const form = select('form');
const userInput = select('.input');
const btn = select('.btn');
const restart = select('.restart');
const output = select('.output .msg1');
const gameOver = select('.output .game-over');


function isNumber(str) {
    let input = str.trim();

if (  input.length > 0 && !isNaN(input))
return true;


return false;
}
 let count = 4;
 let randomNumber = Math.floor(Math.random()*50) + 1;

//Adding an event listener
onEvent('click', btn, function() {

let userNumber = userInput.value;
let maxNumber = 50;

if (count < 1 ) {
    output.innerText = `Your are run out of Chances: You have  ${count} chances `;
    gameOver.innerText = 'Please restart the game';
    restart.classList.add('restat-show');
    output.innerText = ` ${result}`;
    count = 4;
} else if (userNumber > maxNumber || userNumber < 1) {
    output.innerText =`Please enter number between 1 - 50`;
    count = 4;
}
else if(userNumber == randomNumber){
    output.innerText =`Congratulations You won:`;
    userInput.value ='';

} else if( userNumber < randomNumber) {
    output.innerText = `My number is greater : You have  ${count} chances`;
}else if  (userNumber > randomNumber){
    output.innerText = `My number is smaller : You have  ${count} chances `;

}
count--;

});

onEvent('click', restart, function() {
    output.innerText = '';
    gameOver.innerText = '';
    userInput.value = '';
    count = 4;
    
    });