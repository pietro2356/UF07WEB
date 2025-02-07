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