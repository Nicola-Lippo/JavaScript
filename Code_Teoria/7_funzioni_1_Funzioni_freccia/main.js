'use strict'
console.log('collegato');
//soluzioni alternative snack intro funzioni
//FOR
const richiesta = 'otto';
function isPalindroma(input) {
    let inverted = '';
    //ciclo for
    for (let i = input.length - 1; i >= 0; i--) {
        console.log(i);
        console.log(input[i]);
        inverted += input[i];
    }
    if (input === inverted) return true;
}
//dichiarazione
if (isPalindroma(richiesta)) {
    console.log('palindroma');
} else {
    console.log('non palindroma');
}
//WHILE
const richiesta2 = 'anna';
function isPalindroma(input) {
    let start = 0;
    let end = input.length - 1;
    //cilo whiile
    while (start < end) {
        if (input[start] !== input[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
//dichiarazione
if (isPalindroma(richiesta2)) {
    console.log('palindroma');
} else {
    console.log('non palindroma');
}
console.log('------------------------------------');
//SWITCH
const n = ''
switch (n) {
    case 'standard':
    default:
        console.log('hai selezionato opzione standard');
        break;
    case 'pro':
        console.log('hai scelto opzione pro');
        break;
    case 'god':
        console.log('hai scelto opzione god');
        break;
}
/************************************/
//ARROW FUNCTION
//salviamo la funzione dentro una variabile
const myFunctio = function () {
    console.log('ciao da funzione normale');
};
//consol vediamo la funzione
console.log(myFunctio);
//arrow
const myFunctioArrow = () => {
    console.log('ciao da funzione freccia');
};
console.log(myFunctioArrow);
//se si ha solo un istruzione
const myArrowSingle = () => console.log('ciao da funzione freccia singola opzione');
myArrowSingle();
//senza return
const sum = (num1, num2) => num1 + num2;
const one = sum(5, 5);
const two = sum(10, 10);
console.log(one, two);
