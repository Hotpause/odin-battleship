import Ship from "./ship.js";

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  test("length should be 3", () => {
    expect(ship.length).toBe(3);
  });

  test("Hit count should be 0", () => {
    expect(ship.hitCount).toBe(0);
  });

  test("Hit count should be 0", () => {
    ship.hit();
    expect(ship.hitCount).toBe(1);
  });

  test("Hit count should be 3", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hitCount).toBe(3);
  });
  test("isSunk should be false", () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });

  test("IsSunk should be true", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("Should give error that ship is already sunk", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(() => ship.hit()).toThrow("Ship is already sunk");
  });
});
