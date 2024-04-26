import Ship from "./ship";

class Gameboard {
  constructor() {
    this.grid = Array(10)
      .fill(null)
      .map(() =>
        Array(10)
          .fill(null)
          .map(() => ({
            ship: null,
            status: null,
            attacked: false,
          }))
      );

    this.ships = [];
    this.missedAttacks = [];
  }
  clearShips() {
    // Reset the grid to remove all ships
    this.grid.forEach((row) => {
      row.forEach((cell) => {
        cell.ship = null;
        cell.status = null;
        cell.attacked = false;
      });
    });

    // Clear the ships array
    this.ships = [];
  }
  isValidShipPlacement(x, y, length, isHorizontal) {
    // Check if the ship fits within the gameboard
    if (
      (isHorizontal && x + length > 10) ||
      (!isHorizontal && y + length > 10)
    ) {
      return false;
    }

    // Check if any cell in the path of the ship is already occupied
    for (let i = 0; i < length; i++) {
      if (isHorizontal) {
        if (this.grid[y][x + i].status === "ship") {
          return false;
        }
      } else {
        if (this.grid[y + i][x].status === "ship") {
          return false;
        }
      }
    }

    return true;
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
    console.log(`Receiving attack at ${y},${x}`);
    let cell = this.grid[y][x];

    if (cell.attacked) {
      console.log(`Cell ${y},${x} already attacked`);
      return false;
    }

    cell.attacked = true;
    console.log(`Cell ${y},${x} attacked`);

    if (cell.status === "ship") {
      cell.ship.hit();
      console.log(`Ship hit at ${y},${x}`);
    }

    if (cell.status === null) {
      this.missedAttacks.push([x, y]);
      console.log(`Miss at ${y},${x}`);
    }

    return true;
  }

  allShipsSunk() {
    let allShipsSunk = true;
    for (let i = 0; i < this.ships.length; i++) {
      if (!this.ships[i].ship.isSunk()) {
        allShipsSunk = false;
        break;
      }
    }
    return allShipsSunk;
  }
}

export default Gameboard;
