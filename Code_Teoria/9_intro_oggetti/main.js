'use strict'
console.log('collegato');
//object
const cat = {
    //3 modi per scrivere una proprietà
    'color': ['nero', 'bianco'],
    "age": 3,
    hungri: 'true',
};
console.log(cat);
//accedere alle proprietà di un oggetto (Dot notation, Quadre)
console.log(`i colori del gatto sono ${cat.color}`);
console.log(`l'età del gatto è ${cat['age']}`);
//aggiungo un colore al gatto . accedi hai metodi di quel dato
cat.color.push('rosso');
console.log(cat.color);
//visualizzare tutte le proprietà di un oggetto
for (let key in cat) {
    console.log(key);
    //valore
    console.log(cat[key]);
}
//for in composto da, metodi che trasformano le proprietà in array
console.log(Object.entries(cat));
console.log(Object.keys(cat));
console.log(Object.values(cat));
//modifico una proprietà
setTimeout(function () {
    //passo age da 3 a 4 dopo 5 secondi
    cat.age = 4
    console.log(cat);
}, 5000);

//array bidimensionali
const cats = [
    {
        name: 'nerina',
        color: 'nero',
        age: 2
    },
    {
        name: 'bianchino',
        color: 'biaco',
        age: 3
    },
    {
        name: 'rossino',
        color: 'rosso',
        age: 7
    },
];
//stampare i valori del gatto rosso
console.log(cats);
console.log(Object.entries(cats[2]));
//appendere in pagina i valori
const ul = document.getElementById('catslist');
for (let i = 0; i < cats.length; i++) {
    //salvo in una variabile
    const currentObj = cats[i];
    const li = document.createElement('li');
    //name
    li.append(currentObj.name);
    //age
    const p = document.createElement('p');
    if (currentObj.age < 4) {
        p.append('gatto giovane');
    } else {
        p.append('gatto anziano');
    };
    li.append(p);
    //pagina
    ul.append(li);
}
