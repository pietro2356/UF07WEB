let nome="Angela";
let cognome="Trentin";
let matricola=238734;

let matricolaStringa=matricola.toString();
matricolaStringa=Number(matricolaStringa);

[nome,cognome]=[cognome,nome];
console.log(`Sono ${nome} ${cognome} e la mia matricola è: ${matricola}`);
console.log(typeof matricola);
console.log(typeof matricolaStringa);
