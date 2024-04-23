import Ship from "./ship";

class Gameboard {
  constructor() {
    this.grid = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(x, y, length, isHorizontal) {
    const ship = new Ship(length);
    const shipCoordinates = [];

    for (let i = 0; i < length; i++) {
      if (isHorizontal) {
        this.grid[y][x + i] = ship;
        shipCoordinates.push([y, x + i]);
      } else {
        this.grid[y + i][x] = ship;
        shipCoordinates.push([y + i, x]);
      }
    }
    this.ships.push({ ship, coordinates: shipCoordinates });
  }

  receiveAttack(x, y) {
    const target = this.grid[y][x];
    if (target === null) {
      this.missedAttacks.push([y, x]);
      return false;
    } else {
      target.hit();
      return true;
    }
  }
  allShipsSunk() {
    let allShipsSunk = true;
    for (let i = 0; i < this.ships.length; i++) {
      if (!this.ships[i].isSunk()) {
        allShipsSunk = false;
      }
    }
    return allShipsSunk;
  }
}

export default Gameboard;
