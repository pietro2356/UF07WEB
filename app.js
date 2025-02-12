function es1(){
    
    let nome = "Valerio" 
    let cognome = "Gravili" 
    let matricola=11
    console.log(nome + ", " + cognome + ", "+matricola);
    console.log("Sono " +nome + " " + cognome + " e la mia matricola è  "+matricola);


}
function es2(){
    
    let nome = "Gravili" ;
    let cognome = "Valerio"; 
    console.log(nome + ", " + cognome );
    let scambio = cognome;
    cognome =nome;
    nome = scambio;
    console.log(nome + "," + cognome );
    //senza contenitore
    nome = "Gravili" ;
    cognome = "Valerio"; 
    console.log(nome + "," + cognome );
    nome= nome +"," +  cognome
    cognome = nome.split(",")[0];
    nome =nome.split(",")[1];
    console.log(nome + "," + cognome );
}
function es3(){
    let matricola=238734;
    matricola = matricola.toString();

    if(typeof matricola ==='string'){
        console.log("è una stringa")
    }else{
        console.log("non è una stringa")
    }
    matricola =parseInt(matricola);
    if(Number.isInteger(matricola)){
        console.log("è un intero")
    }else{
        console.log("non è un intero")
    }
}
function es4(){
    let punteggio=0;
    punteggio+=13;
    punteggio-=4;
    punteggio/=2;
    punteggio**=2;
    console.log(punteggio)
    if(punteggio>314){
        console.log("ottimo punteggio");
    }else{
        console.log("buon punteggio");
    }
}
function es6(){
    let voti="";
    let j=0;
    let sufficienza=18;
    for(i=0;i<33; i++){
        voti+=i+",";
    }
    console.log(voti);
    voti="";
    while(j<33){
       
        voti+=j+",";
        j++;
    }
    console.log(voti);
    voti="";
    for(i=0;i<33; i++){
        if(i>=sufficienza){
            voti+=i+",";
        }
        if(i==31||i==32){
            voti+="30L,";
        }
        
    }
    console.log(voti);
    voti="";
    for(i=0;i<33; i++){
        es7(i);
    }


}
function es7(num){
    if(Number.isInteger(num)&&num>0&&num<33){
        if(num<17){
            console.log(num+":INSUF");
        }else if(num<20&&num>17){
            console.log(num+":DISCRETO");
        }else if(num<25&&num>20){
            console.log(num+":BUONO");
        }else if(num<29&&num>25){
            console.log(num+":DISTINTO");
        }else if(num<33&&num>29){
            console.log(num+":OTTIMO");
        }
        
    }

}
function es8(dicitura){
    let risposta = "";
   if(dicitura=="INSUFF"){
    risposta=dicitura+""+ "0 - " + "16";
   }else if(dicitura=="DISCRETO"){
    risposta=dicitura+""+ "17 - " + "19";
   }else if(dicitura=="BUONO"){
    risposta=dicitura+""+ "20 - " + "24";
   }else if(dicitura=="DISTINTO"){
    risposta=dicitura+""+ "25 - " + "28";
   }else if(dicitura=="OTTIMO"){
    risposta=dicitura+""+ "29 - " + "32";
   }
   return risposta;
}
