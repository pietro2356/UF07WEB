//ESERCIZIO 1
let nome = "Nicole";
let cognome = "Ebli";
let matricola = 11111;

console.log(nome);
console.log(cognome);
console.log(matricola);

console.log(`Sono ${nome} ${cognome} e la mia matricola è: ${matricola}`);

//ESERCIZIO 2
// scambiare i valori usando una terza variabile
let temp = nome;
nome = cognome;
cognome = temp;

// scambiare i valori senza una terza variabile
[nome, cognome] = [cognome, nome];

//ESERCIZIO 3 
matricola = 238734;

matricola = matricola.toString();
console.log(`matricola è di tipo: ${typeof matricola}`);

matricola = Number(matricola);
console.log(`matricola è di tipo: ${typeof matricola}`);

//ESERCIZIO 4
let punteggio = 0;
punteggio += 13;
punteggio -=4;
punteggio *=4;
punteggio /=2;
punteggio **=2;

//ESERCIZIO 5
if(punteggio > 314){
console.log("Ottimo punteggio");
}else{
console.log("Buon punteggio");
}

//ESERCIZIO 6
let i;
const SUFFIFICENZA = 18;
for(i=0; i<=32; i++){
if(i>=18 & i<31){
    console.log(i);
}else if(i==31 || i==32){
    console.log(30 + 'L');
}

}
i=0;
while(i<=32){
if(i>=18 & i<31){
    console.log(i);
}else if(i==31 || i==32){
    console.log(30 + 'L');
}
i++
}

for (let i = 0; i <= 32; i++) {
let voto;
if (i >= 0 && i <= 16) {
  voto = 'insufficiente';
} else if (i >= 17 && i <= 19) {
  voto = 'discreto';
} else if (i >= 20 && i <= 24) {
  voto = 'buono';
} else if (i >= 25 && i <= 28) {
  voto = 'distinto';
} else if (i >= 29 && i <= 32) {
  voto = 'ottimo';
}
console.log(`${i}: ${voto}`);
}

//ESERCIZIO 7
function mostraDicituraVoto(voto){
if (typeof voto !== 'number') {
    console.log('Errore: Il voto deve essere un numero.');
    return;
}

if (voto < 0 || voto > 32) {
    console.log('Errore: Il voto deve essere compreso tra 0 e 32.');
    return;
}

let dicitura;
if (voto >= 0 && voto <= 16) {
    dicitura = 'insufficiente';
} else if (voto >= 17 && voto <= 19) {
dicitura = 'discreto';
} else if (voto >= 20 && voto <= 24) {
dicitura = 'buono';
} else if (voto >= 25 && voto <= 28) {
dicitura = 'distinto';
} else if (voto >= 29 && voto <= 32) {
dicitura = 'ottimo';
}
console.log(`${voto}: ${dicitura}`);
}
console.log(mostraDicituraVoto(20));
console.log(mostraDicituraVoto(200));
console.log(mostraDicituraVoto('A'));

function mostraRangeVoti(dicitura){
dicitura = dicitura.toLowerCase();

let range;
if (dicitura === 'insufficiente') {
    range = '0 - 16 --> Range: 16';
} else if (dicitura === 'discreto') {
    range = '17 - 19 --> Range: 2';
} else if (dicitura === 'buono') {
    range = '20 - 24 --> Range: 4';
} else if (dicitura === 'distinto') {
    range = '25 - 28 --> Range: 3';
} else if (dicitura === 'ottimo') {
    range = '29 - 32 --> Range: 3';
} else {
    console.log('Errore: Dicitura non valida.');
    return;
}
console.log(`${dicitura}: ${range}`);
}

mostraRangeVoti('discreto');
mostraRangeVoti('Eccellente');