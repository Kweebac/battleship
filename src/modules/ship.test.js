import { Ship } from "./ship";

it("Increases hits", () => {
  const newShip = Ship(4);
  expect(newShip.getHits()).toBe(0);
  newShip.hit();
  expect(newShip.getHits()).toBe(1);
});

it("Check if sunk", () => {
  const newShip = Ship(1);
  expect(newShip.getSunk()).toBe(false);
  newShip.hit();
  expect(newShip.getSunk()).toBe(true);
});
