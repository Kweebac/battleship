import "./normalize.css";
import "./style.css";
import { Player } from "./modules/player";

const player1 = Player("Kweebac");

player1.board.place(1, [0, 0], false);

player1.board.getGameboard()[0][0].hit();
if (player1.board.getGameboard()[0][0].getSunk()) console.log(player1.board.hasAllSunk());

const computer = Player("A1yssa");
computer.board.place(4, [0, 0], true);
