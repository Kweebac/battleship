import "./normalize.css";
import "./style.css";
import { Player } from "./modules/player";
import { DOM } from "./modules/DOM";

const playerBoard = document.querySelector(".playerBoard");
const computerBoard = document.querySelector(".computerBoard");

DOM.createBoard(playerBoard);
DOM.createBoard(computerBoard);

DOM.eventListeners();

const player = Player("Kweebac");
player.board.place(3, [0, 0], false);
player.board.place(5, [3, 4], true);
player.board.place(2, [6, 4], true);
DOM.populateBoard(playerBoard, player);

const computer = Player("Computer");
computer.board.place(2, [5, 8], true);
DOM.populateBoard(computerBoard, computer);

export { player, computer };

// on game end stop game
// write winner message
// make computer board impossible to see
