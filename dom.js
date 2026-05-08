const buttonElement = document.querySelector('.subscribe-pls');

const costButton = document.querySelector('.js-cost');

// ===== COST BUTTON =====
costButton.addEventListener('click', () => {

  const inputElement = document.querySelector('.js-input');

  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost += 10;
  }

  document.querySelector('.js-result').textContent =
    `Total cost: $${cost}`;
});

// ===== SUBSCRIBE BUTTON =====
buttonElement.addEventListener('click', () => {

  if (buttonElement.textContent === 'subscribe') {
    buttonElement.textContent = 'subscribed';
  } else {
    buttonElement.textContent = 'subscribe';
  }

});