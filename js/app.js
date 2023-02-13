console.log('ciao');

//mostra all'utente numeri random
alert ('Memorizza questi numeri'+ ' ' + randomNumbs());

//intervallo di 30 secondi
setTimeout(userNumb,3000); 

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
function userNumb (numbers){
    
    let askNumb = []

    while (askNumb.length < 5){
    let userNumbAsk = prompt('inserisci uno numero dei precedenti');
    console.log(userNumbAsk);

    askNumb.push(parseInt(userNumbAsk));
    console.log(askNumb);
    }
    
    let check = askNumb.includes(numbers);

    for (let i = 0; i < numbers.length; i++){
        if(check === true);
        console.log('ricordato');
    }

    return askNumb;
}
