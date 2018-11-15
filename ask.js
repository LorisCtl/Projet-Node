/*Ask-me-something
 *Loris CATALLO
 *INGESUP B2B*/

var score =0

function bonjour() {
console.log('Bienvenue Dans le SuperQuiz ! \n')
}

function questions1(callback) {
console.log('Quelle est la capitale de la FRANCE ?\n')
console.log('A) Marseille \n')
console.log('B) Paris \n')
console.log('C) Bordeaux \n')
console.log('D) Lyon \n')

}

var prompt = require("prompt");
prompt.start();
/*console.log("Veuillez Répondre a la question");*/
prompt.get(["reponse"], function(err, res){
console.log("Vous avez répondu ".concat(res.reponse, "."));

var expr = 'A';
switch (res.reponse) {
  case 'B':
    console.log('Bravo ! Vous gagnez un point !');
   score = score + 1;
    break;
  case 'A':
  case 'C':
  case 'D':
    console.log('Non, désolé, La bonne réponse était : Paris');
    break;
  }

setTimeout(() => {
  console.log("Votre score est : ".concat(score, "."));
}, 3000);

setTimeout(() => {
  console.log('Question suivante ! \n');
}, 4000);


q2()


function q2(){
  setTimeout(() => {
    console.log('Quel âge a la Reine d\'Angleterre ? \n');
    console.log('A) 94 ans \n')
    console.log('B) 250 ans mais elle est très bien conservée \n')
    console.log('C) 90 ans \n')
    console.log('D) 92 ans\n')
  }, 7000);


  var prompt = require("prompt");
  prompt.start();
  /*console.log("Veuillez Répondre a la question");*/
  prompt.get(["reponse"]), function(err, res){
console.log('Pomme de Terre ')

  var expre = 'A';
  switch (res.reponse) {
    case 'D':
      console.log('Bravo ! Vous gagnez un point !');
     score = score + 1;
      break;
    case 'A':
    case 'C':
    case 'B':
      console.log('Non, désolé, La bonne réponse était : 92 ans');
      break;
    }
    console.log("Votre score est : ".concat(score, "."));
  }











}

});
function start(){
bonjour()
questions1()



}

start()
