// scrivi un programma che stampi in console i numeri da 1 a 100
// Successivamente aggiungi un controllo sul numero in modo tale che:
// 1. per i multipli di 3 stampi “Fizz” al posto del numero
// 2. per i multipli di 5 stampi “Buzz” al posto del numero.
// 3. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// 4. in tutti gli altri casi venga stampato il numero stesso


//stampa numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { //FIZZBUZZ multipli sia di 3 che di 5
        console.log("FizzBuzz");
    } else if (i % 3 === 0) { //FIZZ multipli solo di 3
        console.log("Fizz");
    } else if (i % 5 === 0) { //BUZZ multipli solo di 5
        console.log("Buzz");
    } else {
        console.log(i); //tutti gli altri numeri
    }
}