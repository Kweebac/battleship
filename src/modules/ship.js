import { newGame } from "..";

function shipFactory(length) {
  let hits = 0;
  let sunk = false;

  function hit() {
    hits++;
    _isSunk();
    if (getSunk()) newGame.isAllSunk();
  }

  function _isSunk() {
    if (getLength() === getHits()) sunk = true;
  }

  function getHits() {
    return hits;
  }

  function getLength() {
    return length;
  }

  function getSunk() {
    return sunk;
  }

  return { getLength, getHits, getSunk, hit };
}

export { shipFactory };
