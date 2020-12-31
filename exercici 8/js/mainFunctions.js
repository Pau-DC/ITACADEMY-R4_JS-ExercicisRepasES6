////////// MAIN FUNCTIONS //////////
/////* ANUNCIAT EXERCICI 8 */////
/*
Modificar l'exercici anterior perquè els números s'introdueixin a través d'un formulari (amb validacions), 
i que la taula de multiplicar la mostri en una taula HTML
*/

// SOL·LUCIÓ DE L'EXERCICI
class Taula {
   constructor(num1, num2){
      this.num1 = num1;      
      this.num2 = num2;      
   }
}

class UI {
   showTaula(taula){
      const tCanvas = document.getElementById('taula-canvas');
      const element = document.createElement('div');
      let htmlTaula = '';
      for(let i=1; i<=taula.num2; i++){
         htmlTaula += `${taula.num1} X ${i} = ${taula.num1 * i}<br/>`
      }
      
      element.innerHTML = `
      <div class="card text-center mb-4">
         <div class="card-body">
            ${htmlTaula}
         </div>
      </div>
      `;
      tCanvas.innerHTML = '';
      tCanvas.appendChild(element);
   }
}

//DOM Events
document.getElementById('numbers-form')
   .addEventListener('submit', function(e){
      const n1 = document.getElementById('num1').value ;
      const n2 = document.getElementById('num2').value ;
      const t = new Taula(n1, n2);

      const ui = new UI();

      ui.showTaula(t);

      e.preventDefault();
   });