//Stampa in sequenza di 3 variabili
function stampa1(nome,cognome,matricola){
    console.log(nome);
    console.log(cognome);
    console.log(matricola);
}

//stampare conatenata di 3 variabili
function stampa2(nome,cognome,matricola){
    console.log("Sono " + nome, cognome + " e la mia matricola è: " + matricola);
}

//inversione di 2 variabili con variabile temporanea
function inverti1(nome,cognome){
    let tmp = nome;
    nomeInv = cognome;
    cognomeInv = tmp;

    console.log("Variabile nome inverita: " + nomeInv);
    console.log("Variabile cognome invertita: " + cognomeInv);
}

//inversione di 2 variabili senza variabile temporanea
function inverti2(nome, cognome) {
    [nome, cognome] = [cognome, nome];

    console.log("Variabile nome inverita: " + nome);
    console.log("Variabile cognome invertita: " + cognome);
}

//da numero a stringa
function numeroInStringa(numero){
    numero = numero.toString();
    if (typeof numero === 'string') {
        console.log("Il numero è stato convertito in stringa: " + numero + " è una " + typeof numero);
    }else{
        console.log("Errore");
    }
}


//da stringa a numero
function stringaInNumero(stringa){
    stringa = parseInt(stringa);
    if (typeof stringa === 'number') {
        console.log("La stringa è stata convertita in numero: " + stringa + " è un " + typeof stringa);
    }else{
        console.log("Errore");
    }
}

var punti = 0;

//operazioni con punteggio
function operazioniPunteggio(punteggio){
    punteggio += 13;
    console.log("Punteggio: " + punteggio);
    punteggio -= 4;
    console.log("Punteggio: " + punteggio);
    punteggio *= 4;
    console.log("Punteggio: " + punteggio);
    punteggio /= 2;
    console.log("Punteggio: " + punteggio);
    punteggio **= 3;
    console.log("Punteggio: " + punteggio);
    punti = punteggio;
}

//valutazione punteggio
function valutaPunteggio(){
    if (punti > 314) {
        console.log("Ottimo Punteggio");
    }else{
        console.log("Buon Punteggio");
    }
}

//stampa AFP
function stampaAFP1(){
    let afp = "AFP: ";
    for (let i = 0; i < 33; i++) {
        if (i === 32) {
            afp += "30L.";
        }else if(i===31){
            afp += "30L, ";
        }else{
            afp += i + ", ";
        }
    }
    console.log(afp);
}

//stampa AFP ma con il while
function stampaAFP2(){
    let afp = "AFP: ";
    let i = 0;
    while (i < 33) {
        if (i === 32) {
            afp += "30L.";
        }else if(i===31){
            afp += "30L, ";
        }else{
            afp += i + ", ";
        }
        i++;
    }
    console.log(afp);
}

const SUFFICIENZA = 18;

//stampa AFP sufficienti
function stampaAFPSuff1(){
    let afp = "AFP sufficienti: ";
    for (let i = SUFFICIENZA; i < 33; i++) {
        if (i === 32) {
            afp += "30L.";
        }else if(i===31){
            afp += "30L, ";
        }else{
            afp += i + ", ";
        }
    }
    console.log(afp);
}

//stampa AFP sufficientima con il while
function stampaAFPSuff2(){
    let afp = "AFP sufficienti: ";
    let i = 0;
    while (i < 33) {
        if (i >= SUFFICIENZA) {
            if (i === 32) {
                afp += "30L.";
            }else if(i===31){
                afp += "30L, ";
            }else{
                afp += i + ", ";
            }
        }
        i++;
    }
    console.log(afp);
}