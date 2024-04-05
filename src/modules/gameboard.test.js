import { Gameboard } from "./gameboard";

let player1;
beforeEach(() => {
  player1 = Gameboard();
});

describe("Place ships at coordinates", () => {
  it("Vertical", () => {
    player1.place(4, [6, 4], true); // vertical is true
    expect(player1.getGameboard()[6][4]).not.toBe(undefined);
    expect(player1.getGameboard()[6][5]).not.toBe(undefined);
    expect(player1.getGameboard()[6][6]).not.toBe(undefined);
    expect(player1.getGameboard()[6][7]).not.toBe(undefined);
  });
  it("Horizontal", () => {
    player1.place(2, [0, 0], false);
    expect(player1.getGameboard()[0][0]).not.toBe(undefined);
    expect(player1.getGameboard()[1][0]).not.toBe(undefined);
  });

  it("Error if direction is wrong", () => {
    expect(() => player1.place(3, [5, 4], "")).toThrow(
      "Invalid direction, vertical must be true or false"
    );
  });
  it("Doesn't go off the map", () => {
    expect(() => player1.place(2, [9, 0], false)).toThrow(Error);
    expect(() => player1.place(2, [5, 9], true)).toThrow(Error);
    expect(() => player1.place(2, [-2, 1], true)).toThrow(Error);
    expect(() => player1.place(2, [13, 13], true)).toThrow(Error);
  });

  it("Ships don't overlap", () => {
    player1.place(4, [6, 2], false);
    expect(() => player1.place(2, [5, 2], false)).toThrow("Overlap");
  });
});

describe("Attacks at coordinates", () => {
  it("Attack hits", () => {
    player1.place(3, [0, 0], false);
    expect(player1.getGameboard()[0][0].getHits()).toBe(0);
    player1.receiveAttack([1, 0]);
    expect(player1.getGameboard()[0][0].getHits()).toBe(1);
    expect(player1.getGameboard()[1][0]).toBe(true);
  });

  it("Attack misses", () => {
    expect(player1.getGameboard()[1][0]).toBe(undefined);
    player1.receiveAttack([1, 0]);
    expect(player1.getGameboard()[1][0]).toBe(false);
  });
});

it("Check if objects on the board work correctly", () => {
  player1.place(2, [0, 0], false);
  expect(player1.getGameboard()[0][0].getHits()).toBe(0);
  expect(player1.getGameboard()[1][0].getHits()).toBe(0);
  player1.getGameboard()[1][0].hit();
  expect(player1.getGameboard()[0][0].getHits()).toBe(1);
  expect(player1.getGameboard()[1][0].getHits()).toBe(1);
  player1.getGameboard()[0][0].hit();
  expect(player1.getGameboard()[0][0].getHits()).toBe(2);
  expect(player1.getGameboard()[1][0].getHits()).toBe(2);
  expect(player1.getGameboard()[0][0].getSunk()).toBe(true);
  expect(player1.getGameboard()[1][0].getSunk()).toBe(true);
});

it("All ships sunk", () => {
  player1.place(2, [0, 0], false);
  player1.place(1, [0, 1], false);

  player1.getGameboard()[0][0].hit();
  player1.getGameboard()[1][0].hit();
  expect(player1.hasAllSunk()).toBe(false);

  player1.getGameboard()[0][1].hit();
  expect(player1.hasAllSunk()).toBe(true);
});

it("Random number isn't true or false", () => {
  player1.place(1, [0, 0], true);
  player1.receiveAttack([0, 0]);
  player1.receiveAttack([1, 1]);
  expect([true, false]).not.toContain(player1.randomSquare());
});

// describe("convertCords() works correctly", () => {
//   it("a 2 TRUE", () => {

//   })
// })
