 /*ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

I principali datatype sono:

- Stringa: si utilizza quando dobbiamo dobbimo inserire un determinata parola, come un nome ad esempio, e la racchiudiamo tra delle virgolette o degli apici.

-Numerico: qui invece troviamo come dice la parola stessa dei numeri, questi possono essere sia numeri interi che decimali, cioè con la virgola.
Questi numeri non devono essere chiusi tra le virgolette, senno anche loro diventaranno delle stringhe-

-Booleano: questo particolare tipo di dato ammette solo due esiti: true o false.
Queste risposte ci vengono date quando tramite il codice facciamo delle domande mirate per avere delle informazioni utili.

-Undefined: il significato di questa parole inglesle è indefinito. Questa parola la troviamo quando un nostro contenitore non ha ricevuto un valore.

-Null: a differenza di undefined, null, la inseriamo noi di nostra spontanea volontà quando ancora non abbiamo deciso cosa assegnare ad un valore, come ad esempio un numero. */


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa. */

 let name = "alessandro";

 
 /*ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.*/

 let num1 = 12;
 let num2 = 20;
 let num3 = num1 + num2;
console.log(num3)

 /* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.*/

 let x = 12


 /* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

let name = "alessandro";;

name = "gallina";;

const name = "alessandro";

name = "gallina";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let num4 = 4;

console.log(num4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"

console.logo(name1 === name2)
