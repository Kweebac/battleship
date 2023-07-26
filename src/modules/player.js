import { Gameboard } from "./gameboard";

function Player(name) {
  const board = Gameboard();

  return { name, board };
}

export { Player };
