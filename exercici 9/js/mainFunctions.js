////////// MAIN FUNCTIONS //////////
/////* ANUNCIAT EXERCICI 9 */////
/*
Aquest exercici tracta de crear un cercador. Donada una llista de noms, 
a l'introduir un nom al cercador només s'han de mostrar aquells que coincideixin.
Seria desitjable que vagi filtrant conforme es va omplint el nom. 
També tenir en compte maquetar la solució final perquè tingui bon aspecte.

Code snippet:

<input type="text" id="myInput" onkeyup="filterNames()" placeholder="Buscar nom.." title="Buscar nom">

<ul id="myUL">
  <li><a href="#">Albert</a></li>
  <li><a href="#">Ismael</a></li>
  <li><a href="#">Luis</a></li>
  <li><a href="#">Rubén</a></li>
  <li><a href="#">Jonatan</a></li>
  <li><a href="#">Jake</a></li>
  <li><a href="#">Jose</a></li>
</ul>
*/

// SOL·LUCIÓ DE L'EXERCICI
class Nom{
   constructor(nom, sexe, freq, rank, pos){
      this.nom = nom;
      this.sexe = sexe;
      this.freq = freq;
      this.rank = rank;
      this.pos = pos;
   }
}

class LlistaNoms {
   // Constructor de la classe LlistaNoms.
   // En cas de no afegir cap nom en crear-lo inicialitzar-ho amb un un array buit
   constructor(noms = []){
      this.noms = noms;
      this.printedNoms = noms;
   }

   // 
   addNoms(noms){
      if(noms.isArray){
         for(let nom of noms){
            this.noms.push(nom);
            }
         }else{
            this.noms.push(noms);
      }
   }

   // Funció que compara les lletres introduïdes al camp de búsqueda. 
   // Per fer una bona comparació ignorem els accents tant del camp de búsqueda com dels valors guardats.
   filterLlistaStartsWith() {
      let startsWithFiltre = document.getElementById('starts-with-filtre').value;
      startsWithFiltre = startsWithFiltre.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      this.printedNoms = this.noms.filter( currNom => {
         let currNomNorm = currNom.nom.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
         return (currNomNorm.startsWith(startsWithFiltre) === true);
      });
   }
}

class UI {
   static async loadLlista(){
      try {
         let llista = new LlistaNoms();

         const data = await getData('./files/2019.txt');

         
         let allTextLines = data.split(/\r\n|\n/);

         for (let i=0; i<allTextLines.length-1; i++) {
            let data = allTextLines[i].split(/\t/);
            let auxValues = [];

            for (let j=0; j<=4; j++) {
               auxValues.push(data[j]);
            }
            let auxNom = new Nom(auxValues[0],auxValues[1],auxValues[2],auxValues[3],auxValues[4]);
            llista.addNoms(auxNom);
         }

         return llista;

      }catch(err){
         console.log(err);
         return false;
      } 
   }
   
   
   printLlista(llista){
      let noms = llista.printedNoms;

      const list = document.getElementById('noms-canvas');
      list.innerHTML = '';
      
      for(let n of noms){
         let trElement = document.createElement('tr');
         let thNomElement = document.createElement('th');
         let tdSexElement = document.createElement('td');
         let tdPosElement = document.createElement('td');
         let tdRankElement = document.createElement('td');
         thNomElement.innerHTML = n.nom;
         tdSexElement.innerHTML = n.sexe;
         tdPosElement.innerHTML = n.pos;
         tdRankElement.innerHTML = `${n.freq} (${n.rank}‰)`;
         trElement.appendChild(thNomElement);
         trElement.appendChild(tdSexElement);
         trElement.appendChild(tdPosElement);
         trElement.appendChild(tdRankElement);
         list.appendChild(trElement);
      }

      const contador = document.getElementById('num-registres');
      if(llista.printedNoms.length === 1){
         contador.innerHTML = `${llista.printedNoms.length} entrada`;
      }else{
         contador.innerHTML = `${llista.printedNoms.length} entrades`;
      }

   }
}

// GENERAL FUNCTIONS
function getData(ajaxurl){
   return $.ajax({
      type: "GET",
      url: ajaxurl,
      dataType: "text"
   });
}

// GLOBAL VARIABLES
const ui = new UI();
let llista = new LlistaNoms();



//DOM Events
window.addEventListener('load', function(event) {
   UI.loadLlista().then( (llistaLoaded) => {
      llista = llistaLoaded;
      ui.printLlista(llista);
   });
});

document.getElementById('starts-with-filtre')
.addEventListener('keyup', function(e){
   
   llista.filterLlistaStartsWith();
      
      ui.printLlista(llista);

      e.preventDefault();
   });