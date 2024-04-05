import { computer, player } from "..";
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

    if (vertical === true) {
      // check for errors first
      for (let i = 0; i < length; i++) {
        if (typeof gameboard[start[0]][start[1] + i] === "object") throw new Error("Overlap");
        if (start[0] > 9 || start[0] < 0 || start[1] + i > 9 || start[1] + i < 0)
          throw new Error("Out of bounds");
      }

      for (let i = 0; i < length; i++) {
        gameboard[start[0]][start[1] + i] = newShip;
      }
    } else if (vertical === false) {
      // check for errors first
      for (let i = 0; i < length; i++) {
        if (typeof gameboard[start[0] + i][start[1]] === "object") throw new Error("Overlap");
        if (start[0] + i > 9 || start[0] + i < 0 || start[1] > 9 || start[1] < 0)
          throw new Error("Out of bounds");
      }

      for (let i = 0; i < length; i++) {
        gameboard[start[0] + i][start[1]] = newShip;
      }
    } else throw new Error("Invalid direction, vertical must be true or false");

    ships.push(newShip);
  }

  function computerPlace(length) {
    while (true) {
      let coords = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

      let vertical;
      if (Math.ceil(Math.random() * 2) === 1) vertical = true;
      else vertical = false;

      try {
        computer.board.place(length, coords, vertical);
        break;
      } catch (error) {
        continue;
      }
    }
  }

  function _convertCoords(ship) {
    ship = ship.replace(/\s/g, "").toLowerCase().split(",");
    ship[1] = +ship[1];
    if (ship[2] === "true") ship[2] = true;
    else if (ship[2] === "false") ship[2] = false;

    if (
      ship.length > 3 ||
      typeof ship[0] !== "string" ||
      typeof ship[1] !== "number" ||
      isNaN(ship[1]) ||
      (ship[2] !== true && ship[2] !== false)
    )
      throw new Error("Invalid coordinates");

    if (ship[0] === "a") ship[0] = 0;
    else if (ship[0] === "b") ship[0] = 1;
    else if (ship[0] === "c") ship[0] = 2;
    else if (ship[0] === "d") ship[0] = 3;
    else if (ship[0] === "e") ship[0] = 4;
    else if (ship[0] === "f") ship[0] = 5;
    else if (ship[0] === "g") ship[0] = 6;
    else if (ship[0] === "h") ship[0] = 7;
    else if (ship[0] === "i") ship[0] = 8;
    else if (ship[0] === "j") ship[0] = 9;

    if (ship[0] < 0 || ship[0] > 9 || ship[1] < 0 || ship[1] > 9)
      throw new Error("Invalid coordinates");
    else return [[ship[0], ship[1]], ship[2]];
  }

  function playerPlace(length) {
    let ship = undefined;

    while (true) {
      try {
        ship = _convertCoords(
          prompt(
            `Input coords & vertical rotation for ${length} length ship (letter, number, true/false)`
          )
        );
      } catch (error) {
        continue;
      }
      try {
        player.board.place(length, ship[0], ship[1]);
        break;
      } catch (error) {
        continue;
      }
    }
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

  return {
    getGameboard,
    place,
    computerPlace,
    playerPlace,
    receiveAttack,
    hasAllSunk,
    randomSquare,
  };
}

export { Gameboard };
