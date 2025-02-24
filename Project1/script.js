//Function to appenf clicked button to the display
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

//Function to clear the display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Function to evaluate mathematical expressions safely
function safeEvaluate(expression) {
  try {
    return new Function(`return (${expression})`)();
  } catch (error) {
    return "Error"; // Handles invalid expressions
  }
}

//Function claculate the result
function calculateResult() {
  let displayValue = document.getElementById("display").value;
  if (displayValue.trim() === "") return;

  document.getElementById("display").value = safeEvaluate(displayValue);
}
