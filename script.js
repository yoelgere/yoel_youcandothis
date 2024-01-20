const counterDisplay = document.getElementById("counterDisplay");

const increaseButton = document.getElementById("increaseButton");

const decreaseButton = document.getElementById("decreaseButton");

const resetButton = document.getElementById("resetButton");

let counterValue = 0;

function updateCounter() {
  counterDisplay.textContent = counterValue;
}

function increaseCounter() {
  // counterValue = counterValue+1;
  counterValue++;
  updateCounter();
}

function decreaseCounter() {
  //   counterValue = counterValue - 1;
  counterValue--;
  updateCounter();
}

function resetCounter() {
  counterValue = 0;
  updateCounter();
}

increaseButton.addEventListener("click", increaseCounter);
decreaseButton.addEventListener("click", decreaseCounter);
resetButton.addEventListener("click", resetCounter);