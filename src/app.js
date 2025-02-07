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