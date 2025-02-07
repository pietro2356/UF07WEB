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

//constanti perché sono globali e non cambiano
const VOTI = [0, 1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ,22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
const DICITURE = ["Insufficiente", "Discreto", "Buono", "Distinto", "Ottimo",];

//stampa relazione voti e diciture
function votiDiciture(){
    for (let i = 0; i < VOTI.length; i++) {
        switch (true) {
            case VOTI[i] < 17:
                console.log(VOTI[i] + ": " + DICITURE[0]);
                break;
            case VOTI[i] < 20:
                console.log(VOTI[i] + ": " + DICITURE[1]);
                break; 
            case VOTI[i] < 25:
                console.log(VOTI[i] + ": " + DICITURE[2]);
                break;
            case VOTI[i] < 29:
                console.log(VOTI[i] + ": " + DICITURE[3]);
                break;
            case VOTI[i] < 33:
                console.log(VOTI[i] + ": " + DICITURE[4]);
                break;
        }
    }
}


//funzione che restituisce la dicitura del voto inserito come parametro
function votoDicitura(){
    let messaggio = "";
    voto = document.forms["votoParola"]["voto"].value;
    if (voto >= 0 && voto <= 32) {
        switch (true) {
            case voto < 17:
                messaggio = (DICITURE[0] + " (immagina fare così schifo)");
                break;
            case voto < 20:
                messaggio = (DICITURE[1] + " (c'mon man you can do better)");
                break; 
            case voto < 25:
                messaggio = (DICITURE[2] + " (buono come te *occhiolino occhiolino*)");
                break;
            case voto < 29:
                messaggio = (DICITURE[3] + " (AHAHAHAH per poco bravo scemo)");
                break;
            case voto < 33:
                messaggio = (DICITURE[4] + " (sei un genio guarda in console)");
                console.log("non è vero sappiamo tutti che hai copiato");
                break;
        }
    }else{
        messaggio = "See certo e tu credi che " + voto + " sia un voto valido??";
    }

    document.getElementById("dicitura").innerHTML = messaggio;
}

//data il voto in parola restituisce il range di voti
function dicituraRange(){
    dicitura = document.forms["rangeVoti"]["parola"].value;
    let range = "";
    switch (dicitura) {
        case DICITURE[0]:
            range = DICITURE[0] +": 0-16";
            break;
        case DICITURE[1]:
            range = DICITURE[1] +": 17-19";
            break;
        case DICITURE[2]:
            range = DICITURE[2] +": 20-24";
            break;
        case DICITURE[3]:
            range =DICITURE[3] +": 25-28";
            break;
        case DICITURE[4]:
            range =DICITURE[4] +": 29-32";
            break;
        default:
            range = "Dicitura non valida BABBOOOOO";
            break;
    }

    document.getElementById("range").innerHTML = range;
}