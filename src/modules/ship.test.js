import { shipFactory } from "./ship";

it("Increases hits", () => {
  const newShip = shipFactory(4);
  expect(newShip.hits).toBe(0);
  newShip.hit();
  expect(newShip.hits).toBe(1);
});

it("Check if sunk", () => {
  const newShip = shipFactory(1);
  expect(newShip.sunk).toBe(false);
  newShip.hit();
  expect(newShip.sunk).toBe(true);
});
