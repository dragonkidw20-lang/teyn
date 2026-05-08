const buttonElement = document.querySelector('.subscribe-pls');

const costButton = document.querySelector('.js-cost');
const inputElement = document.querySelector('.js-input');

// ===== CALCULATE FUNCTION =====
function calculateTotal() {

  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost += 10;
  }

  document.querySelector('.js-result').textContent =
    `Total cost: $${cost}`;
}

// ===== COST BUTTON =====
costButton.addEventListener('click', () => {
  calculateTotal();
});

// ===== ENTER KEY =====
inputElement.addEventListener('keydown', (event) => {

  if (event.key === 'Enter') {
    calculateTotal();
  }

});

// ===== SUBSCRIBE BUTTON =====
buttonElement.addEventListener('click', () => {

  if (buttonElement.textContent === 'Subscribe') {
    buttonElement.textContent = 'Subscribed';
    buttonElement.classList.add("b-b")
  } else {
    buttonElement.textContent = 'Subscribe';
    buttonElement.classList.remove('b-b')
  }

});
