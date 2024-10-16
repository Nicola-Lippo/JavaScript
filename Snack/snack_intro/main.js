'use strict'
//chiedere all utente il suo nome
const name = prompt('inserisci il tuo nome');
console.log(name);
//chiedere all utente il suo cognome
const surnamename = prompt('inserisci il tuo cognoome');
console.log(surnamename);
//chiedere all utente il suo colore 
const color = prompt('inserisci il tuo colore');
console.log(color);


//salvo come variabile la scansione 
let startText = document.getElementById('app');
//concatenare input
let input = `${name} ${surnamename}`;
//numero casuale
let max = 10;
let random = Math.floor(Math.random() * max);
console.log(random);

//salvataggio unica variabile
const tutto = `Tu sei: ${input}, colore scelto ${color} è il tuo numero è ${random}`;
//dati in console
console.log(tutto);
//stampa html
startText.innerHTML = tutto;

