'use strict'
console.log('collegato');

//ciclo for in console
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    };
};

//ciclo for in DOM
const ul = document.querySelector('ul')
for (let x = 1; x <= 100; x++) {
    const li = document.createElement('li');
    ul.append(li);
    //aggiunta classe da bootstrap con js
    li.classList.add('col-3');
    if (x % 3 === 0 && x % 5 === 0) {
        li.append('FizzBuzz');
        li.classList.add('bg-success');
    } else if (x % 3 === 0) {
        li.append('Fizz');
        li.classList.add('bg-warning');
    } else if (x % 5 === 0) {
        li.append('Buzz')
        li.classList.add('bg-info');
    } else {
        li.append(x);
        li.classList.add('bg-secondary-subtle');
    };
};

