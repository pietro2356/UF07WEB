// pre creare un oggetto si usa la dicitura parentesi graffe
let obj = {
    nome: 'Nicola',
    cognome: 'Prete',
    eta: 24,
    dataNascita: new Date ('2001-05-10')
};

console.log(typeof obj);
console.log(obj);

console.log(obj.dataNascita.toLocaleDateString());

obj.residenza = {
    città: 'Trento',
    cap: 38121,
    comune: 'Trento',
}

obj['lavoro'] = 'GPI';

obj.calcoloEta = () => {console.log("Sono una funzione")};

console.dir(obj); // funzione per stampare oggetti dentro oggetti in maniera carina

obj.calcoloEta();


console.dir("residenza: " , obj['residenza']);
console.dir("città: " , obj['residenza']['città'].toLowerCase());


