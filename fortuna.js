var game = {
  zdobyte: 0,
  zycia: 3,
};

var chooseCountry = 0;
var lettersCache = [];

//LISTENERS

document.getElementById("graj").addEventListener("click", Sprawdz_Litery);
document.getElementById("close").addEventListener("click", author);

//FUNKCJE
function author() {
  if (document.getElementById("authorinfo").style.display === "none")
    document.getElementById("authorinfo").style.display = "";
  else
    document.getElementById("authorinfo").style.display = "none";
}
function start() {

  document.getElementById("start").addEventListener("click",gameBoard);
  document.getElementById("autor").addEventListener("click",author);

  document.getElementById("wrap").style.display = "none";

}

function gameBoard() {
  document.getElementById("panstwa").innerHTML = "";
  document.getElementById("wrong").innerHTML = ""
  document.getElementById("wrap").style.display = "";
  document.getElementById("start").style.display="none";
  document.getElementById("autor").style.display="none";

  chooseCountry = getRandomInt(0, data.length)
  console.log(data[chooseCountry]['country']);

  var newDiv = document.createElement("div");
  document.getElementById("panstwa").append(newDiv);
  newDiv.classList.add("board");
  for (var i = 0; i < data[chooseCountry]['country'].length; i += 1) {
    var style = "hidden"
    if (data[chooseCountry]['country'][i].localeCompare(' ') === 0) {
      newDiv = document.createElement("div");
      document.getElementById("panstwa").append(newDiv);
      newDiv.classList.add("board");
      
    } else
      addLetter(newDiv, data[chooseCountry]['country'][i], style);
  }
  changeLife(0);
}

function changeLife(change) {
  game.zycia += change;
  document.getElementById("zycie").innerHTML = ('Życia: ' + game.zycia);
}

function changePoints(change) {
  game.zdobyte += change;
  document.getElementById("punkty").innerHTML = ('Odgadnięte państwa: ' + game.zdobyte);
}

function Sprawdz_Litery() {
  var litera = document.getElementById("wpisz_litere").value;
  var litery = document.getElementsByClassName("letter");
  var guessed = false;
  if (lettersCache.includes(litera)) {
    alert("Ta litera była już użyta.");
    return;
  }
  for (var i = 0; i < litery.length; i += 1) {
    if (litery[i].innerHTML.toUpperCase().localeCompare(litera.toUpperCase()) === 0) {
      litery[i].classList.remove("hidden");
      guessed = true;
    }
  }

  lettersCache.push(litera);
  
  if (guessed) {
    if (win()) {
      alert("Odgadłeś państwo :)");
      gameBoard();
      changeLife(5);
      changePoints(1)
      lettersCache= [];
    }
  } else {
    changeLife(-1);
    document.getElementById("wrong").innerHTML += " " + (litera);
    if (game.zycia === 0) {
      alert("Przegrałeś! Poprawna odpowiedź to:\n " + (data[chooseCountry]['country']).toString());
      gameBoard();
      changeLife(3);
      lettersCache= [];
    }
  }
}

function win() {
  var litery = document.getElementsByClassName("letter");
  for (let i = 0; i < litery.length; i += 1) {
    if (litery[i].classList.contains("hidden")) {
      return false;
    }
  }
  return true;
}



function addLetter(node, letter, style) {

  var newDiv = document.createElement("span");
  newDiv.innerHTML = letter.toUpperCase();
  node.append(newDiv);

  newDiv.classList.add("letter");
  newDiv.classList.add(style);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

start();