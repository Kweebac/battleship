import { gameboardFactory } from "./gameboard";
import { shipFactory } from "./ship";

describe("Place ships at coordinates", () => {
  let newGame;

  beforeEach(() => {
    newGame = gameboardFactory();
  });

  it("north", () => {
    newGame.place(4, [6, 4], "north");
    expect(newGame.gameboard[6][4]).not.toBe(0);
    expect(newGame.gameboard[6][5]).not.toBe(0);
    expect(newGame.gameboard[6][6]).not.toBe(0);
    expect(newGame.gameboard[6][7]).not.toBe(0);
  });
  it("east", () => {
    newGame.place(2, [0, 0], "east");
    expect(newGame.gameboard[0][0]).not.toBe(0);
    expect(newGame.gameboard[1][0]).not.toBe(0);
  });
  it("south", () => {
    newGame.place(4, [2, 9], "south");
    expect(newGame.gameboard[2][9]).not.toBe(0);
    expect(newGame.gameboard[2][8]).not.toBe(0);
    expect(newGame.gameboard[2][7]).not.toBe(0);
    expect(newGame.gameboard[2][6]).not.toBe(0);
  });
  it("west", () => {
    newGame.place(3, [5, 4], "west");
    expect(newGame.gameboard[5][4]).not.toBe(0);
    expect(newGame.gameboard[4][4]).not.toBe(0);
    expect(newGame.gameboard[3][4]).not.toBe(0);
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
