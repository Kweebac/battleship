import { shipFactory } from "./ship";

it("Increases hits", () => {
  const newShip = shipFactory(4);
  expect(newShip.getHits()).toBe(0);
  newShip.hit();
  expect(newShip.getHits()).toBe(1);
});

it("Check if sunk", () => {
  const newShip = shipFactory(1);
  expect(newShip.getSunk()).toBe(false);
  newShip.hit();
  expect(newShip.getSunk()).toBe(true);
});
