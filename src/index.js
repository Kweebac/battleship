import "./normalize.css";
import "./style.css";
import { gameboardFactory } from "./modules/gameboard";

const newGame = gameboardFactory();
newGame.place(4, [6, 2], "east");
newGame.place(4, [6, 2], "east");
console.log(newGame.gameboard);
