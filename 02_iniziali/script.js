/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const getInitials = (namesArray) => {
  const initials = [];
  for (let i = 0; i < namesArray.length; i++) {
    initials.push(namesArray[i][0].toUpperCase());
  }
  return initials;
};

//-----Funzione con nome-----

/*
function getInitials(namesArray) {
const initials = [];
  for (let i = 0; i < namesArray.length; i++) {
    initials.push(namesArray[i][0].toUpperCase());
  }
  return initials;
};
*/

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]