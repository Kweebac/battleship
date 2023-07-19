import { gameboardFactory } from "./gameboard";

jest.mock("..");

let newGame;
beforeEach(() => {
  newGame = gameboardFactory();
});

describe("Place ships at coordinates", () => {
  it("north", () => {
    newGame.place(4, [6, 4], "north");
    expect(newGame.getGameboard()[6][4]).not.toBe(undefined);
    expect(newGame.getGameboard()[6][5]).not.toBe(undefined);
    expect(newGame.getGameboard()[6][6]).not.toBe(undefined);
    expect(newGame.getGameboard()[6][7]).not.toBe(undefined);
  });
  it("east", () => {
    newGame.place(2, [0, 0], "east");
    expect(newGame.getGameboard()[0][0]).not.toBe(undefined);
    expect(newGame.getGameboard()[1][0]).not.toBe(undefined);
  });
  it("south", () => {
    newGame.place(4, [2, 9], "south");
    expect(newGame.getGameboard()[2][9]).not.toBe(undefined);
    expect(newGame.getGameboard()[2][8]).not.toBe(undefined);
    expect(newGame.getGameboard()[2][7]).not.toBe(undefined);
    expect(newGame.getGameboard()[2][6]).not.toBe(undefined);
  });
  it("west", () => {
    newGame.place(3, [5, 4], "west");
    expect(newGame.getGameboard()[5][4]).not.toBe(undefined);
    expect(newGame.getGameboard()[4][4]).not.toBe(undefined);
    expect(newGame.getGameboard()[3][4]).not.toBe(undefined);
  });

  it("Error if direction is wrong", () => {
    expect(() => newGame.place(3, [5, 4], "wst")).toThrow(
      "Invalid direction; must be north, east, south or west"
    );
  });
  it("Doesn't go off the map", () => {
    expect(() => newGame.place(5, [6, 2], "east")).toThrow(Error);
  });

  it("Ships don't overlap", () => {
    newGame.place(4, [6, 2], "east");
    expect(() => newGame.place(2, [5, 2], "east")).toThrow("Overlap");
  });
});

describe("Attacks at coordinates", () => {
  it("Attack hits", () => {
    newGame.place(3, [0, 0], "east");
    expect(newGame.getGameboard()[0][0].getHits()).toBe(0);
    newGame.receiveAttack([1, 0]);
    expect(newGame.getGameboard()[0][0].getHits()).toBe(1);
  });

  it("Attack misses", () => {
    expect(newGame.getGameboard()[1][0]).toBe(undefined);
    newGame.receiveAttack([1, 0]);
    expect(newGame.getGameboard()[1][0]).toBe(-1);
  });
});

it("Check if objects on the board work correctly", () => {
  newGame.place(2, [0, 0], "east");
  expect(newGame.getGameboard()[0][0].getHits()).toBe(0);
  expect(newGame.getGameboard()[1][0].getHits()).toBe(0);
  newGame.getGameboard()[1][0].hit();
  expect(newGame.getGameboard()[0][0].getHits()).toBe(1);
  expect(newGame.getGameboard()[1][0].getHits()).toBe(1);
  newGame.getGameboard()[0][0].hit();
  expect(newGame.getGameboard()[0][0].getHits()).toBe(2);
  expect(newGame.getGameboard()[1][0].getHits()).toBe(2);
  expect(newGame.getGameboard()[0][0].getSunk()).toBe(true);
  expect(newGame.getGameboard()[1][0].getSunk()).toBe(true);
});
