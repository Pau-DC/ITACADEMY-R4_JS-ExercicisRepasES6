////////// MAIN FUNCTIONS //////////
/////* ANUNCIAT EXERCICI 7 */////
/*
Realitzar un programa en ES6, amb al menys una funció.
Aquest programa demana a l'usuari dos nombres de l'1 a l'10 (con promp es suficient). 
Un cop introduïts, es mostra per consola la taula de multiplicar del número 1 que va fins al número 2.

Per exemple, si l'usuari introdueix 3 i 5:

3 X 1 = 3
3 X 2 = 6
3 X 3 = 9
3 X 4 = 12
3 X 5 = 15
*/

// SOL·LUCIÓ DE L'EXERCICI
function addNumber (){
   let chosenNumber = window.prompt("Escull un número de l'1 al 10");
   if((chosenNumber>10)||isNaN(chosenNumber)){
      alert("Número incorrecte o superior a 10. Fi de l'opreació");
      return false;
   } 
      
   return chosenNumber;
}

function showTaula(n1, n2){
   for(let i=1;i<=n2;i++){
      console.log(`${n1} X ${i} = ${n1*i}`);
   }
}

let n1 = addNumber();
let n2 = addNumber();

showTaula(n1, n2);
