let nome = "Mittemperher ";
let cognome = "Daniel ";
let matricola = "238734 ";
let punteggio = 0;

//Esercizio 2
[nome, cognome] = [cognome, nome];
console.log("Sono " + nome + cognome + "e la mia matricola: " + matricola);

//Esercizio 3
let matricolaStringa = String(matricola);  
console.log(typeof matricolaStringa);  

let matricolaNumero = Number(matricolaStringa); 
console.log(typeof matricolaNumero); 

//Esercizio 4
console.log("Punteggio di partenza = " + punteggio);
punteggio += 13;
console.log("Punteggio = " + punteggio);
punteggio -= 4;
console.log("Punteggio sottrazione = " + punteggio);
punteggio *= 3;
console.log("Punteggio moltiplicato = " + punteggio);
punteggio /= 2;
console.log("Punteggio diviso = " + punteggio);
punteggio **= 2;
console.log("Punteggio alla terza = " + punteggio);

//esercizio 5 
if (punteggio > 314) {
    console.log("Ottimo punteggio");
} else {
    console.log("Buon punteggio");
}

