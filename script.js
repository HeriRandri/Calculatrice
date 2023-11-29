const neFonctionnePas = document.querySelectorAll(".chiffre");
neFonctionnePas.onclick = function () {
  neFonctionnePas.style.display = "none";
};

let chiffres = ""; // Variable pour stocker les chiffres
let operateur = ""; // Variable pour stocker l'opérateur

function ajouterChiffre(chiffre) {
  chiffres += chiffre; // Ajouter le chiffre à la variable
  afficherResultat();
}

function ajouterOperateur(op) {
  // Si des chiffres ont été saisis, ajoute l'opérateur
  if (chiffres !== "") {
    chiffres += " " + op + " "; // Ajouter l'opérateur à la variable
    operateur = op; // Mettre à jour l'opérateur
    afficherResultat();
  }
}

function afficherResultat() {
  document.getElementById("tableau").value = chiffres;
}

/*  function factoriel(isa) {
  let fact = 1;
  for (let i = 1; i <= isa; i++) {
    console.log(i);
    fact = fact * i;
  }
  afficherResultat();
}*/

function effacer() {
  chiffres = "";
  operateur = "";
  afficherResultat();
}

function egal() {
  // Vérifier si des chiffres et un opérateur sont présents
  if (chiffres !== "" && operateur !== "") {
    // Séparer la chaîne en parties pour obtenir les deux nombres
    const parties = chiffres.split(" ");
    const nombre1 = parseFloat(parties[0]);
    const nombre2 = parseFloat(parties[2]);

    // Effectuer le calcul en fonction de l'opérateur
    switch (operateur) {
      case "+":
        chiffres = nombre1 + nombre2;
        break;
      case "-":
        chiffres = nombre1 - nombre2;
        break;
      case "*":
        chiffres = nombre1 * nombre2;
        break;
      case "/":
        // Vérifier la division par zéro
        chiffres = nombre2 !== 0 ? nombre1 / nombre2 : "Erreur";
        break;
      default:
        break;
    }

    // Réinitialiser l'opérateur
    operateur = "";
    afficherResultat();
  }
}

/*var coll = document.querySelector(".chiffre");
function rad() {
  coll.style.backgroundColor = "red";
}

coll.addEventListener("click", rad);*/
