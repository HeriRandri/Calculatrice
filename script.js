const suppr = document.getElementById("mamafa");
const tab = document.getElementById("tableau");
const btn = document.getElementsByClassName("chiffre");

function calcul(btnrehetra) {
  tab.value = tab.value + btnrehetra.innerText;
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    calcul(btn[i]);
  });
}

suppr.addEventListener("click", function () {
  tab.value = "";
});

const plus = document.getElementById("plus");
function add(chiffre) {}
console.log(add(3, 5));
