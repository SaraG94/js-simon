const numbers = randomNumbs();

let askNumb = [];

const winNumb =[];
//mostra all'utente numeri random
alert ('Memorizza questi numeri'+ ' ' + numbers +' '+'Chiuso questo avviso dopo 30 secondi potrai inserirli ');


//intervallo di 30 secondi
setTimeout(function (){

    while (askNumb.length < 5){
        let userNumbAsk = parseInt(prompt('inserisci uno numero dei precedenti')) ;

        if(numbers.includes(userNumbAsk) && !askNumb.includes(userNumbAsk) ){
            console.log('Hai indovinato');
    
            winNumb.push(userNumbAsk);
        }

        askNumb.push(userNumbAsk);
        console.log(userNumbAsk);
    }
    

    console.log(`Hai indovinato ${winNumb.length} numeri.I numeri che hai invodinato sono ${winNumb.join(', ' )}`);
} ,30000); 

//numero random da memorizzare
function randomNumbs(){
   let numbers = [];

   for(let i = 0; i < 5; i++){
        let numbMemo = Math.floor(Math.random() * 100) + 1;
        console.log(numbMemo);

        numbers.push(numbMemo);
    }

    console.log(numbers);

    return numbers;
}

//l’utente inserisce, uno alla volta, i numeri, tramite il prompt()

