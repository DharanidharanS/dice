var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

diceimage1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png-images/dice2.png
diceimage2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png-images/dice2.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", diceimage1);
var image2 = document.querySelectorAll("img")[1].setAttribute("src", diceimage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🥇Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins🥈";
} else {
  document.querySelector("h1").innerHTML = "Draw! 🎲";
}
