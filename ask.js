
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
    console.log('La partie commence dans 15 secondes ! \n')
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
  console.log('----------- QUESTION I ---------- \n')

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
function3(function4)
      break;
  }
   });


function function3(callback){
  console.log('On Passe a la suite !  ')
  setTimeout(() => {
    console.log('---------- QUESTION II ----------  \n')
    console.log('Lequel de ces joueurs est le meilleur buteur de l\'Equipe De France de Football ?\n')
    console.log('A)  Michel Platini\n')
    console.log('B)  Olivier Giroud\n')
    console.log('C)  Zinedine Zidane\n')
    console.log('D)  Thierry Henry\n')
  }, 2000);

  var prompt = require('prompt');

   prompt.start();

   prompt.get(['rep',], function (err, result) {


  switch (result.rep) {
    case 'D':
      console.log(' Bien joué ! Vous gagnez 1 point ! \n ');
      score++
      console.log('Votre Score est maintenant de ' +score+ 'point.' )
      function4()
      break;
    case 'B':
    case 'C':
    case 'A':
    setTimeout(() => {
    console.log('Malheuresement, c\'est une mauvaise réponse !. \nLe meilleur buteur est Thierry Henry avec 51 buts !   \n');
    console.log('Votre Score est maintenant de ' +score+ 'point(s). \n' )
    }, 2000);
function4(function5)
callback
      break;
  }

});
}

function function4(){
  setTimeout(() => {
console.log('Ok, on continue !Et voici la dernière question  !\n')
}, 2000);
function5()
}

function function5(){

  setTimeout(() => {
    console.log('---------- QUESTION III ----------  \n')
    console.log('Laquelle de ces villes est la capitale de l\'Equateur ?\n')
    console.log('A)  Rito\n')
    console.log('B)  Pepito\n')
    console.log('C)  Quito\n')
    console.log('D)  Mito\n')
      }, 2000);
}
}








function start() {
  function1(rules)


}

start()
