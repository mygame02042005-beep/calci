const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const backspace = document.getElementById("backspace");

let currentInput = "";

// Add click listeners to all calculator buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (!value) return; // ignore buttons like clear/backspace/equal here

    currentInput += value;
    display.value = currentInput;
  });
});

// Equal button functionality
equals.addEventListener("click", () => {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch {
    display.value = "Error";
    currentInput = "";
  }
});

// Clear button functionality
clear.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Backspace button functionality
backspace.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
});
