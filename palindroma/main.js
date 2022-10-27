// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//Dichiaro le variabili della parola inserita dall'utente e della parola reverse

let userWord = prompt('Inserisci una parola');
let reverseWord = '';

//creo la funzione custom per verificare se la parola è palindroma

function palindrome(userWord){
    
    //utilizzo un ciclo for per ribaltare la parola inserita dall'utente

    for( let i = userWord.length - 1; i >= 0 ; i--){
        reverseWord += userWord[i];
    };

    //invio il risultato alla funzione a seconda dei casi

    if(reverseWord == userWord){
        return true;
    }else{
        return false;
    }

}

//invoco la funzione e riporto l'esito all'utente

if(palindrome(userWord)){
    alert('La parola è palindroma')
}else{
    alert('La parola non è palindroma')
}