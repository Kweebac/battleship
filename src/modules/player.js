import { Gameboard } from "./gameboard";

// take turns playing
// computer makes legal, random moves
// player can attack, take turns
function Player(name) {
  const board = Gameboard();

  return { name, board };
}

export { Player };

// computer clicks random spot on board that isnt true or false
