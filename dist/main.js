/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computer: () => (/* binding */ computer),
/* harmony export */   player: () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player */ "./src/modules/player.js");
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");




const playerBoard = document.querySelector(".playerBoard");
const computerBoard = document.querySelector(".computerBoard");
_modules_DOM__WEBPACK_IMPORTED_MODULE_3__.DOM.createBoard(playerBoard);
_modules_DOM__WEBPACK_IMPORTED_MODULE_3__.DOM.createBoard(computerBoard);
_modules_DOM__WEBPACK_IMPORTED_MODULE_3__.DOM.eventListeners();
const computer = (0,_modules_player__WEBPACK_IMPORTED_MODULE_2__.Player)("Computer");
computer.board.computerPlace(5);
computer.board.computerPlace(4);
computer.board.computerPlace(3);
computer.board.computerPlace(3);
computer.board.computerPlace(2);
_modules_DOM__WEBPACK_IMPORTED_MODULE_3__.DOM.populateBoard(computerBoard, computer);
const player = (0,_modules_player__WEBPACK_IMPORTED_MODULE_2__.Player)("Player");
setTimeout(() => {
  player.board.playerPlace(5);
  _modules_DOM__WEBPACK_IMPORTED_MODULE_3__.DOM.populateBoard(playerBoard, player);
  setTimeout(() => {
    player.board.playerPlace(4);
    _modules_DOM__WEBPACK_IMPORTED_MODULE_3__.DOM.populateBoard(playerBoard, player);
    setTimeout(() => {
      player.board.playerPlace(3);
      _modules_DOM__WEBPACK_IMPORTED_MODULE_3__.DOM.populateBoard(playerBoard, player);
      setTimeout(() => {
        player.board.playerPlace(3);
        _modules_DOM__WEBPACK_IMPORTED_MODULE_3__.DOM.populateBoard(playerBoard, player);
        setTimeout(() => {
          player.board.playerPlace(2);
          _modules_DOM__WEBPACK_IMPORTED_MODULE_3__.DOM.populateBoard(playerBoard, player);
        }, 250);
      }, 250);
    }, 250);
  }, 250);
}, 250);


/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOM: () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");

let queue = [];
let first = false;
const DOM = {
  createBoard: board => {
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
          if (player.name === "Player") {
            board.children[i + 1].children[j + 1].innerHTML = `<svg data-name="boat" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>sail-boat</title><path d="M3 13.5L11 2.03V13.5H3M12.5 13.5C13.85 9.75 13.67 4.71 12.5 1C17.26 2.54 20.9 8.4 20.96 13.5H12.5M21.1 17.08C20.69 17.72 20.21 18.27 19.65 18.74C19 18.45 18.42 18 17.96 17.5C16.47 19.43 13.46 19.43 11.97 17.5C10.5 19.43 7.47 19.43 6 17.5C5.5 18 4.95 18.45 4.3 18.74C3.16 17.8 2.3 16.46 2 15H21.94C21.78 15.75 21.5 16.44 21.1 17.08M20.96 23C19.9 23 18.9 22.75 17.96 22.25C16.12 23.25 13.81 23.25 11.97 22.25C10.13 23.25 7.82 23.25 6 22.25C4.77 22.94 3.36 23.05 2 23V21C3.41 21.05 4.77 20.9 6 20C7.74 21.25 10.21 21.25 11.97 20C13.74 21.25 16.2 21.25 17.96 20C19.17 20.9 20.54 21.05 21.94 21V23H20.96Z" /></svg>`;
          }
        } else if (square === true) {
          board.children[i + 1].children[j + 1].innerHTML = `<svg data-name="sunk" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>sail-boat-sink</title><path d="M20.96 21C19.9 21 18.9 20.74 17.96 20.24C16.12 21.24 13.81 21.24 11.97 20.24C10.13 21.24 7.82 21.24 6 20.24C4.77 20.93 3.36 21.04 2 21V19C3.41 19.04 4.77 18.89 6 18C7.74 19.24 10.21 19.24 11.97 18C13.74 19.24 16.2 19.24 17.96 18C19.17 18.89 20.54 19.04 21.94 19V21H20.96M22 3.5L7.11 5.96L13.11 12.17L22 3.5M10.81 16.36L11.97 15.54L13.12 16.36C13.65 16.72 14.3 16.93 14.97 16.93C15.12 16.93 15.28 16.91 15.43 16.89L5.2 6.31C4.29 7.65 3.9 9.32 4 10.92L9.74 16.83C10.13 16.74 10.5 16.58 10.81 16.36Z" /></svg>`;
        } else if (square === false) {
          board.children[i + 1].children[j + 1].innerHTML = `<svg data-name="miss" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x</title><path d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z" /></svg>`;
        }
      }
    }
  },
  getSquareCoords: event => {
    let squareCoords = [];
    for (let i = 0; i < event.currentTarget.parentElement.parentElement.children.length; i++) {
      if (event.currentTarget.parentElement === event.currentTarget.parentElement.parentElement.children[i]) squareCoords.push(i - 1);
    }
    for (let i = 0; i < event.currentTarget.parentElement.children.length; i++) {
      if (event.currentTarget === event.currentTarget.parentElement.children[i]) squareCoords.push(i - 1);
    }
    return squareCoords;
  },
  isAttackable: squareCoords => {
    if (squareCoords[0] >= 0 && squareCoords[0] < 10 && squareCoords[1] >= 0 && squareCoords[1] < 10 && ___WEBPACK_IMPORTED_MODULE_0__.player.board.getGameboard()[squareCoords[0]][squareCoords[1]] !== true && ___WEBPACK_IMPORTED_MODULE_0__.player.board.getGameboard()[squareCoords[0]][squareCoords[1]] !== false) return true;else return false;
  },
  attack: (squareCoords, user) => {
    if (user.name === "Player") {
      if (queue.length) {
        const shiftedItem = queue.shift();
        squareCoords = shiftedItem.coords;
        if (typeof ___WEBPACK_IMPORTED_MODULE_0__.player.board.getGameboard()[squareCoords[0]][squareCoords[1]] === "object") {
          if (shiftedItem.vertical) {
            if (first) {
              for (let i = 0; i < queue.length; i++) {
                if (!queue[i].vertical) queue.splice(i, 1);
              }
            }
            if (DOM.isAttackable([squareCoords[0], squareCoords[1] - 1])) queue.push({
              coords: [squareCoords[0], squareCoords[1] - 1],
              vertical: true
            });
            if (DOM.isAttackable([squareCoords[0], squareCoords[1] + 1])) queue.push({
              coords: [squareCoords[0], squareCoords[1] + 1],
              vertical: true
            });
            first = false;
          } else if (!shiftedItem.vertical) {
            if (first) {
              for (let i = 0; i < queue.length; i++) {
                if (queue[i].vertical) queue.splice(i, 1);
              }
            }
            if (DOM.isAttackable([squareCoords[0] + 1, squareCoords[1]])) queue.push({
              coords: [squareCoords[0] + 1, squareCoords[1]],
              vertical: false
            });
            if (DOM.isAttackable([squareCoords[0] - 1, squareCoords[1]])) queue.push({
              coords: [squareCoords[0] - 1, squareCoords[1]],
              vertical: false
            });
            first = false;
          }
        }
      } else if (!queue.length && typeof ___WEBPACK_IMPORTED_MODULE_0__.player.board.getGameboard()[squareCoords[0]][squareCoords[1]] === "object") {
        if (DOM.isAttackable([squareCoords[0], squareCoords[1] - 1])) queue.push({
          coords: [squareCoords[0], squareCoords[1] - 1],
          vertical: true
        });
        if (DOM.isAttackable([squareCoords[0] + 1, squareCoords[1]])) queue.push({
          coords: [squareCoords[0] + 1, squareCoords[1]],
          vertical: false
        });
        if (DOM.isAttackable([squareCoords[0], squareCoords[1] + 1])) queue.push({
          coords: [squareCoords[0], squareCoords[1] + 1],
          vertical: true
        });
        if (DOM.isAttackable([squareCoords[0] - 1, squareCoords[1]])) queue.push({
          coords: [squareCoords[0] - 1, squareCoords[1]],
          vertical: false
        });
        first = true;
      }
    }
    const winnerContainer = document.querySelector(".winner-container");
    if (user.board.receiveAttack(squareCoords) === "Win") {
      winnerContainer.children[0].textContent = user.name === "Player" ? "Computer wins!" : "Player wins!";
      winnerContainer.style.visibility = "visible";
    }
  },
  eventListeners: () => {
    const squares = document.querySelectorAll(".playableSquare");
    for (const square of squares) {
      square.onclick = event => {
        if (event.currentTarget.parentElement.parentElement.id === "disabled") return;
        try {
          DOM.attack(DOM.getSquareCoords(event), ___WEBPACK_IMPORTED_MODULE_0__.computer);
        } catch (error) {
          return;
        }
        const playerBoard = document.querySelector(".playerBoard");
        const computerBoard = document.querySelector(".computerBoard");
        DOM.populateBoard(computerBoard, ___WEBPACK_IMPORTED_MODULE_0__.computer);
        try {
          DOM.attack(___WEBPACK_IMPORTED_MODULE_0__.player.board.randomSquare(), ___WEBPACK_IMPORTED_MODULE_0__.player);
        } catch (error) {
          return;
        }
        DOM.populateBoard(playerBoard, ___WEBPACK_IMPORTED_MODULE_0__.player);
      };
    }
  }
};


/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");


function Gameboard() {
  let gameboard = [];
  for (let i = 0; i < 10; i++) {
    gameboard.push([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
  }
  let ships = [];
  function getGameboard() {
    return gameboard;
  }
  function place(length, start, vertical) {
    const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.Ship)(length);
    if (vertical === true) {
      // check for errors first
      for (let i = 0; i < length; i++) {
        if (typeof gameboard[start[0]][start[1] + i] === "object") throw new Error("Overlap");
        if (start[0] > 9 || start[0] < 0 || start[1] + i > 9 || start[1] + i < 0) throw new Error("Out of bounds");
      }
      for (let i = 0; i < length; i++) {
        gameboard[start[0]][start[1] + i] = newShip;
      }
    } else if (vertical === false) {
      // check for errors first
      for (let i = 0; i < length; i++) {
        if (typeof gameboard[start[0] + i][start[1]] === "object") throw new Error("Overlap");
        if (start[0] + i > 9 || start[0] + i < 0 || start[1] > 9 || start[1] < 0) throw new Error("Out of bounds");
      }
      for (let i = 0; i < length; i++) {
        gameboard[start[0] + i][start[1]] = newShip;
      }
    } else throw new Error("Invalid direction, vertical must be true or false");
    ships.push(newShip);
  }
  function computerPlace(length) {
    while (true) {
      let coords = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      let vertical;
      if (Math.ceil(Math.random() * 2) === 1) vertical = true;else vertical = false;
      try {
        ___WEBPACK_IMPORTED_MODULE_0__.computer.board.place(length, coords, vertical);
        break;
      } catch (error) {
        continue;
      }
    }
  }
  function _convertCoords(ship) {
    ship = ship.replace(/\s/g, "").toLowerCase().split(",");
    ship[1] = +ship[1];
    if (ship[2] === "true") ship[2] = true;else if (ship[2] === "false") ship[2] = false;
    if (ship.length > 3 || typeof ship[0] !== "string" || typeof ship[1] !== "number" || isNaN(ship[1]) || ship[2] !== true && ship[2] !== false) throw new Error("Invalid coordinates");
    if (ship[0] === "a") ship[0] = 0;else if (ship[0] === "b") ship[0] = 1;else if (ship[0] === "c") ship[0] = 2;else if (ship[0] === "d") ship[0] = 3;else if (ship[0] === "e") ship[0] = 4;else if (ship[0] === "f") ship[0] = 5;else if (ship[0] === "g") ship[0] = 6;else if (ship[0] === "h") ship[0] = 7;else if (ship[0] === "i") ship[0] = 8;else if (ship[0] === "j") ship[0] = 9;
    if (ship[0] < 0 || ship[0] > 9 || ship[1] < 0 || ship[1] > 9) throw new Error("Invalid coordinates");else return [[ship[0], ship[1]], ship[2]];
  }
  function playerPlace(length) {
    let ship = undefined;
    while (true) {
      try {
        ship = _convertCoords(prompt(`Input coords & vertical rotation for ${length} length ship (letter, number, true/false)`));
      } catch (error) {
        continue;
      }
      try {
        ___WEBPACK_IMPORTED_MODULE_0__.player.board.place(length, ship[0], ship[1]);
        break;
      } catch (error) {
        continue;
      }
    }
  }
  function receiveAttack(coords) {
    if (gameboard[coords[0]][coords[1]] === true || gameboard[coords[0]][coords[1]] === false) throw new Error("Can't hit the same square twice");else if (typeof gameboard[coords[0]][coords[1]] === "object") {
      gameboard[coords[0]][coords[1]].hit();
      gameboard[coords[0]][coords[1]] = true;
      if (hasAllSunk()) return "Win";
    } else if (gameboard[coords[0]][coords[1]] === undefined) gameboard[coords[0]][coords[1]] = false;
  }
  function hasAllSunk() {
    for (const ship of ships) {
      if (!ship.getSunk()) return false;
    }
    return true;
  }
  function randomSquare() {
    let randNum1 = Math.floor(Math.random() * 10);
    let randNum2 = Math.floor(Math.random() * 10);
    while (gameboard[randNum1][randNum2] === true || gameboard[randNum1][randNum2] === false) {
      randNum1 = Math.floor(Math.random() * 10);
      randNum2 = Math.floor(Math.random() * 10);
    }
    return [randNum1, randNum2];
  }
  return {
    getGameboard,
    place,
    computerPlace,
    playerPlace,
    receiveAttack,
    hasAllSunk,
    randomSquare
  };
}


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");

function Player(name) {
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  return {
    name,
    board
  };
}


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length) {
  let hits = 0;
  let sunk = false;
  function hit() {
    hits++;
    hasSunk();
  }
  function hasSunk() {
    if (length === hits) sunk = true;
  }
  function getHits() {
    return hits;
  }
  function getLength() {
    return length;
  }
  function getSunk() {
    return sunk;
  }
  return {
    hit,
    hasSunk,
    getLength,
    getHits,
    getSunk
  };
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;;EAEE,MAAM;EACN,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;;EAEE,MAAM;EACN,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput {\r\n  /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  height: 100vh;

  display: grid;
  grid-auto-flow: column;
  place-items: center;
}

.playerName,
.computerName {
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
}
.playerName {
  top: 10rem;
  left: 27rem;
}
.computerName {
  top: 10rem;
  right: 23rem;
}

.board {
  width: max-content;
  height: calc(3rem * 11);

  display: grid;
  grid-auto-flow: column;
}

.board .square {
  box-sizing: border-box;

  font-size: 1.3rem;
  height: 3rem;
  width: 3rem;

  display: grid;
  place-items: center;
}
.board .playableSquare {
  border: 1px solid rgb(0, 208, 255);
  cursor: pointer;
}
.board .playableSquare svg {
  width: 2.5rem;
  height: 2.5rem;
}
.board .playableSquare svg[data-name="boat"] {
  color: rgb(0, 208, 255);
}
.board .playableSquare svg[data-name="sunk"] {
  color: rgb(255, 97, 97);
}
.board .playableSquare svg[data-name="miss"] {
  width: 2rem;
  height: 2rem;
}

.board#disabled .square {
  color: lightgray;
}
.board#disabled .playableSquare {
  border: 1px solid lightgray;
  cursor: default;
}
.board#disabled svg {
  color: lightgray;
}

.winner-container {
  position: absolute;
  height: 100vh;
  width: 100vw;

  display: grid;
  place-content: center;

  visibility: hidden;
}
.winner {
  background-color: gray;
  color: white;
  height: 10rem;
  width: 30rem;
  border-radius: 12px;
  border: 4px solid lightgray;
  font-size: 3rem;
  font-weight: bold;

  display: grid;
  place-content: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;;EAEb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;;EAEvB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;;EAEtB,iBAAiB;EACjB,YAAY;EACZ,WAAW;;EAEX,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,aAAa;EACb,cAAc;AAChB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,2BAA2B;EAC3B,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;;EAEZ,aAAa;EACb,qBAAqB;;EAErB,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,2BAA2B;EAC3B,eAAe;EACf,iBAAiB;;EAEjB,aAAa;EACb,qBAAqB;AACvB","sourcesContent":["body {\r\n  height: 100vh;\r\n\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n  place-items: center;\r\n}\r\n\r\n.playerName,\r\n.computerName {\r\n  position: absolute;\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n.playerName {\r\n  top: 10rem;\r\n  left: 27rem;\r\n}\r\n.computerName {\r\n  top: 10rem;\r\n  right: 23rem;\r\n}\r\n\r\n.board {\r\n  width: max-content;\r\n  height: calc(3rem * 11);\r\n\r\n  display: grid;\r\n  grid-auto-flow: column;\r\n}\r\n\r\n.board .square {\r\n  box-sizing: border-box;\r\n\r\n  font-size: 1.3rem;\r\n  height: 3rem;\r\n  width: 3rem;\r\n\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n.board .playableSquare {\r\n  border: 1px solid rgb(0, 208, 255);\r\n  cursor: pointer;\r\n}\r\n.board .playableSquare svg {\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n}\r\n.board .playableSquare svg[data-name=\"boat\"] {\r\n  color: rgb(0, 208, 255);\r\n}\r\n.board .playableSquare svg[data-name=\"sunk\"] {\r\n  color: rgb(255, 97, 97);\r\n}\r\n.board .playableSquare svg[data-name=\"miss\"] {\r\n  width: 2rem;\r\n  height: 2rem;\r\n}\r\n\r\n.board#disabled .square {\r\n  color: lightgray;\r\n}\r\n.board#disabled .playableSquare {\r\n  border: 1px solid lightgray;\r\n  cursor: default;\r\n}\r\n.board#disabled svg {\r\n  color: lightgray;\r\n}\r\n\r\n.winner-container {\r\n  position: absolute;\r\n  height: 100vh;\r\n  width: 100vw;\r\n\r\n  display: grid;\r\n  place-content: center;\r\n\r\n  visibility: hidden;\r\n}\r\n.winner {\r\n  background-color: gray;\r\n  color: white;\r\n  height: 10rem;\r\n  width: 30rem;\r\n  border-radius: 12px;\r\n  border: 4px solid lightgray;\r\n  font-size: 3rem;\r\n  font-weight: bold;\r\n\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5QixxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsY0FBYztBQUNkLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNEZBQTRGLE1BQU0sUUFBUSxRQUFRLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsdUJBQXVCLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLE9BQU8sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLDBXQUEwVyx5QkFBeUIsNkNBQTZDLFlBQVksZ0xB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QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL25vcm1hbGl6ZS5jc3M/Njg1NiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbm9ybWFsaXplLmNzc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vbW9kdWxlcy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4vbW9kdWxlcy9ET01cIjtcclxuXHJcbmNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJCb2FyZFwiKTtcclxuY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJCb2FyZFwiKTtcclxuXHJcbkRPTS5jcmVhdGVCb2FyZChwbGF5ZXJCb2FyZCk7XHJcbkRPTS5jcmVhdGVCb2FyZChjb21wdXRlckJvYXJkKTtcclxuXHJcbkRPTS5ldmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoXCJDb21wdXRlclwiKTtcclxuY29tcHV0ZXIuYm9hcmQuY29tcHV0ZXJQbGFjZSg1KTtcclxuY29tcHV0ZXIuYm9hcmQuY29tcHV0ZXJQbGFjZSg0KTtcclxuY29tcHV0ZXIuYm9hcmQuY29tcHV0ZXJQbGFjZSgzKTtcclxuY29tcHV0ZXIuYm9hcmQuY29tcHV0ZXJQbGFjZSgzKTtcclxuY29tcHV0ZXIuYm9hcmQuY29tcHV0ZXJQbGFjZSgyKTtcclxuRE9NLnBvcHVsYXRlQm9hcmQoY29tcHV0ZXJCb2FyZCwgY29tcHV0ZXIpO1xyXG5cclxuY29uc3QgcGxheWVyID0gUGxheWVyKFwiUGxheWVyXCIpO1xyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICBwbGF5ZXIuYm9hcmQucGxheWVyUGxhY2UoNSk7XHJcbiAgRE9NLnBvcHVsYXRlQm9hcmQocGxheWVyQm9hcmQsIHBsYXllcik7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBwbGF5ZXIuYm9hcmQucGxheWVyUGxhY2UoNCk7XHJcbiAgICBET00ucG9wdWxhdGVCb2FyZChwbGF5ZXJCb2FyZCwgcGxheWVyKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwbGF5ZXIuYm9hcmQucGxheWVyUGxhY2UoMyk7XHJcbiAgICAgIERPTS5wb3B1bGF0ZUJvYXJkKHBsYXllckJvYXJkLCBwbGF5ZXIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwbGF5ZXIuYm9hcmQucGxheWVyUGxhY2UoMyk7XHJcbiAgICAgICAgRE9NLnBvcHVsYXRlQm9hcmQocGxheWVyQm9hcmQsIHBsYXllcik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBwbGF5ZXIuYm9hcmQucGxheWVyUGxhY2UoMik7XHJcbiAgICAgICAgICBET00ucG9wdWxhdGVCb2FyZChwbGF5ZXJCb2FyZCwgcGxheWVyKTtcclxuICAgICAgICB9LCAyNTApO1xyXG4gICAgICB9LCAyNTApO1xyXG4gICAgfSwgMjUwKTtcclxuICB9LCAyNTApO1xyXG59LCAyNTApO1xyXG5cclxuZXhwb3J0IHsgcGxheWVyLCBjb21wdXRlciB9O1xyXG4iLCJpbXBvcnQgeyBjb21wdXRlciwgcGxheWVyIH0gZnJvbSBcIi4uXCI7XHJcblxyXG5sZXQgcXVldWUgPSBbXTtcclxubGV0IGZpcnN0ID0gZmFsc2U7XHJcblxyXG5jb25zdCBET00gPSB7XHJcbiAgY3JlYXRlQm9hcmQ6IChib2FyZCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwbGF5YWJsZVNxdWFyZVwiKTtcclxuICAgICAgICBib2FyZC5jaGlsZHJlbltpXS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcG9wdWxhdGVCb2FyZDogKGJvYXJkLCBwbGF5ZXIpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICBjb25zdCBzcXVhcmUgPSBwbGF5ZXIuYm9hcmQuZ2V0R2FtZWJvYXJkKClbaV1bal07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzcXVhcmUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgIGlmIChwbGF5ZXIubmFtZSA9PT0gXCJQbGF5ZXJcIikge1xyXG4gICAgICAgICAgICBib2FyZC5jaGlsZHJlbltpICsgMV0uY2hpbGRyZW5bXHJcbiAgICAgICAgICAgICAgaiArIDFcclxuICAgICAgICAgICAgXS5pbm5lckhUTUwgPSBgPHN2ZyBkYXRhLW5hbWU9XCJib2F0XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnNhaWwtYm9hdDwvdGl0bGU+PHBhdGggZD1cIk0zIDEzLjVMMTEgMi4wM1YxMy41SDNNMTIuNSAxMy41QzEzLjg1IDkuNzUgMTMuNjcgNC43MSAxMi41IDFDMTcuMjYgMi41NCAyMC45IDguNCAyMC45NiAxMy41SDEyLjVNMjEuMSAxNy4wOEMyMC42OSAxNy43MiAyMC4yMSAxOC4yNyAxOS42NSAxOC43NEMxOSAxOC40NSAxOC40MiAxOCAxNy45NiAxNy41QzE2LjQ3IDE5LjQzIDEzLjQ2IDE5LjQzIDExLjk3IDE3LjVDMTAuNSAxOS40MyA3LjQ3IDE5LjQzIDYgMTcuNUM1LjUgMTggNC45NSAxOC40NSA0LjMgMTguNzRDMy4xNiAxNy44IDIuMyAxNi40NiAyIDE1SDIxLjk0QzIxLjc4IDE1Ljc1IDIxLjUgMTYuNDQgMjEuMSAxNy4wOE0yMC45NiAyM0MxOS45IDIzIDE4LjkgMjIuNzUgMTcuOTYgMjIuMjVDMTYuMTIgMjMuMjUgMTMuODEgMjMuMjUgMTEuOTcgMjIuMjVDMTAuMTMgMjMuMjUgNy44MiAyMy4yNSA2IDIyLjI1QzQuNzcgMjIuOTQgMy4zNiAyMy4wNSAyIDIzVjIxQzMuNDEgMjEuMDUgNC43NyAyMC45IDYgMjBDNy43NCAyMS4yNSAxMC4yMSAyMS4yNSAxMS45NyAyMEMxMy43NCAyMS4yNSAxNi4yIDIxLjI1IDE3Ljk2IDIwQzE5LjE3IDIwLjkgMjAuNTQgMjEuMDUgMjEuOTQgMjFWMjNIMjAuOTZaXCIgLz48L3N2Zz5gO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBib2FyZC5jaGlsZHJlbltpICsgMV0uY2hpbGRyZW5bXHJcbiAgICAgICAgICAgIGogKyAxXHJcbiAgICAgICAgICBdLmlubmVySFRNTCA9IGA8c3ZnIGRhdGEtbmFtZT1cInN1bmtcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+c2FpbC1ib2F0LXNpbms8L3RpdGxlPjxwYXRoIGQ9XCJNMjAuOTYgMjFDMTkuOSAyMSAxOC45IDIwLjc0IDE3Ljk2IDIwLjI0QzE2LjEyIDIxLjI0IDEzLjgxIDIxLjI0IDExLjk3IDIwLjI0QzEwLjEzIDIxLjI0IDcuODIgMjEuMjQgNiAyMC4yNEM0Ljc3IDIwLjkzIDMuMzYgMjEuMDQgMiAyMVYxOUMzLjQxIDE5LjA0IDQuNzcgMTguODkgNiAxOEM3Ljc0IDE5LjI0IDEwLjIxIDE5LjI0IDExLjk3IDE4QzEzLjc0IDE5LjI0IDE2LjIgMTkuMjQgMTcuOTYgMThDMTkuMTcgMTguODkgMjAuNTQgMTkuMDQgMjEuOTQgMTlWMjFIMjAuOTZNMjIgMy41TDcuMTEgNS45NkwxMy4xMSAxMi4xN0wyMiAzLjVNMTAuODEgMTYuMzZMMTEuOTcgMTUuNTRMMTMuMTIgMTYuMzZDMTMuNjUgMTYuNzIgMTQuMyAxNi45MyAxNC45NyAxNi45M0MxNS4xMiAxNi45MyAxNS4yOCAxNi45MSAxNS40MyAxNi44OUw1LjIgNi4zMUM0LjI5IDcuNjUgMy45IDkuMzIgNCAxMC45Mkw5Ljc0IDE2LjgzQzEwLjEzIDE2Ljc0IDEwLjUgMTYuNTggMTAuODEgMTYuMzZaXCIgLz48L3N2Zz5gO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgYm9hcmQuY2hpbGRyZW5baSArIDFdLmNoaWxkcmVuW1xyXG4gICAgICAgICAgICBqICsgMVxyXG4gICAgICAgICAgXS5pbm5lckhUTUwgPSBgPHN2ZyBkYXRhLW5hbWU9XCJtaXNzXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmFscGhhLXg8L3RpdGxlPjxwYXRoIGQ9XCJNOSw3TDExLDEyTDksMTdIMTFMMTIsMTQuNUwxMywxN0gxNUwxMywxMkwxNSw3SDEzTDEyLDkuNUwxMSw3SDlaXCIgLz48L3N2Zz5gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGdldFNxdWFyZUNvb3JkczogKGV2ZW50KSA9PiB7XHJcbiAgICBsZXQgc3F1YXJlQ29vcmRzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50ID09PVxyXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuW2ldXHJcbiAgICAgIClcclxuICAgICAgICBzcXVhcmVDb29yZHMucHVzaChpIC0gMSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuW2ldKVxyXG4gICAgICAgIHNxdWFyZUNvb3Jkcy5wdXNoKGkgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3F1YXJlQ29vcmRzO1xyXG4gIH0sXHJcblxyXG4gIGlzQXR0YWNrYWJsZTogKHNxdWFyZUNvb3JkcykgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBzcXVhcmVDb29yZHNbMF0gPj0gMCAmJlxyXG4gICAgICBzcXVhcmVDb29yZHNbMF0gPCAxMCAmJlxyXG4gICAgICBzcXVhcmVDb29yZHNbMV0gPj0gMCAmJlxyXG4gICAgICBzcXVhcmVDb29yZHNbMV0gPCAxMCAmJlxyXG4gICAgICBwbGF5ZXIuYm9hcmQuZ2V0R2FtZWJvYXJkKClbc3F1YXJlQ29vcmRzWzBdXVtzcXVhcmVDb29yZHNbMV1dICE9PSB0cnVlICYmXHJcbiAgICAgIHBsYXllci5ib2FyZC5nZXRHYW1lYm9hcmQoKVtzcXVhcmVDb29yZHNbMF1dW3NxdWFyZUNvb3Jkc1sxXV0gIT09IGZhbHNlXHJcbiAgICApXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgYXR0YWNrOiAoc3F1YXJlQ29vcmRzLCB1c2VyKSA9PiB7XHJcbiAgICBpZiAodXNlci5uYW1lID09PSBcIlBsYXllclwiKSB7XHJcbiAgICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBzaGlmdGVkSXRlbSA9IHF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgc3F1YXJlQ29vcmRzID0gc2hpZnRlZEl0ZW0uY29vcmRzO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0eXBlb2YgcGxheWVyLmJvYXJkLmdldEdhbWVib2FyZCgpW3NxdWFyZUNvb3Jkc1swXV1bc3F1YXJlQ29vcmRzWzFdXSA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKHNoaWZ0ZWRJdGVtLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdCkge1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghcXVldWVbaV0udmVydGljYWwpIHF1ZXVlLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChET00uaXNBdHRhY2thYmxlKFtzcXVhcmVDb29yZHNbMF0sIHNxdWFyZUNvb3Jkc1sxXSAtIDFdKSlcclxuICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHsgY29vcmRzOiBbc3F1YXJlQ29vcmRzWzBdLCBzcXVhcmVDb29yZHNbMV0gLSAxXSwgdmVydGljYWw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGlmIChET00uaXNBdHRhY2thYmxlKFtzcXVhcmVDb29yZHNbMF0sIHNxdWFyZUNvb3Jkc1sxXSArIDFdKSlcclxuICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHsgY29vcmRzOiBbc3F1YXJlQ29vcmRzWzBdLCBzcXVhcmVDb29yZHNbMV0gKyAxXSwgdmVydGljYWw6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICghc2hpZnRlZEl0ZW0udmVydGljYWwpIHtcclxuICAgICAgICAgICAgaWYgKGZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlW2ldLnZlcnRpY2FsKSBxdWV1ZS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmlzQXR0YWNrYWJsZShbc3F1YXJlQ29vcmRzWzBdICsgMSwgc3F1YXJlQ29vcmRzWzFdXSkpXHJcbiAgICAgICAgICAgICAgcXVldWUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjb29yZHM6IFtzcXVhcmVDb29yZHNbMF0gKyAxLCBzcXVhcmVDb29yZHNbMV1dLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoRE9NLmlzQXR0YWNrYWJsZShbc3F1YXJlQ29vcmRzWzBdIC0gMSwgc3F1YXJlQ29vcmRzWzFdXSkpXHJcbiAgICAgICAgICAgICAgcXVldWUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjb29yZHM6IFtzcXVhcmVDb29yZHNbMF0gLSAxLCBzcXVhcmVDb29yZHNbMV1dLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgIXF1ZXVlLmxlbmd0aCAmJlxyXG4gICAgICAgIHR5cGVvZiBwbGF5ZXIuYm9hcmQuZ2V0R2FtZWJvYXJkKClbc3F1YXJlQ29vcmRzWzBdXVtzcXVhcmVDb29yZHNbMV1dID09PSBcIm9iamVjdFwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChET00uaXNBdHRhY2thYmxlKFtzcXVhcmVDb29yZHNbMF0sIHNxdWFyZUNvb3Jkc1sxXSAtIDFdKSlcclxuICAgICAgICAgIHF1ZXVlLnB1c2goeyBjb29yZHM6IFtzcXVhcmVDb29yZHNbMF0sIHNxdWFyZUNvb3Jkc1sxXSAtIDFdLCB2ZXJ0aWNhbDogdHJ1ZSB9KTtcclxuICAgICAgICBpZiAoRE9NLmlzQXR0YWNrYWJsZShbc3F1YXJlQ29vcmRzWzBdICsgMSwgc3F1YXJlQ29vcmRzWzFdXSkpXHJcbiAgICAgICAgICBxdWV1ZS5wdXNoKHsgY29vcmRzOiBbc3F1YXJlQ29vcmRzWzBdICsgMSwgc3F1YXJlQ29vcmRzWzFdXSwgdmVydGljYWw6IGZhbHNlIH0pO1xyXG4gICAgICAgIGlmIChET00uaXNBdHRhY2thYmxlKFtzcXVhcmVDb29yZHNbMF0sIHNxdWFyZUNvb3Jkc1sxXSArIDFdKSlcclxuICAgICAgICAgIHF1ZXVlLnB1c2goeyBjb29yZHM6IFtzcXVhcmVDb29yZHNbMF0sIHNxdWFyZUNvb3Jkc1sxXSArIDFdLCB2ZXJ0aWNhbDogdHJ1ZSB9KTtcclxuICAgICAgICBpZiAoRE9NLmlzQXR0YWNrYWJsZShbc3F1YXJlQ29vcmRzWzBdIC0gMSwgc3F1YXJlQ29vcmRzWzFdXSkpXHJcbiAgICAgICAgICBxdWV1ZS5wdXNoKHsgY29vcmRzOiBbc3F1YXJlQ29vcmRzWzBdIC0gMSwgc3F1YXJlQ29vcmRzWzFdXSwgdmVydGljYWw6IGZhbHNlIH0pO1xyXG4gICAgICAgIGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdpbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLWNvbnRhaW5lclwiKTtcclxuICAgIGlmICh1c2VyLmJvYXJkLnJlY2VpdmVBdHRhY2soc3F1YXJlQ29vcmRzKSA9PT0gXCJXaW5cIikge1xyXG4gICAgICB3aW5uZXJDb250YWluZXIuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPVxyXG4gICAgICAgIHVzZXIubmFtZSA9PT0gXCJQbGF5ZXJcIiA/IFwiQ29tcHV0ZXIgd2lucyFcIiA6IFwiUGxheWVyIHdpbnMhXCI7XHJcbiAgICAgIHdpbm5lckNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZXZlbnRMaXN0ZW5lcnM6ICgpID0+IHtcclxuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXlhYmxlU3F1YXJlXCIpO1xyXG4gICAgZm9yIChjb25zdCBzcXVhcmUgb2Ygc3F1YXJlcykge1xyXG4gICAgICBzcXVhcmUub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCA9PT0gXCJkaXNhYmxlZFwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBET00uYXR0YWNrKERPTS5nZXRTcXVhcmVDb29yZHMoZXZlbnQpLCBjb21wdXRlcik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJCb2FyZFwiKTtcclxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlckJvYXJkXCIpO1xyXG4gICAgICAgIERPTS5wb3B1bGF0ZUJvYXJkKGNvbXB1dGVyQm9hcmQsIGNvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIERPTS5hdHRhY2socGxheWVyLmJvYXJkLnJhbmRvbVNxdWFyZSgpLCBwbGF5ZXIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBET00ucG9wdWxhdGVCb2FyZChwbGF5ZXJCb2FyZCwgcGxheWVyKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgRE9NIH07XHJcbiIsImltcG9ydCB7IGNvbXB1dGVyLCBwbGF5ZXIgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcclxuICBsZXQgZ2FtZWJvYXJkID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBnYW1lYm9hcmQucHVzaChbXHJcbiAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICB1bmRlZmluZWQsXHJcbiAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICB1bmRlZmluZWQsXHJcbiAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICB1bmRlZmluZWQsXHJcbiAgICAgIHVuZGVmaW5lZCxcclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgbGV0IHNoaXBzID0gW107XHJcblxyXG4gIGZ1bmN0aW9uIGdldEdhbWVib2FyZCgpIHtcclxuICAgIHJldHVybiBnYW1lYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZShsZW5ndGgsIHN0YXJ0LCB2ZXJ0aWNhbCkge1xyXG4gICAgY29uc3QgbmV3U2hpcCA9IFNoaXAobGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodmVydGljYWwgPT09IHRydWUpIHtcclxuICAgICAgLy8gY2hlY2sgZm9yIGVycm9ycyBmaXJzdFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnYW1lYm9hcmRbc3RhcnRbMF1dW3N0YXJ0WzFdICsgaV0gPT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIk92ZXJsYXBcIik7XHJcbiAgICAgICAgaWYgKHN0YXJ0WzBdID4gOSB8fCBzdGFydFswXSA8IDAgfHwgc3RhcnRbMV0gKyBpID4gOSB8fCBzdGFydFsxXSArIGkgPCAwKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT3V0IG9mIGJvdW5kc1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdhbWVib2FyZFtzdGFydFswXV1bc3RhcnRbMV0gKyBpXSA9IG5ld1NoaXA7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIGNoZWNrIGZvciBlcnJvcnMgZmlyc3RcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2FtZWJvYXJkW3N0YXJ0WzBdICsgaV1bc3RhcnRbMV1dID09PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJPdmVybGFwXCIpO1xyXG4gICAgICAgIGlmIChzdGFydFswXSArIGkgPiA5IHx8IHN0YXJ0WzBdICsgaSA8IDAgfHwgc3RhcnRbMV0gPiA5IHx8IHN0YXJ0WzFdIDwgMClcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk91dCBvZiBib3VuZHNcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBnYW1lYm9hcmRbc3RhcnRbMF0gKyBpXVtzdGFydFsxXV0gPSBuZXdTaGlwO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkaXJlY3Rpb24sIHZlcnRpY2FsIG11c3QgYmUgdHJ1ZSBvciBmYWxzZVwiKTtcclxuXHJcbiAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY29tcHV0ZXJQbGFjZShsZW5ndGgpIHtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgIGxldCBjb29yZHMgPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xyXG5cclxuICAgICAgbGV0IHZlcnRpY2FsO1xyXG4gICAgICBpZiAoTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMSkgdmVydGljYWwgPSB0cnVlO1xyXG4gICAgICBlbHNlIHZlcnRpY2FsID0gZmFsc2U7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbXB1dGVyLmJvYXJkLnBsYWNlKGxlbmd0aCwgY29vcmRzLCB2ZXJ0aWNhbCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9jb252ZXJ0Q29vcmRzKHNoaXApIHtcclxuICAgIHNoaXAgPSBzaGlwLnJlcGxhY2UoL1xccy9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiLFwiKTtcclxuICAgIHNoaXBbMV0gPSArc2hpcFsxXTtcclxuICAgIGlmIChzaGlwWzJdID09PSBcInRydWVcIikgc2hpcFsyXSA9IHRydWU7XHJcbiAgICBlbHNlIGlmIChzaGlwWzJdID09PSBcImZhbHNlXCIpIHNoaXBbMl0gPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHNoaXAubGVuZ3RoID4gMyB8fFxyXG4gICAgICB0eXBlb2Ygc2hpcFswXSAhPT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgICB0eXBlb2Ygc2hpcFsxXSAhPT0gXCJudW1iZXJcIiB8fFxyXG4gICAgICBpc05hTihzaGlwWzFdKSB8fFxyXG4gICAgICAoc2hpcFsyXSAhPT0gdHJ1ZSAmJiBzaGlwWzJdICE9PSBmYWxzZSlcclxuICAgIClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlc1wiKTtcclxuXHJcbiAgICBpZiAoc2hpcFswXSA9PT0gXCJhXCIpIHNoaXBbMF0gPSAwO1xyXG4gICAgZWxzZSBpZiAoc2hpcFswXSA9PT0gXCJiXCIpIHNoaXBbMF0gPSAxO1xyXG4gICAgZWxzZSBpZiAoc2hpcFswXSA9PT0gXCJjXCIpIHNoaXBbMF0gPSAyO1xyXG4gICAgZWxzZSBpZiAoc2hpcFswXSA9PT0gXCJkXCIpIHNoaXBbMF0gPSAzO1xyXG4gICAgZWxzZSBpZiAoc2hpcFswXSA9PT0gXCJlXCIpIHNoaXBbMF0gPSA0O1xyXG4gICAgZWxzZSBpZiAoc2hpcFswXSA9PT0gXCJmXCIpIHNoaXBbMF0gPSA1O1xyXG4gICAgZWxzZSBpZiAoc2hpcFswXSA9PT0gXCJnXCIpIHNoaXBbMF0gPSA2O1xyXG4gICAgZWxzZSBpZiAoc2hpcFswXSA9PT0gXCJoXCIpIHNoaXBbMF0gPSA3O1xyXG4gICAgZWxzZSBpZiAoc2hpcFswXSA9PT0gXCJpXCIpIHNoaXBbMF0gPSA4O1xyXG4gICAgZWxzZSBpZiAoc2hpcFswXSA9PT0gXCJqXCIpIHNoaXBbMF0gPSA5O1xyXG5cclxuICAgIGlmIChzaGlwWzBdIDwgMCB8fCBzaGlwWzBdID4gOSB8fCBzaGlwWzFdIDwgMCB8fCBzaGlwWzFdID4gOSlcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlc1wiKTtcclxuICAgIGVsc2UgcmV0dXJuIFtbc2hpcFswXSwgc2hpcFsxXV0sIHNoaXBbMl1dO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheWVyUGxhY2UobGVuZ3RoKSB7XHJcbiAgICBsZXQgc2hpcCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNoaXAgPSBfY29udmVydENvb3JkcyhcclxuICAgICAgICAgIHByb21wdChcclxuICAgICAgICAgICAgYElucHV0IGNvb3JkcyAmIHZlcnRpY2FsIHJvdGF0aW9uIGZvciAke2xlbmd0aH0gbGVuZ3RoIHNoaXAgKGxldHRlciwgbnVtYmVyLCB0cnVlL2ZhbHNlKWBcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcGxheWVyLmJvYXJkLnBsYWNlKGxlbmd0aCwgc2hpcFswXSwgc2hpcFsxXSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XHJcbiAgICBpZiAoZ2FtZWJvYXJkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9PT0gdHJ1ZSB8fCBnYW1lYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dID09PSBmYWxzZSlcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaGl0IHRoZSBzYW1lIHNxdWFyZSB0d2ljZVwiKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBnYW1lYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIGdhbWVib2FyZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV0uaGl0KCk7XHJcbiAgICAgIGdhbWVib2FyZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gPSB0cnVlO1xyXG4gICAgICBpZiAoaGFzQWxsU3VuaygpKSByZXR1cm4gXCJXaW5cIjtcclxuICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICBnYW1lYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYXNBbGxTdW5rKCkge1xyXG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XHJcbiAgICAgIGlmICghc2hpcC5nZXRTdW5rKCkpIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmFuZG9tU3F1YXJlKCkge1xyXG4gICAgbGV0IHJhbmROdW0xID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgbGV0IHJhbmROdW0yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgd2hpbGUgKGdhbWVib2FyZFtyYW5kTnVtMV1bcmFuZE51bTJdID09PSB0cnVlIHx8IGdhbWVib2FyZFtyYW5kTnVtMV1bcmFuZE51bTJdID09PSBmYWxzZSkge1xyXG4gICAgICByYW5kTnVtMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgcmFuZE51bTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3JhbmROdW0xLCByYW5kTnVtMl07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0R2FtZWJvYXJkLFxyXG4gICAgcGxhY2UsXHJcbiAgICBjb21wdXRlclBsYWNlLFxyXG4gICAgcGxheWVyUGxhY2UsXHJcbiAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgaGFzQWxsU3VuayxcclxuICAgIHJhbmRvbVNxdWFyZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcclxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG5mdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xyXG4gIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCk7XHJcblxyXG4gIHJldHVybiB7IG5hbWUsIGJvYXJkIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllciB9O1xyXG4iLCJmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xyXG4gIGxldCBoaXRzID0gMDtcclxuICBsZXQgc3VuayA9IGZhbHNlO1xyXG5cclxuICBmdW5jdGlvbiBoaXQoKSB7XHJcbiAgICBoaXRzKys7XHJcbiAgICBoYXNTdW5rKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYXNTdW5rKCkge1xyXG4gICAgaWYgKGxlbmd0aCA9PT0gaGl0cykgc3VuayA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRIaXRzKCkge1xyXG4gICAgcmV0dXJuIGhpdHM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XHJcbiAgICByZXR1cm4gbGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0U3VuaygpIHtcclxuICAgIHJldHVybiBzdW5rO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgaGl0LCBoYXNTdW5rLCBnZXRMZW5ndGgsIGdldEhpdHMsIGdldFN1bmsgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgU2hpcCB9O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xyXG5cclxuLyogRG9jdW1lbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxyXG4gKi9cclxuXHJcbmh0bWwge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXHJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXHJcbn1cclxuXHJcbi8qIFNlY3Rpb25zXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbmRlciB0aGUgXFxgbWFpblxcYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cclxuICovXHJcblxyXG5tYWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyoqXHJcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIFxcYGgxXFxgIGVsZW1lbnRzIHdpdGhpbiBcXGBzZWN0aW9uXFxgIGFuZFxyXG4gKiBcXGBhcnRpY2xlXFxgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcclxufVxyXG5cclxuLyogR3JvdXBpbmcgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXHJcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxyXG4gKi9cclxuXHJcbmhyIHtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xyXG4gIGhlaWdodDogMDsgLyogMSAqL1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnByZSB7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXHJcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cclxufVxyXG5cclxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxyXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbmFiYnJbdGl0bGVdIHtcclxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuYixcclxuc3Ryb25nIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5jb2RlLFxyXG5rYmQsXHJcbnNhbXAge1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xyXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxyXG4gKiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuc3ViLFxyXG5zdXAge1xyXG4gIGZvbnQtc2l6ZTogNzUlO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbnN1YiB7XHJcbiAgYm90dG9tOiAtMC4yNWVtO1xyXG59XHJcblxyXG5zdXAge1xyXG4gIHRvcDogLTAuNWVtO1xyXG59XHJcblxyXG4vKiBFbWJlZGRlZCBjb250ZW50XHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cclxuICovXHJcblxyXG5pbWcge1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLyogRm9ybXNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cclxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbm9wdGdyb3VwLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xyXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXHJcbiAgbWFyZ2luOiAwOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cclxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0IHtcclxuICAvKiAxICovXHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cclxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuc2VsZWN0IHtcclxuICAvKiAxICovXHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuW3R5cGU9XCJidXR0b25cIl0sXHJcblt0eXBlPVwicmVzZXRcIl0sXHJcblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcclxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcclxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxyXG4gKi9cclxuXHJcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcclxuW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXHJcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXHJcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcclxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuZmllbGRzZXQge1xyXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXHJcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gSUUuXHJcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcclxuICogICAgXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmxlZ2VuZCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xyXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXHJcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cclxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cclxuICBwYWRkaW5nOiAwOyAvKiAzICovXHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cclxuICovXHJcblxyXG5wcm9ncmVzcyB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXHJcbiAqL1xyXG5cclxudGV4dGFyZWEge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXHJcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cclxuICovXHJcblxyXG5bdHlwZT1cImNoZWNrYm94XCJdLFxyXG5bdHlwZT1cInJhZGlvXCJdIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXHJcbiAgcGFkZGluZzogMDsgLyogMiAqL1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxyXG4gKi9cclxuXHJcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXHJcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxyXG4gKi9cclxuXHJcblt0eXBlPVwic2VhcmNoXCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXHJcbiAqL1xyXG5cclxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cclxuICBmb250OiBpbmhlcml0OyAvKiAyICovXHJcbn1cclxuXHJcbi8qIEludGVyYWN0aXZlXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxyXG4gKi9cclxuXHJcbmRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuc3VtbWFyeSB7XHJcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG59XHJcblxyXG4vKiBNaXNjXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxyXG4gKi9cclxuXHJcbnRlbXBsYXRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuW2hpZGRlbl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxNQUFNO0VBQ04saUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxNQUFNO0VBQ04sb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcclxcblxcclxcbi8qIERvY3VtZW50XFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxyXFxuICovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qIFNlY3Rpb25zXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcclxcbiAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXHJcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR3JvdXBpbmcgY29udGVudFxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXHJcXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcclxcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbmEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxyXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hYmJyW3RpdGxlXSB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxyXFxuICovXFxyXFxuXFxyXFxuYixcXHJcXG5zdHJvbmcge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuY29kZSxcXHJcXG5rYmQsXFxyXFxuc2FtcCB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXHJcXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXHJcXG4gKiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICBmb250LXNpemU6IDc1JTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcbiAgYm90dG9tOiAtMC4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQsXFxyXFxub3B0Z3JvdXAsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxyXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxyXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxyXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuaW5wdXQge1xcclxcbiAgLyogMSAqL1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcclxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuc2VsZWN0IHtcXHJcXG4gIC8qIDEgKi9cXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxyXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxyXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXHJcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxyXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcclxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxyXFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxyXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcclxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXHJcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXHJcXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXHJcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5wcm9ncmVzcyB7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcclxcbiAqL1xcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXHJcXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxyXFxuICovXFxyXFxuXFxyXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcclxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiAqL1xcclxcblxcclxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXHJcXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogSW50ZXJhY3RpdmVcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5zdW1tYXJ5IHtcXHJcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWlzY1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcclxcbiAqL1xcclxcblxcclxcbnRlbXBsYXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcclxcbiAqL1xcclxcblxcclxcbltoaWRkZW5dIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5ZXJOYW1lLFxyXG4uY29tcHV0ZXJOYW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5wbGF5ZXJOYW1lIHtcclxuICB0b3A6IDEwcmVtO1xyXG4gIGxlZnQ6IDI3cmVtO1xyXG59XHJcbi5jb21wdXRlck5hbWUge1xyXG4gIHRvcDogMTByZW07XHJcbiAgcmlnaHQ6IDIzcmVtO1xyXG59XHJcblxyXG4uYm9hcmQge1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBoZWlnaHQ6IGNhbGMoM3JlbSAqIDExKTtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG4uYm9hcmQgLnNxdWFyZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHdpZHRoOiAzcmVtO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJvYXJkIC5wbGF5YWJsZVNxdWFyZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDIwOCwgMjU1KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJvYXJkIC5wbGF5YWJsZVNxdWFyZSBzdmcge1xyXG4gIHdpZHRoOiAyLjVyZW07XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbn1cclxuLmJvYXJkIC5wbGF5YWJsZVNxdWFyZSBzdmdbZGF0YS1uYW1lPVwiYm9hdFwiXSB7XHJcbiAgY29sb3I6IHJnYigwLCAyMDgsIDI1NSk7XHJcbn1cclxuLmJvYXJkIC5wbGF5YWJsZVNxdWFyZSBzdmdbZGF0YS1uYW1lPVwic3Vua1wiXSB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDk3LCA5Nyk7XHJcbn1cclxuLmJvYXJkIC5wbGF5YWJsZVNxdWFyZSBzdmdbZGF0YS1uYW1lPVwibWlzc1wiXSB7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4uYm9hcmQjZGlzYWJsZWQgLnNxdWFyZSB7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4uYm9hcmQjZGlzYWJsZWQgLnBsYXlhYmxlU3F1YXJlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5ib2FyZCNkaXNhYmxlZCBzdmcge1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi53aW5uZXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG5cclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLndpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMHJlbTtcclxuICB3aWR0aDogMzByZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3JkZXI6IDRweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhOztFQUViLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1Qjs7RUFFdkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXOztFQUVYLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7O0VBRVosYUFBYTtFQUNiLHFCQUFxQjs7RUFFckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllck5hbWUsXFxyXFxuLmNvbXB1dGVyTmFtZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnBsYXllck5hbWUge1xcclxcbiAgdG9wOiAxMHJlbTtcXHJcXG4gIGxlZnQ6IDI3cmVtO1xcclxcbn1cXHJcXG4uY29tcHV0ZXJOYW1lIHtcXHJcXG4gIHRvcDogMTByZW07XFxyXFxuICByaWdodDogMjNyZW07XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IGNhbGMoM3JlbSAqIDExKTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQgLnNxdWFyZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uYm9hcmQgLnBsYXlhYmxlU3F1YXJlIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAyMDgsIDI1NSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5ib2FyZCAucGxheWFibGVTcXVhcmUgc3ZnIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG59XFxyXFxuLmJvYXJkIC5wbGF5YWJsZVNxdWFyZSBzdmdbZGF0YS1uYW1lPVxcXCJib2F0XFxcIl0ge1xcclxcbiAgY29sb3I6IHJnYigwLCAyMDgsIDI1NSk7XFxyXFxufVxcclxcbi5ib2FyZCAucGxheWFibGVTcXVhcmUgc3ZnW2RhdGEtbmFtZT1cXFwic3Vua1xcXCJdIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCA5NywgOTcpO1xcclxcbn1cXHJcXG4uYm9hcmQgLnBsYXlhYmxlU3F1YXJlIHN2Z1tkYXRhLW5hbWU9XFxcIm1pc3NcXFwiXSB7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkI2Rpc2FibGVkIC5zcXVhcmUge1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuLmJvYXJkI2Rpc2FibGVkIC5wbGF5YWJsZVNxdWFyZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5ib2FyZCNkaXNhYmxlZCBzdmcge1xcclxcbiAgY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lci1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcbi53aW5uZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGhlaWdodDogMTByZW07XFxyXFxuICB3aWR0aDogMzByZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgbGlnaHRncmF5O1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJET00iLCJwbGF5ZXJCb2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbXB1dGVyQm9hcmQiLCJjcmVhdGVCb2FyZCIsImV2ZW50TGlzdGVuZXJzIiwiY29tcHV0ZXIiLCJib2FyZCIsImNvbXB1dGVyUGxhY2UiLCJwb3B1bGF0ZUJvYXJkIiwicGxheWVyIiwic2V0VGltZW91dCIsInBsYXllclBsYWNlIiwicXVldWUiLCJmaXJzdCIsImkiLCJqIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImNoaWxkcmVuIiwiYXBwZW5kQ2hpbGQiLCJzcXVhcmUiLCJnZXRHYW1lYm9hcmQiLCJuYW1lIiwiaW5uZXJIVE1MIiwiZ2V0U3F1YXJlQ29vcmRzIiwiZXZlbnQiLCJzcXVhcmVDb29yZHMiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImxlbmd0aCIsInB1c2giLCJpc0F0dGFja2FibGUiLCJhdHRhY2siLCJ1c2VyIiwic2hpZnRlZEl0ZW0iLCJzaGlmdCIsImNvb3JkcyIsInZlcnRpY2FsIiwic3BsaWNlIiwid2lubmVyQ29udGFpbmVyIiwicmVjZWl2ZUF0dGFjayIsInRleHRDb250ZW50Iiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwic3F1YXJlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvbmNsaWNrIiwiaWQiLCJlcnJvciIsInJhbmRvbVNxdWFyZSIsIlNoaXAiLCJHYW1lYm9hcmQiLCJnYW1lYm9hcmQiLCJ1bmRlZmluZWQiLCJzaGlwcyIsInBsYWNlIiwic3RhcnQiLCJuZXdTaGlwIiwiRXJyb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjZWlsIiwiX2NvbnZlcnRDb29yZHMiLCJzaGlwIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJpc05hTiIsInByb21wdCIsImhpdCIsImhhc0FsbFN1bmsiLCJnZXRTdW5rIiwicmFuZE51bTEiLCJyYW5kTnVtMiIsImhpdHMiLCJzdW5rIiwiaGFzU3VuayIsImdldEhpdHMiLCJnZXRMZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9