function startTheCalculator() {
  let fNum;
  let sNum;
  let operation;

  const checkIfOperation = (op) => op === "+" || op === "-" || op === "*" || op === "/";

  function calc(a, b, opr) {
    return eval(`${a} ${opr} ${b}`);
  }

  do {
    fNum = prompt("enter the first number", 0);
    if (isNaN(fNum)) {
      alert("You must enter a number");
    }
  } while (isNaN(fNum));

  do {
    sNum = prompt("enter the second number", 0);
    if (isNaN(sNum)) {
      alert("You must enter a number");
    }
  } while (isNaN(sNum));

  do {
    operation = prompt("choose math operation:  +, -, /, *");
    if (!checkIfOperation(operation)) {
      alert("You must enter a valid operation");
    }
  } while (!checkIfOperation(operation));

  alert(`✅ work completed. The answer is ${calc(fNum, sNum, operation)}`);

}

const startButton = document.querySelector('#startCalculator');

startButton.addEventListener('click', startTheCalculator);