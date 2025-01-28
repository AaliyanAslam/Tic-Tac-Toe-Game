var curentPlayer = "X";

function handleClick(event) {
  const box = event.target;

  if (box.innerText === "") {
    box.innerText = curentPlayer;
    curentPlayer = curentPlayer === "X" ? "O" : "X";

    document.getElementById(
      "gameDetail"
    ).innerText = `Player ${curentPlayer}'s turn`;
  }
}

document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", handleClick);
});


var curentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""]; 
var isGameActive = true; 

const winningCombinations = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7],
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6], 
];

function handleClick(event) {
  const box = event.target;
  const boxIndex = box.getAttribute("data-index");

  if (board[boxIndex] !== "" || !isGameActive) return;

  box.innerText = curentPlayer;
  board[boxIndex] = curentPlayer;

  if (checkWinner()) {
    document.getElementById(
      "gameDetail"
    ).innerText = `Player ${curentPlayer} wins! 🎉`;
    isGameActive = false;
    return;
  }

  if (!board.includes("")) {
    document.getElementById("gameDetail").innerText = "It's a draw! 🤝";
    isGameActive = false;
    return;
  }

  curentPlayer = curentPlayer === "X" ? "O" : "X";

 
  document.getElementById(
    "gameDetail"
  ).innerText = `Player ${curentPlayer}'s turn`;
}

function checkWinner() {
 
  return winningCombinations.some((combination) => {
    return combination.every((index) => board[index] === curentPlayer);
  });
}


document.querySelectorAll(".box").forEach((box, index) => {
  box.setAttribute("data-index", index); 
  box.addEventListener("click", handleClick);
});

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  curentPlayer = "X";
  document.querySelectorAll(".box").forEach((box) => (box.innerText = ""));
  document.getElementById("gameDetail").innerText = "Player X's turn";
}
