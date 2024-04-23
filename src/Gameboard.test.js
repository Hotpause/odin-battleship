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
    gameboard.receive;
  });
});

// !!!!!"should initialize with a 10x10 grid"
// !!!!!"should place a ship horizontally"
// !!!!!"should place a ship vertically"
// "should record missed attacks"
// "should send hit to the correct ship"
// "should report all ships as sunk"
// "should report not all ships as sunk"
