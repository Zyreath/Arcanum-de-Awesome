var ans = "";
var s = "#";

for (var i = 0; i < 7; i++) {
  ans += s + "<br>";
  s += "#";
}

document.getElementById("ex1").innerHTML = ans;
