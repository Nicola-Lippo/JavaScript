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



