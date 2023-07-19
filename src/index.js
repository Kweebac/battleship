import "./normalize.css";
import "./style.css";
import { shipFactory } from "./modules/ship";
import { gameboardFactory } from "./modules/gameboard";

const newGame = gameboardFactory();
newGame.place(2, [0, 0], "east");
newGame.getGameboard()[0][0].hit();

export { newGame };
