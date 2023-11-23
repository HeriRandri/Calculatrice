const tab = document.getElementById("tableau");
const btn = document.getElementsByClassName("chiffre");
const premierChiffre = document.getElementById("premierChiffre");
const deuxiemeChiffre = document.getElementById("deuxiemeChiffre");
var resultat = 0;
function calcul(btnrehetra) {
  tab.value = tab.value + btnrehetra.innerText;
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    calcul(btn[i]);
  });
}

const suppr = document.getElementById("mamafa");
suppr.addEventListener("click", function () {
  tab.value = "";
});

const egal = document.getElementById("egal");
egal.addEventListener("click", function () {
  tab.value = calculeo();
});

const plus = document.getElementById("plus");
if (
  (plus.onclick = function () {
    tab.value = "+";
  })
) {
}

function calculeo(a, d) {
  return a + d;
}
