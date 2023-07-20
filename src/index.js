import "./normalize.css";
import "./style.css";
import { Player } from "./modules/player";
import { DOM } from "./modules/DOM";

const playerBoard = document.querySelector(".playerBoard");
const computerBoard = document.querySelector(".computerBoard");

DOM.createBoard(playerBoard);
DOM.createBoard(computerBoard);

const player = Player("Kweebac");
player.board.place(3, [0, 0], false);
player.board.place(5, [3, 4], true);
player.board.place(2, [6, 4], true);
DOM.populateBoard(playerBoard, player);

const computer = Player("Computer");
computer.board.place(3, [1, 0], false);
computer.board.place(2, [5, 9], true); // should give error
DOM.populateBoard(computerBoard, computer);

// DOM.populateBoard(computerBoard);
