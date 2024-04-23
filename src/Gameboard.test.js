import Gameboard from "./gameboard.js";
import Ship from "./ship";

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("should initialize with a 10x10 grids", () => {
    expect(gameboard.grid.length).toBe(10);
  });

  test("should place a ship horizontally", () => {
    gameboard.placeShip(2, 3, 3, true);
    expect(gameboard.grid[3][2].length).toBe(3);
    expect(gameboard.grid[3][2].hitCount).toBe(0);
  });

  test("should place a ship vertically", () => {
    gameboard.placeShip(2, 3, 3, false);
    expect(gameboard.grid[3][2].length).toBe(3);
    expect(gameboard.grid[3][2].hitCount).toBe(0);
    expect(gameboard.grid[4][2].hitCount).toBe(0);
    expect(gameboard.grid[5][2].hitCount).toBe(0);
  });

  test("should record missed attacks", () => {
    gameboard.placeShip(2, 3, 3, false);
    expect(gameboard.receiveAttack(2, 4)).toBe(true);
    expect(gameboard.receiveAttack(2, 6)).toBe(false);
    expect(gameboard.missedAttacks.length).toBe(1);
    expect(gameboard.missedAttacks).toEqual([[2, 6]]);
  });

  test("should send hit to the correct ship", () => {
    gameboard.placeShip(2, 3, 3, true);
    gameboard.receiveAttack(2, 3);
    gameboard.receiveAttack(3, 3);
    gameboard.receiveAttack(4, 3);
    expect(gameboard.grid[3][2].hitCount).toBe(3);
    expect(gameboard.grid[3][3].hitCount).toBe(3);
    expect(gameboard.grid[3][4].hitCount).toBe(3);
  });

  test("should report all ships as sunk or not", () => {
    gameboard.placeShip(2, 3, 3, true);
    gameboard.placeShip(2, 4, 3, true);

    gameboard.receiveAttack(2, 3);
    gameboard.receiveAttack(3, 3);
    gameboard.receiveAttack(4, 3);
    expect(gameboard.allShipsSunk()).toBe(false);

    gameboard.receiveAttack(2, 4);
    gameboard.receiveAttack(3, 4);
    gameboard.receiveAttack(4, 4);
    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
