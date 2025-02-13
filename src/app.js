let nome = "Mittemperher ";
let cognome = "Daniel ";
let matricola = "238734 ";
let punteggio = 0;
const sufficienza = 18;

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
console.log("Punteggio addizione = " + punteggio);
punteggio -= 4;
console.log("Punteggio sottrazione = " + punteggio);
punteggio *= 4;
console.log("Punteggio moltiplicato = " + punteggio);
punteggio /= 2;
console.log("Punteggio diviso = " + punteggio);
punteggio **= 2;
console.log("Punteggio alla terza = " + punteggio);

//Esercizio 5 
if (punteggio > 314) {
    console.log("Ottimo punteggio");
} else {
    console.log("Buon punteggio");
}

//Esercizio 6
//ciclo for
function Esercizio6For(){
    console.log("Ciclo for:");
        for (let i = 0; i <= 32; i++) {
            if (i > sufficienza) {
                if (i >= 31) {
                    console.log("30L");
                } else {
                    console.log(i);
                }
            }
        }
    }

//ciclo while
function Esercizio6While(){
    console.log("Ciclo while:");
    let i = sufficienza + 1;
    while (i <= 32) {
        console.log(i);
        i++;
    }
}

//Esercizio 6 pt.2
//ciclo for
function Esercizio6For2(){
    console.log("Ciclo for:");
        for (let i = 0; i <= 32; i++) {
                if (i > 0 && i <= 16) {
                    console.log("INSUFFICENTE")  
                }   
                else if (i >= 17 && i <= 19) {
                    console.log("Discreto")  
                } 
                else if (i >= 20 && i <= 24) {
                    console.log("Buono")  
                } 
                else if (i >= 25 && i <= 28) {
                    console.log("Distinto")  
                } 
                else if (i >= 29 && i <= 32) {
                    console.log("Ottimo")  
                }
     }              
}

//Esercizio 6 pt.2
//ciclo while
function Esercizio6While2() {
    console.log("Ciclo while:");
    let i = 1;
    while (i <= 32) {
        if (i > 0 && i <= 16) {
            console.log("INSUFFICENTE")  
        }   
        else if (i >= 17 && i <= 19) {
            console.log("Discreto")  
        } 
        else if (i >= 20 && i <= 24) {
            console.log("Buono")  
        } 
        else if (i >= 25 && i <= 28) {
            console.log("Distinto")  
        } 
        else if (i >= 29 && i <= 32) {
            console.log("Ottimo")  
        }
        i++;
    }
}

