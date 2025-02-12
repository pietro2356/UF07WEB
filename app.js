let nome = "Mittemperher ";
let cognome = "Daniel ";
let matricola = "238734 ";
[nome, cognome] = [cognome, nome];

let matricolaStringa = String(matricola);  
console.log(typeof matricolaStringa);  

let matricolaNumero = Number(matricolaStringa); 
console.log(typeof matricolaNumero); 


console.log("Sono " + nome + cognome + "e la mia matricola: " + matricola);