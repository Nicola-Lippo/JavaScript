'use strict'
console.log('collegato');
//variabili
let sec = 5;
let count = 10;

setTimeout(function () {
    console.log('Buon Anno');
}, sec * 1000);

const buonAnno = setInterval(function () {
    console.log(count);
    count--;
    if (count === 0) {
        console.log('Buon Anno 2');
        clearInterval(buonAnno);
    };
}, 1000);