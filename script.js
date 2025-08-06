const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

let currentInput = "";

// Add click listeners to all calculator buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    // Ignore buttons without data-value (like clear or equal)
    if (!value) return;

    currentInput += value;
    display.value = currentInput;
  });
});

// Calculate the result when '=' is pressed
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

// Clear everything
clear.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});
