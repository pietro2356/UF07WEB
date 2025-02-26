let obj = {
    nome: 'Pietro',
    cognome: 'Rocchio',
    eta: 24,
    dataNascita: new Date('2001-01-19'),
    lavoro: [1,3,3],
    costructor: () => () => () => () => {},
    telefono: []
};

Object.freeze(obj);

function getAnnoNascita(data) {
    return data.getFullYear();
}

obj.getData = "getAnnoNascita";

console.log("ANNO: ",obj.getData(obj.dataNascita));


obj.residenza = {
    citta: 'Trento',
    cap: 38100,
    comune: 'Cognola'
};

console.log(obj);
console.log(obj);

let prop = Object.keys(obj);
console.log(prop);

console.log(typeof obj[prop[5]]);

// let objPropType = {};

// prop.forEach(p => {
//     console.log("La prop " + p + " è di tipo: " + typeof obj[p]);

//     if(Array.isArray(obj[p])){
//         objPropType[p] = "Array";
//     }else{
//         objPropType[p] = typeof obj[p];
//     }
// });

// console.log(objPropType);

