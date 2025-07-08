/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const countVowels = (string) => {
  let vowels = [];
  for (let i = 0; i < string.length; i++) {
    if ('aeiou'.includes(string[i].toLowerCase())) {
      vowels.push(string[i].toLowerCase());
    }
  }
  return `${vowels.length}, (${vowels.join(', ')})`;
}

/* 
-----Funzione con nome-----
function countVowels(string) {
let vowels = [];
  for (let i = 0; i < string.length; i++) {
    if ('aeiou'.includes(string[i].toLowerCase())) {
      vowels.push(string[i].toLowerCase());
    }
  }
  return `${vowels.length}, (${vowels.join(', ')})`;
}
*/

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)