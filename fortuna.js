
var game = {
  zdobyte : 0,
  zycia : 1,
}
//alert(data[0]['country']);
var elem = document.getElementById("panstwa");
var country = data[getRandomInt(0,data.length)]['country'];
//elem.innerHTML = country;

//alert(data.length);
//alert(data[0]['country'][2]);

 //for (var i = 0; i < data[0]['country'].length; i += 1) {
    //alert(data[0]['country'][i]);  
  //}



//LISTENERS

document.getElementById("graj").addEventListener("click", Sprawdz_Litery);
document.getElementById("autor").addEventListener("click", author);

//alert(game.zycia);

addElement("execute");

//Author
function author()
{
  document.getElementById("authorinfo").style.display = 'block'
}
//FUNKCJE
function Sprawdz_Litery()
{
  var liter = document.getElementById("wpisz_litere").value;
  liter = liter.toUpperCase();

}

function addElement(mydiv)
{
  //newDiv.innerHTML = "";
  //newDiv = document.createElement("span");
  //newDiv.innerHTML = actualStatus.join(" ");
  document.getElementById(mydiv).innerHTML = actualStatus.join(" ");

  //my_div = document.getElementById(mydiv);
  //document.body.insertBefore(newDiv, my_div);

/*
  newDiv2 = document.createElement("span");
  newDiv2.innerHTML = "jasiokotek2";
  document.body.insertBefore(newDiv2, my_div.nextSibling);
  newDiv.classList.add("mystyle"); 
  */
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}