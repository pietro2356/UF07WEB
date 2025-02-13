let nome = "Federico";
let eta = 22;

//primo metodo per creare una funzione
function somma(val1,val2){
    return val1 + val2;
}
function sottrai(val1,val2){
    return val1 - val2;
}
let res = somma(2, 4);
console.log("Risultato", res);

res = sottrai(2, 4);
console.log("Risultato", res);

//secondo metodo per creare una funzione
const moltiplica = (val1,val2) => {
    return val1*val2;
}
res = moltiplica(2,4);
console.log("risultato", res);


const conta = (start =0, end = 3) => {
    console.log("start:",start);
    console.log("end:",end);

    for(let i = 0; i<=start; i++){
        console.log(i);
    }
console.log("----");

let count=start;
while (count<=end){
    console.log(count);
    count++;
}
}
conta(2,4);


    /* true&&false
if(4=="4" && (typeof $ == typeof "4")){

}else{


}*/
