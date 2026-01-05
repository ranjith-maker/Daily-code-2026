





const h1 = document.getElementById("num");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

var a = 0;

inc.addEventListener("click", () => {
  a++;
  h1.innerText = a;
});

dec.addEventListener("click", () => {
  a--;
  h1.innerHTML = a;
});
