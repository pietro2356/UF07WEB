let nome="Luca";
let eta = 20;

function somma(val1, val2){

    return val1+val2;
}
function sottrai(val1, val2){
    return val1-val2;
}


const moltiplica=(val1, val2) => {
    return val1*val2;
}


let res=somma(2, 4);
console.log("risultato + : ", res);

 res=sottrai(2, 4);
console.log("risultato - : ", res);

res= moltiplica (2, 4); 
console.log("risultato * :", res);

//let start= 3;
//let end = 0;

const conta =(start = 3, end = 0) =>{
    console.log("start : ", start);
    console.log("end : ", end);

    for(let start=i;i<=end;i++){
        console.log(i);
    }

    console.log("------------");

    let count = start;
    while(count <= end){
        console.log(count);
        count++;
    }
}
conta(2, 3)