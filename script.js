let numberSequence = [];
let displayInterval;
const numberDisplay = document.getElementById('number-display');
const startGameBtn = document.getElementById('start-game');
const submitAnswerBtn = document.getElementById('submit-answer');
const resultDisplay = document.getElementById('result');
const userInput = document.getElementById('user-input');

function getRandomNumber() {
  return Math.floor(Math.random() * 10); // Generates a random number between 0 and 9
}

function startGame() {
  numberSequence = []; // Reset the sequence
  userInput.value = ''; // Clear the user input field
  resultDisplay.textContent = ''; // Clear result display
  userInput.disabled = true; // Disable input while numbers are displayed

  // Generate a sequence of 5 random numbers
  for (let i = 0; i < 5; i++) {
    numberSequence.push(getRandomNumber());
  }

  let index = 0;
  numberDisplay.textContent = numberSequence[index]; // Show the first number

  displayInterval = setInterval(() => {
    index++;
    if (index < numberSequence.length) {
      numberDisplay.textContent = numberSequence[index]; // Show the next number
    } else {
      clearInterval(displayInterval); // Stop after displaying all numbers
      numberDisplay.textContent = ''; // Clear the number display
      userInput.disabled = false; // Enable input
    }
  }, 1000); // Display each number for 1 second
}

function submitAnswer() {
  const userAnswer = userInput.value.split('').map(Number); // Convert user input into an array of numbers
  if (userAnswer.toString() === numberSequence.toString()) {
    resultDisplay.textContent = 'Correct! Well done!';
    resultDisplay.style.color = 'green';
  } else {
    resultDisplay.textContent = 'Incorrect. Try again!';
    resultDisplay.style.color = 'red';
  }
}

startGameBtn.addEventListener('click', startGame);
submitAnswerBtn.addEventListener('click', submitAnswer);
