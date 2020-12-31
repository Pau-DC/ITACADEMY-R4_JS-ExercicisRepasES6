////////// MAIN FUNCTIONS //////////
/////* ANUNCIAT EXERCICI 5 */////
/*
Reemplaça en el següent bloc de codi la promesa per aync/await:

function b() {
   // ...
}
funtion a() {
   b().then() = > {
   doMoreWork();
   }
}
*/

// SOL·LUCIÓ DE L'EXERCICI
function b() {
  console.log("B is started");
  
  let p = new Promise( (resolve, reject) => {
    setTimeout( resolve , 1000);
  });
  
  return p;
}

function doMoreWork(){
  console.log("Doing more work");
}

async function a() {
  console.log("A is started");
  await b();
  doMoreWork();
}

a();

