Concetti JavaScript

0) Intro
Quando ci viene restituito un dato dall'utente è sempre una stringa, Es. se viene restituito età 18 sarà una stringa da convertire in numero per eseguire eventuali operazioni.
document.getElementById('app') = mostra l'oggetto html
.innerHTML = mostra il suo valore
NB: js non è un linguaggio tipizzato, non dobbiamo definire che tipo di dato conterà la variabile.
NB: usare const se non riassegnamo valore alla variabile

1) Istruzioni condizionali
Operatori relazionari: differenza tra == e ===
== ugualianza
!= diversità
ugualianza di valore e tipo
=== identità
disugualianza di valore e tipo
!== non identità

Operatori logici
- due operatori binari (che richiedono due operandi)
AND &&
restituisce vero se entrambi gli operandi sono veri
OR ||
restituisce vero se almeno uno degli operandi è vero
- un operatore unario (che richiede un operando)
NOT !
cambia il valore di verità dell'operando
NB: .length per saper la lunghezza di una stringa

2) Manipolazione del DOM
javascript può:
- modificare HTML
- reagire ad eventi
- interagire con il browser

DOM (Document Object Model) è una rappresentazione ad albero di dati strutturati insieme di elemnti html che compongono la pagina
NB. javascript è l'unico linguaggio di programmazione a permettere di modificare il DOM
NB: più di 80 selettori per modificare il DOM  https://developer.mozilla.org/en-US/docs/Web/API/Document
typeof: permete di vedere il tipo di dato

NB: Con JS è possibile rimuovere classi indesiderate da framework.
differenza tra innertext e innerHtml e che in innerHtml si puo scrivere del codice Es. <p>ciao</p>

3) Ciclo FOR
sintassi JS
for (let i = 0; i < x; i++) {
    //code
};

keyword: for
contatore: let i = 0
condizione: i < x
incremento/decremento: i++/i--

NB:un ciclo può essere scritto senza i/d se all suo interno poi usiamo I/d

4) Array 1/2

Un array è una struttura dati utilizzata per memorizzare più valori in una singola variabile. È una lista ordinata di elementi, che possono essere di qualsiasi tipo, come numeri, stringhe, oggetti o anche altri array.
Indice numerico: Gli elementi di un array sono posizionati in un ordine preciso e ogni elemento può essere accessibile tramite un indice numerico, che parte da 0.

NB: sempre meglio avere datiomogenei in un Array
NB. le stringhe si comportano come gli array(blocco 1, snack 4), per i numeri e necessario mantenerli stringa e poi convertirli

5) Ciclo WHILE 
WHILE
while (condizione) {
    //istruzioni per terminare il ciclo
};

keyword: while
condizione: serve a ripetere il ciclo finchè è vera
istruzioni per terminare il ciclo: rendere falsa la condizione per terminare un ciclo

NB. Il ciclo while è pratico per eseguire cicli la cui condizione non dipende per forza da un contatore.
NB. è sempre possibile convertire un ciclo for in uno while
NB. se la condizione è subito vera non si entra nel ciclo while

DO-WHILE
do {
    //codice da eseguire
    //istruzioni per terminare il ciclo
} while(condizione)

 Il ciclo do-while viene sempre eseguito almeno una volta anche se la condizione risulta falsa fin dall'inizio.
 Questo perché la condizione viene verificata solo dopo che il blocco di codice è già stato eseguito.

 NB. debugger = aiuti della console

 6) Intro Funzioni
 sintassi JS
 //definizione
 function miaFunzione() {
    //codice
 };
 //invocazione
 miaFunzione();

 NB. le funzioni vanno definite e invocate.
 keyword: function
 nome funzione: miaFunzione(camelCase)

 NB. allert(), prompt() sono funzioni BUILT-IN messe a disposizione dall'ambiente di sviluppo.
 return = restituisce il valore di una funzione,
 NB: a una funzione è possibbile passare dei parametri o valori nelle ();

 Hoisting delle funzioni
 Le dichiarazioni di funzioni (function declarations) in JavaScript sono soggette a hoisting. Questo significa che puoi chiamare una funzione dichiarata prima della sua definizione nel codice, e funzionerà comunque. Il motore di JavaScript sposta l'intera dichiarazione della funzione in cima al contesto di esecuzione.

 