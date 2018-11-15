
function verif()

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
    console.log('Non, désolé, votre score reste a 0');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  }


console.log("Votre score est : ".concat(score, "."));


});

module.exports = verif()
