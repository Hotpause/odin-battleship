import Ship from "./ship";

class Gameboard {
  constructor() {
    this.grid = Array(10)
      .fill(null)
      .map(() =>
        Array(10).fill({
          ship: null,
          status: null,
          attacked: false,
        })
      );
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(x, y, length, isHorizontal) {
    const ship = new Ship(length);
    const shipCoordinates = [];

    for (let i = 0; i < length; i++) {
      if (isHorizontal) {
        this.grid[y][x + i] = {
          ship: ship,
          status: "ship",
          attacked: false,
        };
        shipCoordinates.push([y, x + i]);
      } else {
        this.grid[y + i][x] = {
          ship: ship,
          status: "ship",
          attacked: false,
        };
        shipCoordinates.push([y + i, x]);
      }
    }
    this.ships.push({ ship, coordinates: shipCoordinates });
  }

  receiveAttack(x, y) {
    let cell = this.grid[y][x];

    if (cell.attacked) {
      return false;
    }

    cell.attacked = true;
    if (cell.status === "ship") {
      cell.ship.hit();
    }

    if (cell.status === null) {
      this.missedAttacks.push([x, y]);
    }

    return true;
  }
  allShipsSunk() {
    let allShipsSunk = true;
    for (let i = 0; i < this.ships.length; i++) {
      if (!this.ships[i].ship.isSunk()) {
        allShipsSunk = false;
      }
    }
    return allShipsSunk;
  }
}

export default Gameboard;
