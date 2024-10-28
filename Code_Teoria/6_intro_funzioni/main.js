'use strict'
console.log('collegato');

//passo argomenti alla funzione
//num2 assegno valore di default
function sumTwoNumbers(num1, num2 = 1) {
    const results = num1 + num2;
    console.log(num1, num2);
    //restituisco il valore di una funzione
    return results;
};
//invocazione
const one = sumTwoNumbers(10, 10);
//non passo il secondo valore
const two = sumTwoNumbers(20);
//sovrascrivo valore di dafault
const tre = sumTwoNumbers(2, 18);
console.log(one, two, tre);



