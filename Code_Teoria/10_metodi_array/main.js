'use strict'
console.log('collegato');
//array di partenza
const animals = ['Leone', 'Elefante', 'Giraffa', 'Tigre', 'Zebra',];
//iterare(ciclo for)
for (let i = 0; i < animals.length; i++) {
    console.log(i);
    console.log(animals[i]);
}
console.log('-------------------------------------');
//iterare(ciclo for of)
for (let animal of animals) {
    console.log(animal);
}
console.log('-------------------------------------');
//iterare metodo .forEach()
/*riceve come argomento una funzione(addeventlistener)
3 argomenti 1 elemento stesso, 2 il suo indice, 3 l'array
l'ordine va rispettato, _ se non si usa un argomento*/
animals.forEach((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
});
console.log('-------------------------------------');
//passare direttamente una funzione come argomento
animals.forEach(forEachFunction);
function forEachFunction(element, index, array) {
    console.log(`uso il .forEach passando la funzione, ${element}`);
    console.log(`uso il .forEach passando la funzione, ${index}`);
    console.log(`uso il .forEach passando la funzione, ${array}`);
};
console.log('-------------------------------------');
//array di oggetti
const animali = [
    {
        nome: 'Leone',
        colore: 'Giallo',
        paese: 'Africa',
    },
    {
        nome: 'Panda',
        colore: 'Bianco e nero',
        paese: 'Cina',
    },
    {
        nome: 'Canguro',
        colore: 'Marrone',
        paese: 'Australia',
    },
    {
        nome: 'Tigre',
        colore: 'Arancione e nero',
        paese: 'India',
    },
    {
        nome: 'Orso polare',
        colore: 'Bianco',
        paese: 'Artico',
    },
];
//forEach
animali.forEach(funcionForEach);
//function(non uso tutti gli argomenti)
function funcionForEach(element, index, array) {
    console.log(`il nome è ${element.nome}, di colore ${element.colore} è vive in ${element.paese}`);
};
console.log('-------------------------------------');
//MAP
//ci restituisce un nuovo array che dobbiamo salvare in una variabile.
const array = [10, 15, 20, 25, 30]
console.log(array);
const arrayMap = array.map((element) => {
    return element * element;
});
console.log(arrayMap);
console.log('-------------------------------------');
//FILTER
//restituisce solo i valori che verificano una data condizione.
//const arrayFilter = array.filter((element) => element % 2 === 0);
const arrayFilter = array.filter((element) => {
    if (element % 2 === 0) {
        return true;
    };
});
console.log(arrayFilter);

