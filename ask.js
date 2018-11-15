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
  console.log('Question suivante !');
}, 4000);






});
function start(){
bonjour()
questions1()



}

start()
