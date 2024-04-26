import Gameboard from "./gameboard";

class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }
  placeRandomizedShips() {
    const lengths = [5, 4, 3, 3, 2];

    lengths.forEach((length) => {
      let x, y, isHorizontal;

      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        isHorizontal = Math.random() < 0.5; // Randomly choose horizontal or vertical orientation
      } while (
        !this.gameboard.isValidShipPlacement(x, y, length, isHorizontal)
      );

      this.gameboard.placeShip(x, y, length, isHorizontal);
    });
  }
  placeShip(x, y, length, isHorizontal) {
    this.gameboard.placeShip(x, y, length, isHorizontal);
  }
  receiveAttack(x, y) {
    this.gameboard.receiveAttack(x, y);
  }

  allShipsSunk() {
    this.gameboard.allShipsSunk();
  }
}

export default Player;
