// "use strict";

const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let output = "";
const specialChars = ["%", "*", "/", "-", "+", "="];

const calc = (btnValue) => {
  if (btnValue == "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (btnValue === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calc(e.target.dataset.value));
});
