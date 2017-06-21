// Adding the JS  file 

var equation = "";
var screen = document.getElementById("screen");
function equationBuilder(number) {
  equation += number;
  screen.innerHTML = equation;
}
function runEquals() {
  equals = eval(equation);
  screen.innerHTML = equals;
}
function runClear() {
  equation = 0;
  screen.innerHTML = " ";
}

