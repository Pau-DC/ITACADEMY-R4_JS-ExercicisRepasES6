////////// MAIN FUNCTIONS //////////
/////* ANUNCIAT EXERCICI 4 */////
/*
Crear una funció que accepti un string i retornada aquest string revertit. 
Nota: Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()
*/

// SOL·LUCIÓ DE L'EXERCICI
const revString = (longStr) => {
  let words = longStr.split(" ");
  words.reverse();
  let arrToReturn = [...words];
  return arrToReturn.join(' ');
}

const testFunc = (string) => {
  console.log(revString(string));
}

