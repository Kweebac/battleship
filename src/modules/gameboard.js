import { Ship } from "./ship";

function Gameboard() {
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

  let ships = [];

  function getGameboard() {
    return gameboard;
  }

  function place(length, start, vertical) {
    const newShip = Ship(length);
    ships.push(newShip);

    if (vertical === true) {
      for (let i = 0; i < length; i++) {
        if (typeof gameboard[start[0]][start[1] + i] === "object") throw new Error("Overlap");
        if (start[0] > 9 || start[0] < 0 || start[1] + i > 9 || start[1] + i < 0)
          throw new Error("Out of bounds");
        gameboard[start[0]][start[1] + i] = newShip;
      }
    } else if (vertical === false) {
      for (let i = 0; i < length; i++) {
        if (typeof gameboard[start[0] + i][start[1]] === "object") throw new Error("Overlap");
        if (start[0] + i > 9 || start[0] + i < 0 || start[1] > 9 || start[1] < 0)
          throw new Error("Out of bounds");
        gameboard[start[0] + i][start[1]] = newShip;
      }
    } else throw new Error("Invalid direction, vertical must be true or false");
  }

  function receiveAttack(coords) {
    if (gameboard[coords[0]][coords[1]] === true || gameboard[coords[0]][coords[1]] === false)
      throw new Error("Can't hit the same square twice");
    else if (typeof gameboard[coords[0]][coords[1]] === "object") {
      gameboard[coords[0]][coords[1]].hit();
      gameboard[coords[0]][coords[1]] = true;
      if (hasAllSunk()) return "Win";
    } else if (gameboard[coords[0]][coords[1]] === undefined)
      gameboard[coords[0]][coords[1]] = false;
  }

  function hasAllSunk() {
    for (const ship of ships) {
      if (!ship.getSunk()) return false;
    }
    return true;
  }

  function randomSquare() {
    let randNum1 = Math.floor(Math.random() * 10);
    let randNum2 = Math.floor(Math.random() * 10);
    while (gameboard[randNum1][randNum2] === true || gameboard[randNum1][randNum2] === false) {
      randNum1 = Math.floor(Math.random() * 10);
      randNum2 = Math.floor(Math.random() * 10);
    }
    return [randNum1, randNum2];
  }

  return { getGameboard, place, receiveAttack, hasAllSunk, randomSquare };
}

export { Gameboard };
