// Esercizi 1, 2 e 3 
let nome="Angela";
let cognome="Trentin";
let matricola=238734;

let matricolaStringa=matricola.toString();
matricolaStringa=Number(matricolaStringa);

[nome,cognome]=[cognome,nome];
console.log(`Sono ${nome} ${cognome} e la mia matricola è: ${matricola}`);
console.log(typeof matricola);
console.log(typeof matricolaStringa);

// Esercizio 4 e 5
let punteggio=0;

let ris1=punteggio+13
console.log(punteggio+13);
if (ris1 >314){
    console.log("Ottimo punteggio");
}else{
    console.log("Buon punteggio");
}

let ris2=ris1-4;
console.log(punteggio+13-4);
if (ris2 >314){
    console.log("Ottimo punteggio");
}else{
    console.log("Buon punteggio");
}

let ris3=ris2*4;
console.log(punteggio+(13-4)*4);
if (ris3 >314){
    console.log("Ottimo punteggio");
}else{
    console.log("Buon punteggio");
}

let ris4=ris3/2;
console.log(punteggio+(13-4)*4/2);
if (ris4 >314){
    console.log("Ottimo punteggio");
}else{
    console.log("Buon punteggio");
}

let ris5=ris4**2;
console.log(punteggio+((13-4)*4/2)**2);
if (ris5 >314){
    console.log("Ottimo punteggio");
}else{
    console.log("Buon punteggio");
}


// Esercizio 6
let insuf = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let discreto = [17, 18, 19];
let buono = [20, 21, 22, 23, 24];
let distinto = [25, 26, 27, 28];
let ottimo = [29, 30, 31, 32];
let votoMin = 0;
let votoMax = 32;

/**
 * Stampa i voti e la relativa valutazione
 * @param {number} votoMin 
 * @param {number} votoMax 
 */
function stampaVoti(votoMin, votoMax) {
    for (let i = votoMin; i <= votoMax; i++) {
        if (insuf.includes(i)) {
            console.log(`${i}: INSUF`);
        } else if (discreto.includes(i)) {
            console.log(`${i}: DISCRETO`);
        } else if (buono.includes(i)) {
            console.log(`${i}: BUONO`);
        } else if (distinto.includes(i)) {
            console.log(`${i}: DISTINTO`);
        } else if (ottimo.includes(i)) {
            console.log(`${i}: OTTIMO`);
        }
    }
}

stampaVoti(votoMin, votoMax);
