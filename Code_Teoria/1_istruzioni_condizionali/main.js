'use strict'
console.log('collegato');

//esempio istruzione condizionale con richiesta da prompt
//conversione stringa del prompt in numero con Number/parseInt
const numero = Number(prompt('indovina un numero da 0 a 9'));
console.log(numero);
//isNaN = se non è un numero
if (isNaN(numero)) {
    console.log('non hai digitato un numero');
} else if (numero > 9) {
    console.log('solo numeri da 0 a 9');
} else {
    if (numero === 4) {
        console.log(`hai indovinato il numero era proprio ${numero}`);
    } else if (numero === 3 || numero === 5) {
        console.log(`ci sei vicino col numero ${numero}, ma è sbagliato`);
    } else {
        console.log(`hai perso col numero ${numero}`);
    }
};

//.length attributo delle stringhe
const parola = prompt('inserisci una parola per vederne la lunghezza');
console.log(`la parola ${parola} è lunga ${parola.length}`);

