import "./normalize.css";
import "./style.css";
import { Player } from "./modules/player";
import { DOM } from "./modules/DOM";

const playerBoard = document.querySelector(".playerBoard");
const computerBoard = document.querySelector(".computerBoard");

DOM.createBoard(playerBoard);
DOM.createBoard(computerBoard);

DOM.eventListeners();

const player = Player("Player");
player.board.place(1, [0, 0], false);
DOM.populateBoard(playerBoard, player);

const computer = Player("Computer");
computer.board.place(1, [5, 8], true);
DOM.populateBoard(computerBoard, computer);

export { player, computer };

// get rid of playerTurn system
// create drag and drop
