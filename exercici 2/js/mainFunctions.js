////////// MAIN FUNCTIONS //////////
/////* ANUNCIAT EXERCICI 2 */////
/*
Arregla l'error del següent bloc de codi:


users.map(function (user) {
   user.firstName;
});

var users = 
[{ firstName: 'Homer', lastName: 'Simpson' },
{ firstName: 'Marge', lastName: 'Simpson' },
{ firstName: 'Bart', lastName: 'Simpson' },
{ firstName: 'Lisa', lastName: 'Simpson' },
{ firstName: 'Maggie', lastName: 'Simpson' }];

*/

// SOL·LUCIÓ DE L'EXERCICI
var users = 
[{ firstName: 'Homer', lastName: 'Simpson' },
{ firstName: 'Marge', lastName: 'Simpson' },
{ firstName: 'Bart', lastName: 'Simpson' },
{ firstName: 'Lisa', lastName: 'Simpson' },
{ firstName: 'Maggie', lastName: 'Simpson' }];

var users_names = users.map( (user) => user.firstName );
