'use strict'
console.log('collegato');
//SETTIMEOUT
//esempio base
setTimeout(myFunction, 1000);
function myFunction() {
    console.log('sono passati 1 secondi');
}
//esempio con variabile let
let sec = 2;
setTimeout(function () {
    console.log('sono passati 2 secondi');
}, sec * 1000);
//SETINTERVALL
let valoreNumerico = setInterval(myFunction2, 10000);
function myFunction2() {
    console.log('ogni 10 secondi');
}
//valore numerico attribuito da js
console.log(valoreNumerico);

//start/stop
//variabile let dove riassegnare il valore della funzione
let myInterval;
const start = document.getElementById('start');
start.addEventListener('click', function () {
    myInterval = setInterval(function () {
        console.log('ogni 5 secondi dallo start');
    }, 5000);
});
const and = document.getElementById('stop');
and.addEventListener('click', function () {
    console.log('stop timer');
    clearInterval(myInterval);
});
//contatore
let count = 0;
const stopCount = setInterval(function () {
    console.log('ogni 2 secondi fino a stopparsi a 10');
    console.log(count);
    count++;
    if (count === 5) {
        clearInterval(stopCount);
    }
}, 2000);

