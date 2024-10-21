'use strict'
console.log('collegato');

//sintassi array
const nomi = ['Aldo', 'Giovanni', 'Giacomo'];
console.log(nomi);

//accedere a un elemento
console.log(nomi[0]); //aldo
console.log(nomi[1]); //giovanni
console.log(nomi[2]); //giacomo
//ultimo elemento
console.log(nomi[nomi.length - 1]);
console.log(nomi.at(-1));

//aggiungere un elemento a un array
const colori = ['rosso', 'bianco', 'vede'];
//consol log prima
console.log(colori);
//push
colori.push('blu');
//consol log dopo
console.log(colori);

//cicli + array
const animali = ["Leone", "Tigre", "Elefante", "Giraffa", "Zebra", "Scimmia", "Cane", "Gatto", "Coccodrillo", "Aquila"];
console.log(animali);
//ciclo con proprietà .lenght
console.log(animali.length);
for (let i = 0; i < animali.length; i++) {
    console.log(animali[i]);
};

//valori array + cicli + istruzioni condizionali
const numeri = [15, 21, 22, 56, 48, 33];
for (let x = 0; x < numeri.length; x++) {
    //NB. per lavorare col valore e non con l' indice numerico prova[x]
    if (numeri[x] % 2 === 0) {
        console.log(`numeri pari ${numeri[x]}`);
    } else if (numeri[x] % 3 === 0) {
        console.log(`numeri dispari ${numeri[x]}`);
    }
};


