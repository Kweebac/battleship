import { shipFactory } from "./ship";

function gameboardFactory() {
  let gameboard = [];
  for (let i = 0; i < 10; i++) {
    gameboard.push([
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ]);
  }

  function getGameboard() {
    return gameboard;
  }

  function place(length, start, facing) {
    const newShip = shipFactory(length);

    if (facing === "north") {
      for (let i = 0; i < length; i++) {
        if (typeof this.getGameboard()[start[0]][start[1] + i] === "object")
          throw new Error("Overlap");
        this.getGameboard()[start[0]][start[1] + i] = newShip;
      }
    } else if (facing === "east") {
      for (let i = 0; i < length; i++) {
        if (typeof this.getGameboard()[start[0] + i][start[1]] === "object")
          throw new Error("Overlap");
        this.getGameboard()[start[0] + i][start[1]] = newShip;
      }
    } else if (facing === "south") {
      for (let i = 0; i < length; i++) {
        if (typeof this.getGameboard()[start[0]][start[1] - i] === "object")
          throw new Error("Overlap");
        this.getGameboard()[start[0]][start[1] - i] = newShip;
      }
    } else if (facing === "west") {
      for (let i = 0; i < length; i++) {
        if (typeof this.getGameboard()[start[0] - i][start[1]] === "object")
          throw new Error("Overlap");
        this.getGameboard()[start[0] - i][start[1]] = newShip;
      }
    } else throw new Error("Invalid direction; must be north, east, south or west");
  }

  function receiveAttack(coords) {
    if (typeof this.getGameboard()[coords[0]][coords[1]] === "object") {
      this.getGameboard()[coords[0]][coords[1]].hit();
    } else gameboard[coords[0]][coords[1]] = -1;
  }

  function isAllSunk() {
    return 2;
  }

  return { getGameboard, place, receiveAttack, isAllSunk };
}

export { gameboardFactory };
