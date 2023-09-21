const min = 1;
const max = 100;
const max_essai = 6
var essai = 0;

var barre_input = document.getElementById("input")
var message = document.getElementById("message")
var essai_restant = document.getElementById("essais")
var nombre_aleatoire = Math.floor(Math.random() * ((max+1) - min)) + min; //+1 pour inclure le max

var bouton_valider = document.getElementById("valider");
bouton_valider.addEventListener("click", jouer);


console.log(nombre_aleatoire)

function jouer(){
  var proposition = barre_input.value;
  essai++;

      var nb_essai_restant = max_essai - essai;
  if (nb_essai_restant  > 1){
      essai_restant.innerHTML = "Essai(s) restant(s) : " + nb_essai_restant;
    }
  else  {
    essai_restant.innerHTML = "dernière tentative !" ;
   }
  if (proposition == nombre_aleatoire){
    message.innerHTML = "C'est gagné ! Le nombre Mystère était bien " + nombre_aleatoire;
    message.style.color = "green";
    essai_restant.style.display = "none";
    bouton_valider.textContent = "Rejouer?";
    bouton_valider.addEventListener("click", function(){
    window.location.reload();
    });
  }

  //proposition === "" <=> proposition.length == 0;
  else if(proposition == "" || proposition != Math.floor(proposition)){
    message.innerHTML = "On a dit un nombre entier !!!";
    message.style.color = "black";
  }

  else if (proposition < nombre_aleatoire){
    message.innerHTML = "C'est plus";
    message.style.color = "blue";
  }

  else if (proposition > nombre_aleatoire){
    message.innerHTML = "C'est moins";
    message.style.color = "blue";
  }
  if (essai > max_essai){
    message.innerHTML = "C'est perdu ! Le nombre Mystère était " + nombre_aleatoire + " !";
    message.style.color = "red";
    bouton_valider.textContent = "Rejouer?"
    bouton_valider.addEventListener("click", function(){
        window.location.reload();
    });
  }
}