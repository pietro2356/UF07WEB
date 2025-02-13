let nome = "Pietro";
let eta = 19;

//Primo metodo per creare una funzione
function somma(val1, val2){
    return val1 + val2;
}

let result = somma(2, 4);
console.log("Risultato: ", result);


function sottrai(val1, val2){
    return val1 - val2;
}

result = sottrai(2, 4);
console.log("Risultato: ", result);

//Secondo metodo per creare una funzione
const moltiplica = (val1, val2) => {
    return val1*val2;
}

result = moltiplica(2, 4);
console.log("risultato ", result);


//Cicli For e While 
const conta = (end = 3, start = 0) => {
    console.log("Start: ", start);
    console.log("End: ", end);

    for(let i = start; i <= end; i++){
        console.log(i);
    }

    console.log("------");

    let count = start;
    while (count <= end ){
        console.log(count);
        count++;
    }
}
conta(2, 3);






/*true && false
if(4 == "4" && (typeof 4 == typeof "4")){

}else{

}*/