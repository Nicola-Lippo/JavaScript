'use strict'
console.log('collegato');

//PARI O DISPARI
let request;
while (request !== 'pari' && request !== 'dispari') {
    request = prompt("Inserisci 'pari' o 'dispari'");
};
console.log(`Hai scelto: ${request}`);
//scelta numero utente
let x = 0;  // Inizializza x a 0 per entrare nel ciclo
while (x < 1 || x > 9 || isNaN(x)) {  // Controlla che x sia tra 1 e 9 e che sia un numero
    x = Number(prompt('Scegli un numero da 1 a 9'));
};
console.log(`Hai scelto il numero ${x}`);
//numero random pc con funzione
function numberRandomPc() {
    return Math.ceil(Math.random() * 9);
};
const pcNumber = numberRandomPc();
console.log(`il numero scelto dal pc è ${pcNumber}`);
//somma
const sum = x + pcNumber;
console.log(`la somma è ${sum}`);
//funzione per pari ho dispari
function pariDispari(sum, request) {
    //Il ? : in JavaScript è chiamato operatore ternario (o condizionale) ed è una scorciatoia compatta per un'istruzione if-else.
    //Si usa per prendere decisioni basate su una condizione e assegnare un valore diverso a seconda che la condizione sia vera o falsa.
    const risultato = sum % 2 === 0 ? 'pari' : 'dispari';  // Verifica se la somma è pari o dispari

    if (risultato === request) {
        console.log(`Vince l'utente con ${request}`);
    } else {
        console.log(`Vince il PC con ${risultato}`);
    }
};
//Chiamata alla funzione per determinare il vincitore
pariDispari(sum, request);

//PALINDROMA
//richiesta parola
const input = prompt('inserisci una parola per verificare se è palindroma')
//funzione
function isPalindroma(parola) {
    //toLowerCase(): Converte tutte le lettere della parola a minuscole, in modo che parole come "OtTo" siano considerate palindrome.
    parola = parola.toLowerCase();
    //split(''): Divide la parola in un array di caratteri.
    //reverse(): Inverte l'ordine dell'array.
    //join(''): Ricompone l'array in una stringa.      
    const parolaInvertita = parola.split('').reverse().join('');
    // Controlla se la parola originale è uguale alla parola invertita
    return parola === parolaInvertita;
};
//dichiarazione
const output = isPalindroma(input);
if (output === true) {
    console.log(`la parola inserita ${input} è palindroma`);
} else {
    console.log(`la parola inserita ${input} non è palindroma`);
};




