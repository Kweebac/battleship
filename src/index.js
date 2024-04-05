import "./normalize.css";
import "./style.css";

import { Player } from "./modules/player";
import { DOM } from "./modules/DOM";

const playerBoard = document.querySelector(".playerBoard");
const computerBoard = document.querySelector(".computerBoard");

DOM.createBoard(playerBoard);
DOM.createBoard(computerBoard);

DOM.eventListeners();

const computer = Player("Computer");
computer.board.computerPlace(5);
computer.board.computerPlace(4);
computer.board.computerPlace(3);
computer.board.computerPlace(3);
computer.board.computerPlace(2);
DOM.populateBoard(computerBoard, computer);

const player = Player("Player");
setTimeout(() => {
  player.board.playerPlace(5);
  DOM.populateBoard(playerBoard, player);
  setTimeout(() => {
    player.board.playerPlace(4);
    DOM.populateBoard(playerBoard, player);
    setTimeout(() => {
      player.board.playerPlace(3);
      DOM.populateBoard(playerBoard, player);
      setTimeout(() => {
        player.board.playerPlace(3);
        DOM.populateBoard(playerBoard, player);
        setTimeout(() => {
          player.board.playerPlace(2);
          DOM.populateBoard(playerBoard, player);
        }, 250);
      }, 250);
    }, 250);
  }, 250);
}, 250);

export { player, computer };
