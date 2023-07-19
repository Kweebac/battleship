function Ship(length) {
  let hits = 0;
  let sunk = false;

  function hit() {
    hits++;
    hasSunk();
  }

  function hasSunk() {
    if (length === hits) sunk = true;
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

  return { hit, hasSunk, getLength, getHits, getSunk };
}

export { Ship };
