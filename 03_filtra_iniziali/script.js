/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const filterNamesByInitial = (array, letter) => {
  const result = [];  
  for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().startsWith(letter.toLowerCase())) {
            result.push(array[i]);    
        }
  }
  return result;
};

/*
-----Funzione con nome-----
function filterNamesByInitial(array, letter) {
const result = [];  
  for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().startsWith(letter.toLowerCase())) {
            result.push(array[i]);    
        }
  }
  return result;
}
*/ 

// Invoca la funzione qui e stampa il risultato in console
console.log(filterNamesByInitial(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]