console.log('ciao');

//mostra all'utente numeri random
alert ('Memorizza questi numeri'+ ' ' + numeriRandom());

//numero random da memorizzare
function numeriRandom(){
   let numeri = [];

   for(let i = 0; i < 5; i++){
        let numbMemo = Math.floor(Math.random() * 100) + 1;
        console.log(numbMemo);

        numeri.push(numbMemo);
    }

    console.log(numeri);

    return numeri;
}



