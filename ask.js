
score = 0


function function1(callback) {
console.log('---------- BIENVENUE AU SUPERQUIZ ! ---------- ')

setTimeout(() => {
  callback()
}, 2000);

}
function rules(){
console.log('Voulez vous voir les règles ? ( Oui/Non) \n')

var prompt = require('prompt');

 prompt.start();

 prompt.get(['rep',], function (err, result) {

var expr = 'Papayas';
switch (result.rep) {
  case 'Oui':
  case 'oui':
    console.log('----- REGLES DU JEU ----- \n ');
    console.log('Nous allons vous poser une série de questions sur de la culture Générale.\nUne bonne réponse vous donne 1 point, une mauvaise vous enlèves 3 cheveux \nA la fin,votre scrore est affiché et vous pourrez aller frimer si vous avez été bon. \n ')
    console.log('Pour Répondre a une question, il vous suffit de taper la lettre qui correspond, vous allez voir c\'est pas compliqué !')
    console.log('LA partie commence dans 15 secondes ! \n')
    setTimeout(() => {
      function2()
    }, 15000);
    break;
  case 'Non':
  case 'non':
    console.log('Ok Gros. C\'est parti ! \n');
function2()
    break;
}
 });
}


function function2() {
  console.log('----------- QUESTION 1 ---------- \n')

  console.log('En quelle année  le TITANIC a-t-il sombré ?\n')
  console.log('A) 1912 \n')
  console.log('B) 1913 \n')
  console.log('C) 1914 \n')
  console.log('D) 1911 \n')

  var prompt = require('prompt');

   prompt.start();

   prompt.get(['rep',], function (err, result) {


  switch (result.rep) {
    case 'A':
      console.log(' Bien joué ! Vous gagnez 1 point ! \n ');
      score++
      console.log('Votre Score est maintenant de ' +score+ 'point.' )
      function3()
      break;
    case 'B':
    case 'C':
    case 'D':
    setTimeout(() => {
    console.log('Malheuresement, c\'est une mauvaise réponse !. \nLe TITANIC a sombré dans la nuit du 14 au 15 Avril 1912. Comment ça on s\'en fout ?  \n');
    console.log('Votre Score est maintenant de ' +score+ 'point.' )
    }, 2000);
function3()
      break;
  }
   });


function function3(){
  console.log('On Passe a la suite ! ')

}


}


function start() {
  function1(rules)


}

start()
