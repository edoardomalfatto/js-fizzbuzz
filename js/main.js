// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero 
//e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// 
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

//se il numero è divisibile per 5 e tre allora scrivi frizzbuz, 
//se è divisibile per 5 scrivi buzz,se divisibile per tre scrivi frizz

for (i=0; i<100 ; i++) {
    var numeroAumentato = i+1;

    if (numeroAumentato % 5 == 0 && numeroAumentato % 3 == 0) {
        numeroAumentato=("FizzBuzz");   
        document.getElementById("ancora").innerHTML = document.getElementById("ancora").innerHTML + "<li>" + numeroAumentato + "</li>";
 
    } else if (numeroAumentato % 5 == 0) {
        numeroAumentato=("Buzz");
        document.getElementById("ancora").innerHTML = document.getElementById("ancora").innerHTML + "<li>" + numeroAumentato + "</li>";

    }else if (numeroAumentato % 3 == 0) {
        numeroAumentato=("Fizz"); 
        document.getElementById("ancora").innerHTML = document.getElementById("ancora").innerHTML + "<li>" + numeroAumentato + "</li>";

    }else if (numeroAumentato % 5 != 0 || numeroAumentato % 3 != 0){
        document.getElementById("ancora").innerHTML = document.getElementById("ancora").innerHTML + "<li>" + numeroAumentato + "</li>";
    }     
};


