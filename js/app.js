console.log('ciao');

//mostra all'utente numeri random
alert ('Memorizza questi numeri'+ ' ' + randomNumbs());

//intervallo di 30 secondi
setTimeout(function(){

    //l’utente inserisce, uno alla volta, i numeri, tramite il prompt()
    let userNumb = []

    while (userNumb.length < 5){
        let userNumbAsk = prompt('inserisci uno numero dei precedenti');
        console.log(userNumbAsk);

        userNumb.push(userNumbAsk);
        console.log(userNumb)
    }
    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali numeri sono stati individuati tramite console.log

},3000); 

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