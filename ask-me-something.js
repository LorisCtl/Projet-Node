
score = 0 // j'initialise le score a zéro pour l'utiliser plus tard


function function1(callback) {
console.log('---------- BIENVENUE AU SUPERQUIZ ! ---------- ')

setTimeout(() => {
  callback()
}, 2000);

}
function rules(){ // L'user aura le choix entre le fait de voir les règles et/ou de ne pas les voir
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

   prompt.get(['rep',], function (err, result) { // Je stock ce que m'envoi l'utilisateur dans rep

// L'utilisateur choisira une réponse, si c'est la bonne son score évoluera, sinon il restera tel quel
  switch (result.rep) { //Je recupere la valeur de rep pour la comparer avec mes choix
    case 'A':
      console.log(' Bien joué ! Vous gagnez 1 point ! \n ');
      score++
      console.log('Votre Score est maintenant de ' +score+ ' point.' )
      function3()
      break;
    case 'B':
    case 'C':
    case 'D':

    console.log('Malheuresement, c\'est une mauvaise réponse !. \nLe TITANIC a sombré dans la nuit du 14 au 15 Avril 1912. Comment ça on s\'en fout ?  \n');
    console.log('Votre Score est maintenant de ' +score+ ' point(s).' )

function3(function4) // j'appelle l'autre fonction avec celle d'encore après pour pas que tout arrive d'un coup
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

   prompt.get(['rep',], function (err, result) { // Je stock ce que m'envoi l'utilisateur dans rep


  switch (result.rep) { //Je recupere la valeur de rep pour la comparer avec mes choix
    case 'D':
      console.log(' Bien joué ! Vous gagnez 1 point ! \n ');
      score++
      console.log('Votre Score est maintenant de ' +score+ ' point(s).' )
      function4()
      break;
    case 'B':
    case 'C':
    case 'A':

    console.log('Malheuresement, c\'est une mauvaise réponse !. \nLe meilleur buteur est Thierry Henry avec 51 buts !   \n');
    console.log('Votre Score est de ' +score+ ' point(s). \n' )

function4(function5)
callback
      break;
  }

});
}

function function4(){
  setTimeout(() => {
console.log('Et voici la dernière question  !\n')
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

        var prompt = require('prompt');

         prompt.start(); // démarrage de prompt

         prompt.get(['rep',], function (err, result) { // Je stock ce que m'envoi l'utilisateur dans rep


             switch (result.rep) { //Je recupere la valeur de rep pour la comparer avec mes choix
               case 'C':
                 console.log(' Bien joué ! Vous gagnez 1 point ! \n ');
                 score++
                 console.log('Votre Score est maintenant de ' +score+ ' point(s).' )
                 function6()
                 break;
               case 'B':
               case 'D':
               case 'A':
               console.log('Malheuresement, c\'est une mauvaise réponse !. \nLa bonne réponse était Quito ! \n');
               console.log('Votre Score est de ' +score+ 'point(s). \n' )

           function6()

                 break;
             }

 });
}
}



function function6(){
  console.log('Félicitations, vous avez terminé ce Quiz ! Alors, vous avez fini avec ' +score+' point(s). C\'est bien ! ')
  console.log('Saisissez votre nom pour sauvegarder cette prouesse ! ')

  var prompt = require('prompt');

   prompt.start(); // démarrage de prompt

   prompt.get(['rep',], function (err, result) {
console.log('Félicitations ' + result.rep + ' Votre score a bien été sauvegardé dans la Matrice, Vous allez quitter le jeu') // Je voulois sauvegarder les scores sur un serveur pour afficher les plus gros scores mais je n'ai pas réussi

});
}











function start() {
  function1(rules) //Je lance la 1ère fonction avec la fonction rules en parametre pour pouvoir faire des callbacks pour que tout n'arrive pas en même temps.


}

start() //Je start le jeu
