var ans = "";
var s = "#";

for (var i = 0; i < 7; i++) {
  ans += s + "<br>";
  s += "#";
}

document.getElementById("ex1").innerHTML = ans;



var arrayOutputElement = document.getElementById("ex2");

var l = [];
for(var i = 0; i < 101; i++){
  if (i%3 == 0) {
   l.push("Fizz");
  }
   l.push(i);
}

arrayOutputElement.textContent = l.join(", ");
