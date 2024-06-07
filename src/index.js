import "./style.css";
import Player from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";
import renderboard from "./dom";

const player = new Player();
const computer = new Player();

let playersattackedcells = new Set();
let computersattackedcells = new Set();

player.placeRandomizedShips();
computer.placeRandomizedShips();

renderboard(player.gameboard, "playerBoard");
renderboard(computer.gameboard, "computerBoard");

let currentplayer = player;

const handleattack = (x, y) => {
  randomizeButton.style.display = "none";
  if (checkwinner()) {
    console.log("The game has already been won!");
    return;
  }
  console.log("******** players turn ********");
  if (computersattackedcells.has(`${x},${y}`)) {
    console.error("You've already attacked this cell:", y, x);
    return;
  } else computer.receiveAttack(x, y);
  computersattackedcells.add(`${x},${y}`);

  currentplayer = currentplayer === player ? computer : player;

  renderboard(player.gameboard, "playerBoard");
  renderboard(computer.gameboard, "computerBoard");

  computersturn();
  console.log("valid coordinates:", y, x);
  checkwinner();
};

const computersturn = () => {
  console.log("******* computers turn *******");
  let x, y;

  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  } while (playersattackedcells.has(`${x},${y}`));

  playersattackedcells.add(`${x},${y}`);
  player.receiveAttack(x, y);
  console.log("computer attacked", y, x);
  renderboard(player.gameboard, "playerBoard");
  renderboard(computer.gameboard, "computerBoard");
  checkwinner();
};

const checkwinner = () => {
  if (computer.gameboard.allShipsSunk()) {
    console.log("Player Wins");
    document.getElementById("winnerMessage1").textContent = "Player Wins";
    document.getElementById("winnerMessage1").classList.add("show");
    document
      .getElementById("computerBoard")
      .removeEventListener("click", handleattack);
    return true;
  } else if (player.gameboard.allShipsSunk()) {
    console.log("Computer Wins");
    document.getElementById("winnerMessage1").textContent = "Computer Wins";
    document.getElementById("winnerMessage1").classList.add("show");
    document
      .getElementById("computerBoard")
      .removeEventListener("click", handleattack);
    return true;
  }

  return false; // No winner yet
};

document.getElementById("computerBoard").addEventListener("click", (event) => {
  const cell = event.target;
  if (cell.classList.contains("cell")) {
    const rowelement = cell.parentElement;
    const cellindex = Array.from(rowelement.children).indexOf(cell);
    const rowindex = Array.from(rowelement.parentElement.children).indexOf(
      rowelement
    );

    if (rowindex >= 0 && rowindex < 10 && cellindex >= 0 && cellindex < 10) {
      handleattack(cellindex, rowindex);
    } else {
      console.error("Invalid coordinates:", rowindex, cellindex);
    }
    event.stopPropagation();
  }
});

const randomizeButton = document.getElementById("randomizeButton");

randomizeButton.addEventListener("click", () => {
  player.gameboard.clearShips();
  player.placeRandomizedShips();
  renderboard(player.gameboard, "playerBoard");
});
