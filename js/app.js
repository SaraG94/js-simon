console.log('ciao');

//mostra all'utente numeri random
alert ('Memorizza questi numeri'+ ' ' + randomNumbs());

// timer di 30 secondi

let counter = 30

let clock = setInterval(onInterval, 1000)

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

function onInterval() {
    counter--

    console.log(counter)

    if (counter === 0) {
        //interrompere
        clearInterval(clock)
        
    }
}




//l’utente inserisce, uno alla volta, i numeri, tramite il prompt()
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali numeri sono stati individuati tramite console.log




