let nome="Angela";
let cognome="Trentin";
let matricola=238734;

let matricolaStringa=matricola.toString();
matricolaStringa=Number(matricolaStringa);

[nome,cognome]=[cognome,nome];
console.log(`Sono ${nome} ${cognome} e la mia matricola è: ${matricola}`);
console.log(typeof matricola);
console.log(typeof matricolaStringa);

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

