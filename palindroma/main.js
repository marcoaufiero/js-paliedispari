// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let userWord = prompt('Inserisci una parola');
let reverseWord = '';

function palindrome(userWord){
    
    for( let i = userWord.length - 1; i >= 0 ; i--){
        reverseWord += userWord[i];
    };

    if(reverseWord == userWord){
        return true;
    }else{
        return false;
    }

}

if(palindrome(userWord)){
    alert('La parola è palindroma')
}else{
    alert('La parola non è palindroma')
}