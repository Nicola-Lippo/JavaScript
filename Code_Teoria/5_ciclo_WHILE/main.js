'use strict'
console.log('collegato');
////WHILE
//definisco fuori dal ciclo la variabile di partenza
let i = 0;
//ciclo
while (i < 10) {
    i++;
    console.log(i);
}

//esempio non numerico senza contatore
let request = prompt("Inserisci 'ciao'");
while (request !== 'ciao') {
    request = prompt("Inserisci 'ciao'");
    console.log('hai digitato ciao');
}

//DO-WHILE
//contestualizzare la variabile
let input;
//ciclo
do {
    input = prompt("Inserisci 'hello'");
    if (input === 'hello') {
        console.log('hai digitato hello');
    }
} while (input !== 'hello');

//esempio 1
let sum = 0;
const limit = 10;

while (sum < limit) {
    sum += Number(prompt('inserisci un numero fino a superare 10'));
}
console.log(sum);

