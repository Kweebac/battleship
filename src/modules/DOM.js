const DOM = {
  playerTurn: true,

  createBoard: (board) => {
    for (let i = 1; i < 11; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.classList.add("playableSquare");
        board.children[i].appendChild(div);
      }
    }
  },

  populateBoard: (board, player) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const square = player.board.getGameboard()[i][j];
        if (typeof square === "object") {
          board.children[i + 1].children[
            j + 1
          ].innerHTML = `<svg data-name="boat" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>sail-boat</title><path d="M3 13.5L11 2.03V13.5H3M12.5 13.5C13.85 9.75 13.67 4.71 12.5 1C17.26 2.54 20.9 8.4 20.96 13.5H12.5M21.1 17.08C20.69 17.72 20.21 18.27 19.65 18.74C19 18.45 18.42 18 17.96 17.5C16.47 19.43 13.46 19.43 11.97 17.5C10.5 19.43 7.47 19.43 6 17.5C5.5 18 4.95 18.45 4.3 18.74C3.16 17.8 2.3 16.46 2 15H21.94C21.78 15.75 21.5 16.44 21.1 17.08M20.96 23C19.9 23 18.9 22.75 17.96 22.25C16.12 23.25 13.81 23.25 11.97 22.25C10.13 23.25 7.82 23.25 6 22.25C4.77 22.94 3.36 23.05 2 23V21C3.41 21.05 4.77 20.9 6 20C7.74 21.25 10.21 21.25 11.97 20C13.74 21.25 16.2 21.25 17.96 20C19.17 20.9 20.54 21.05 21.94 21V23H20.96Z" /></svg>`;
        } else if (square === true) {
          board.children[i + 1].children[
            j + 1
          ].innerHTML = `<svg data-name="sunk" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>sail-boat-sink</title><path d="M20.96 21C19.9 21 18.9 20.74 17.96 20.24C16.12 21.24 13.81 21.24 11.97 20.24C10.13 21.24 7.82 21.24 6 20.24C4.77 20.93 3.36 21.04 2 21V19C3.41 19.04 4.77 18.89 6 18C7.74 19.24 10.21 19.24 11.97 18C13.74 19.24 16.2 19.24 17.96 18C19.17 18.89 20.54 19.04 21.94 19V21H20.96M22 3.5L7.11 5.96L13.11 12.17L22 3.5M10.81 16.36L11.97 15.54L13.12 16.36C13.65 16.72 14.3 16.93 14.97 16.93C15.12 16.93 15.28 16.91 15.43 16.89L5.2 6.31C4.29 7.65 3.9 9.32 4 10.92L9.74 16.83C10.13 16.74 10.5 16.58 10.81 16.36Z" /></svg>`;
        } else if (square === false) {
          board.children[i + 1].children[
            j + 1
          ].innerHTML = `<svg data-name="miss" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x</title><path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z" /></svg>`;
        }
      }
    }
  },

  changeTurn: () => {
    const playerBoard = document.querySelector(".playerBoard");
    const computerBoard = document.querySelector(".computerBoard");

    if (!DOM.playerTurn) {
      DOM.playerTurn = true;
      computerBoard.id = "disabled";
      playerBoard.id = "";
    } else if (DOM.playerTurn) {
      DOM.playerTurn = false;
      playerBoard.id = "disabled";
      computerBoard.id = "";
    }
  },

  eventListeners: () => {
    const squares = document.querySelectorAll(".playableSquare");
    for (const square of squares) {
      square.onclick = (event) => {
        if (event.currentTarget.parentElement.parentElement.id === "disabled") return;
        DOM.changeTurn();
      };
    }
  },
};

export { DOM };
