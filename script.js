const player1Choices = document.querySelectorAll("#player1 .emoji");
const player2Choices = document.querySelectorAll("#player2 .emoji");
const resultEl = document.getElementById("result");
const popup = document.getElementById("popup");

let player1Choice = null;
let player2Choice = null;

const rules = {
  fire: "leaf",  // fire beats leaf
  leaf: "water", // leaf beats water
  water: "fire"  // water beats fire
};

player1Choices.forEach(choice => {
  choice.addEventListener("click", () => {
    player1Choice = choice.dataset.choice;
    highlightChoice(player1Choices, player1Choice);
    checkWinner();
  });
});

player2Choices.forEach(choice => {
  choice.addEventListener("click", () => {
    player2Choice = choice.dataset.choice;
    highlightChoice(player2Choices, player2Choice);
    checkWinner();
  });
});

function highlightChoice(choices, selected) {
  choices.forEach(choice => {
    if (choice.dataset.choice === selected) {
      choice.style.transform = "scale(1.5)";
    } else {
      choice.style.transform = "scale(1)";
    }
  });
}

function checkWinner() {
  if (player1Choice && player2Choice) {
    let result = "";

    if (player1Choice === player2Choice) {
      result = "It's a Draw!";
    } else if (rules[player1Choice] === player2Choice) {
      result = "Player 1 Wins!";
    } else {
      result = "Player 2 Wins!";
    }

    resultEl.innerText = result;
    popup.classList.remove("hidden");
  }
}

function resetGame() {
  player1Choice = null;
  player2Choice = null;
  popup.classList.add("hidden");

  player1Choices.forEach(choice => choice.style.transform = "scale(1)");
  player2Choices.forEach(choice => choice.style.transform = "scale(1)");
}
