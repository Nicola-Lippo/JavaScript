'use strict'
//inserimento html da js
document.getElementById('app').innerHTML = 'ciao mondo';

//inserimento variabile CONST + stampa console
const miaVariabile = 'ciao CONST';
console.log(miaVariabile);

//inserimento variabile LET + esempio di riassegnazione variabile
let miaVariabileDue = 'ciao LET';
alert(miaVariabileDue);

miaVariabileDue = 'ciao LET per 2';
alert(miaVariabileDue);

//concatenazione,Template Literal, alt + 96  per `
const parolaUno = 'prova';
const parolaDue = 'microfono';
const parole = parolaDue + ' ' + parolaUno;
console.log(parole);
//Template Literal, alt + 96  per `
console.log(`${parolaUno} ${parolaDue}`);

//operazioni matematiche base
let somma = 3 + 3;
let sot = somma - 2; console.log(sot);
let mol = somma * 3; console.log(mol);
let div = somma / 2; console.log(div);

//prompt(); acetta come argomento una stringa
const name = prompt('inserisci il tuo nome');
console.log(name);




