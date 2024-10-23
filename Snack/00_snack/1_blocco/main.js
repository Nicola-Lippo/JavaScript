'use strict'
console.log('sono collegato');

//SNACK 1(scommentare per l'utilizzo)
/*
const parolaUno = prompt('inserisci la prima parola');
const parolaDue = prompt('inserisci la seconda parola')
if (parolaUno.length > parolaDue.length) {
    console.log(`la parola ${parolaUno} è più lunga della parola ${parolaDue}`);
} else if (parolaUno.length < parolaDue.length) {
    console.log(`la parola ${parolaDue} è più lunga della parola ${parolaUno}`);
} else {
    console.log(`la parola ${parolaDue} è la parola ${parolaUno} hanno la stessa lunghezza`);
};
*/
//-----------------------------------------------------------------------------------------------------
//SNACK 2
/*
let somma = 0;

for (let i = 0; i < 10; i++) {
    const request = Number(prompt('Inserisci un numero'));  // Converte la stringa in numero
    if (isNaN(request)) {  // Controlla se l'input non è un numero
        i--;  // Decremento
        console.log('Non hai inserito un numero valido');
    } else {
        somma += request;
    }
};
console.log(`La somma è ${somma}`);
*/
//-----------------------------------------------------------------------------------------------------
//SNACK 3
/*
const finalArray = [];
console.log(finalArray);
const request = 6;
for (let i = 0; i < request; i++) {
    const number = Number(prompt('Inserisci un numero'));  // Converte la stringa in numero
    if (isNaN(number)) {  // Controlla se l'input non è un numero
        i--;  // Decremento
        console.log('Non hai inserito un numero valido');
    } else if (number % 2 !== 0) {  // Verifica se il numero è dispari
        finalArray.push(number);  // Inserisci il numero nell'array se è dispari
        console.log(finalArray);
    }
};
*/
//-----------------------------------------------------------------------------------------------------
//SNACK 4
/*
const userNumber = prompt('digitare un numero a 4 cifre');
let somma = 0;
const maxLenght = 4;
//controllo se il numero inserito é di 4 cifre
if (userNumber.length === maxLenght) {
    console.log(`il numero inserito è ${userNumber}`);
    //controllo con un ciclo for il valore di ogni posizione del numero appena inserito sotto forma di stringa e li converto in valore numerico
    for (let i = 0; i < maxLenght; i++) {
        console.log(`numero ${i + 1}: ${userNumber[i]}`);
        //calcolo della somma
        somma = somma + Number(userNumber[i]);
    }
} else {
    alert('Numero non di 4 cifre')
    //ricarica la pagina
    location.reload();
}
//stampo il totale della somma dei numeri in console
console.log(`la somma è ${somma}`);
*/
//-----------------------------------------------------------------------------------------------------
//SNACK 5
/*
const arrayOfNumbers = [14, 10, 27, 34, 58, 67, 35, 92, 63, 70];
console.log(arrayOfNumbers);
let somma = 0;
// Ciclo for per sommare tutti i numeri
for (let i = 0; i < arrayOfNumbers.length; i++) {
    somma += arrayOfNumbers[i];
}
console.log(`La somma è ${somma}`);
//calcolo della media
const average = somma / arrayOfNumbers.length;
console.log(`La media è ${average}`);
*/
