// Example 1

var ans = "";
var s = "#";

for (var i = 0; i < 7; i++) {
  ans += s + "<br>";
  s += "#";
}

document.getElementById("ex1").innerHTML = ans;

// Example 2

var arrayOutputElement = document.getElementById("ex2");

var l = [];
for(var i = 1; i < 101; i++){
  if (i%3 == 0 && i%5 == 0) {
   l.push("FizzBuzz");
  } else if (i%3 == 0) {
   l.push("Fizz");
  } else if (i%5 == 0) {
   l.push("Buzz");
  } else {
 l.push(i);
   }
}
arrayOutputElement.textContent = l.join(", ");

// Example 3

var pattern = '';
var counter = 1;
for (var i = 1; i <= 64; i++) {
    if (i % 2 == 0) {
        pattern += '#';
    } else {
      pattern += 'X';
  }
  if (counter % 8 == 0) {
    pattern += "<br>";
    counter = 0;
  } 
  counter += 1;
}

document.getElementById("ex3").innerHTML = pattern;
