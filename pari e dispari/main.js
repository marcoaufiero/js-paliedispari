// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let inputChoice = prompt("Inserisci 'p' se vuoi scergliere pari o 'd' se vuoi scegliere dispari");
let userChoice;


if(inputChoice == 'p'){
    userChoice = 'even';
    console.log('Hai scelto pari')
}else if(inputChoice == 'd'){
    userChoice = 'odd';
    console.log('Hai scelto dispari')
}else{
    console.log('Scelta non valida')
}

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(`Il tuo numero è : ${userNumber}`);

function cpuNumberGenerator(min,max){

    return parseInt(Math.floor(Math.random() * (max - min + 1) + min));
};

let cpuNumber = cpuNumberGenerator(1,5)
console.log(`Il numero della cpu è: ${cpuNumber}`);

let sum = userNumber + cpuNumber;
console.log(`La somma dei numeri è ${sum}`);

function evenOdd(x){

    if(x % 2 == 0){
        return 'even';
    }else{
        return 'odd';
    }
}

if(evenOdd(sum) == 'even' && userChoice == 'even'){
    console.log(`Hai vinto!`)
}else if(evenOdd(sum) == 'odd' && userChoice == 'odd'){
    console.log('Hai vinto!')
}else{
    console.log('Hai perso')
}