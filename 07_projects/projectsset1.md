# Projects related to DOM

## Project link

### Learnt from Chai aur code

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-npka4p?file=index.html)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project 2

```javascript
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span> ${bmi} </span>`;
    if (bmi < 18.6) {
      results.innerHTML = `Under weight. The bmi is ${bmi}`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Normal weight. The bmi is ${bmi}`;
    } else {
      results.innerHTML = `Over weight. The bmi is ${bmi}`;
    }
  }
});
```

## Project 3

```javascript
const clock = document.getElementById("clock");

setInterval(function () {
  const date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooo high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}   `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {}

function newGame() {}
```
