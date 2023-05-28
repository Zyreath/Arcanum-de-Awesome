var ans = "";
var s = "#";

for (var i = 0; i < 7; i++) {
  ans += s + "<br>";
  s += "#";
}

document.getElementById("ex1").innerHTML = ans;

var l = [];
for(var i = 0; i < 30; i++){
   l.push(i);
}

document.getElementById("ex2").innerHTML = l;

var arrayOutputElement = document.getElementById("arrayOutput");

arrayOutputElement.textContent = myArray.join(", ");
