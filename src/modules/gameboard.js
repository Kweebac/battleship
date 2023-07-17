import { shipFactory } from "./ship";

const gameboardFactory = function () {
  let gameboard = [];
  for (let i = 0; i < 10; i++) {
    gameboard.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  const place = function (length, start, facing) {
    const newShip = shipFactory(length);
    newShip.hit();

    this.gameboard[start[0]][start[1]] = newShip;

    if (facing === "north") {
      for (let i = 1; i < length; i++) {
        if (this.gameboard[start[0]][start[1] + i]) throw new Error("Overlap");
        this.gameboard[start[0]][start[1] + i] = newShip;
      }
    } else if (facing === "east") {
      for (let i = 1; i < length; i++) {
        if (this.gameboard[start[0] + i][start[1]]) throw new Error("Overlap");
        this.gameboard[start[0] + i][start[1]] = newShip;
      }
    } else if (facing === "south") {
      for (let i = 1; i < length; i++) {
        if (this.gameboard[start[0]][start[1] - i]) throw new Error("Overlap");
        this.gameboard[start[0]][start[1] - i] = newShip;
      }
    } else if (facing === "west") {
      for (let i = 1; i < length; i++) {
        if (this.gameboard[start[0] - i][start[1]]) throw new Error("Overlap");
        this.gameboard[start[0] - i][start[1]] = newShip;
      }
    } else throw new Error("Invalid direction; must be north, east, south or west");
  };

  return { gameboard, place };
};

export { gameboardFactory };
