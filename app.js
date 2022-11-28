let adviceNumber = document.getElementById("advice-number");
let advice = document.getElementById("advice");
let dice = document.getElementById("dice");
document.body.onload = fetchAdvice("https://api.adviceslip.com/advice");

dice.addEventListener("click", (e) => {
  fetchAdvice("https://api.adviceslip.com/advice");
});

function fetchAdvice(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      adviceNumber.innerText = data["slip"]["id"];
      advice.innerText = `"${data["slip"]["advice"]}"` ;
    })
    .catch((error) => alert(error));
}
