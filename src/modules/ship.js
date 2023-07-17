function shipFactory(length) {
  let hits = 0;
  let sunk = false;

  const hit = function () {
    this.hits++;
    _isSunk.call(this);
  };

  const _isSunk = function () {
    if (this.length === this.hits) this.sunk = true;
  };

  return { length, hits, sunk, hit };
}

export { shipFactory };
