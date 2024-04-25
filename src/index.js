import "./style.css";
import Player from "./player";
import Gameboard from "./gameboard";
import Ship from "./ship";
import renderboard from "./dom";

const player = new Player();
const computer = new Player();

let playerattackedcells = new Set();
let computerattackedcells = new Set();

player.placeShip(0, 0, 5, true);
player.placeShip(2, 2, 4, false);
computer.placeShip(1, 2, 5, true);
computer.placeShip(5, 5, 4, false);

renderboard(player.gameboard, "playerBoard");
renderboard(computer.gameboard, "computerBoard");

let currentplayer = player;

const handleattack = (x, y) => {
  if (computerattackedcells.has(`${x},${y}`)) {
    console.error("You've already attacked this cell:", x, y);
    return;
  } else computer.receiveAttack(x, y);
  computerattackedcells.add(`${x},${y}`);

  currentplayer = currentplayer === player ? computer : player;

  renderboard(player.gameboard, "playerBoard");
  renderboard(computer.gameboard, "computerBoard");

  checkwinner();
  computersturn();
  console.log("valid coordinates:", x, y);
};

const computersturn = () => {
  let x, y;

  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  } while (playerattackedcells.has(`${x},${y}`));

  playerattackedcells.add(`${x},${y}`);
  player.receiveAttack(x, y);
  console.log("computer attacked", x, y);
};

const checkwinner = () => {
  if (computer.allShipsSunk()) {
    alert("player Wins");
  } else if (player.allShipsSunk()) {
    alert("Computer Wins");
  }
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
      console.error("Invalid coordinates:", cellindex, rowindex);
    }
    event.stopPropagation();
  }
});
