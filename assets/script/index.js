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
const numberOne = select('.number-one');
const numberTwo = select('.number-two');
const btn = select('.get-result');
const output = select('.output p');


function isNumber(str) {
    let input = str.trim();

if (  input.length > 0 && !isNaN(input))
return true;


return false;
}
 let count = 4;



//Adding an event listener
onEvent('click', btn, function() {

let a = numberOne.value;
let b = 10;
let c = 15;

if (count < 1 ) {
    output.innerText = `Your are run out of Chances: You have  ${count} chances `;
    output.innerText = ` ${result}`;
    count = 4;
} else if (a > c || a < 1) {
    output.innerText =`Choose between 1 - 15 : You have  ${count} chances`;
}
else if(a == b){
    output.innerText =`Congratulations You won:`;
    numberOne.value ='';

} else if( a < b) {
    output.innerText = `Your number is smaller than Mine : You have  ${count} chances`;
}else if  (a > b){
    output.innerText = `Your number is greater than mine : You have  ${count} chances `;

}
count--;

});