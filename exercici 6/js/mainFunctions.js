////////// MAIN FUNCTIONS //////////
/////* ANUNCIAT EXERCICI 6 */////
/*
Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 

- Usar .forEach() per obtenir aquest array.

- Usar .map() per obtenir aquest array.

var tasks = [
{
   'name' : 'Start React web',
   'duration' : 120
},
{
   'name' : 'Work out',
   'duration' : 60
},
{
   'name' : 'Procrastinate on facebook',
   'duration' : 240
}
];
*/

// SOL·LUCIÓ DE L'EXERCICI
var tasks = [
  {
     'name' : 'Start React web',
     'duration' : 120
  },
  {
     'name' : 'Work out',
     'duration' : 60
  },
  {
     'name' : 'Procrastinate on facebook',
     'duration' : 240
  }
];

let taskNames1 = [];
tasks.forEach( element => {
  taskNames1.push(element.name);
});
console.log(taskNames1);

let taskNames2 = tasks.map( task => task.name);
console.log(taskNames2);


// EXERCICI EXTRA
let totalDuration = tasks.reduce( (accum, curr) => {
  return accum += curr.duration
}, 0);
console.log(totalDuration);