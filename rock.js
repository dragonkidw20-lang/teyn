// ===== SCORE SETUP =====
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// ===== UPDATE SCORE DISPLAY =====
function updateScoreElement() {
  document.querySelector(".js-s").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

updateScoreElement();

// ===== RESET BUTTON =====
const resetBtn = document.getElementById("Resets");

resetBtn.addEventListener("click", () => {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  console.log("Score reset:", score);
});

// ===== GAME FUNCTION =====
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else {
      result = 'You lose.';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else {
      result = 'You win.';
    }
  }

  // ===== UPDATE SCORE =====
  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else {
    score.ties++;
  }

  // ===== SAVE SCORE =====
  localStorage.setItem('score', JSON.stringify(score));

  // ===== UPDATE SCREEN =====
  updateScoreElement();

  // ===== SHOW RESULT =====
  document.querySelector(".js-r").innerHTML = result;
  document.querySelector(".js-m").innerHTML = 
   `You ${playerMove} - ${computerMove} computer `;
  
}

// ===== COMPUTER MOVE =====
function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return 'rock';
  } else if (randomNumber < 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}