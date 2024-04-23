import { useCallback, useEffect, useState } from "react";
import PlaceShipsBoardCell from "./PlaceShipsBoardCell";

type PlaceShipsProps = {
  player: string[][];
  setPlayer: React.Dispatch<React.SetStateAction<string[][]>>;
  computer: string[][];
  setComputer: React.Dispatch<React.SetStateAction<string[][]>>;
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PlaceShips({
  player,
  setPlayer,
  computer,
  setComputer,
  setStartGame,
}: PlaceShipsProps) {
  const [shipsToPlace, setShipsToPlace] = useState([5, 4, 3, 3, 2]);
  const [displayShip, setDisplayShip] = useState({
    coords: [] as number[][],
    direction: "x" as "x" | "y",
    valid: true,
  });
  const [coords, setCoords] = useState<[number, number]>();

  const randomizeComputerShips = useCallback(() => {
    const shipsToPlace = [5, 4, 3, 3, 2];
    const computerCopy = JSON.parse(JSON.stringify(computer));
    for (const shipToPlace of shipsToPlace) {
      while (true) {
        const direction = Math.random() < 0.5 ? "x" : "y";
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);

        let valid = true;
        for (let i = 0; i < shipToPlace; i++) {
          if (direction === "x") {
            if (col + i >= 10) valid = false;
            else if (computerCopy[row][col + i] === "ship") valid = false;
          } else if (direction === "y") {
            if (row + i >= 10) valid = false;
            else if (computerCopy[row + i][col] === "ship") valid = false;
          }
        }

        if (valid) {
          for (let i = 0; i < shipToPlace; i++) {
            if (direction === "x") {
              computerCopy[row][col + i] = "ship";
            } else if (direction === "y") {
              computerCopy[row + i][col] = "ship";
            }
          }
          break;
        }
      }
    }
    setComputer(computerCopy);
  }, [computer, setComputer]);

  const rotate = useCallback(() => {
    setDisplayShip((prev) => {
      return {
        ...prev,
        direction: prev.direction === "x" ? "y" : "x",
      };
    });
  }, []);

  const rotateOnR = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "r") return;

      rotate();
    },
    [rotate],
  );

  const handleRotateKey = useCallback(() => {
    addEventListener("keydown", rotateOnR);

    return () => removeEventListener("keydown", rotateOnR);
  }, [rotateOnR]);

  useEffect(handleRotateKey, [handleRotateKey]);

  useEffect(() => {
    if (shipsToPlace.length === 0) {
      randomizeComputerShips();
      setStartGame(true);
    }

    if (coords) {
      const direction = displayShip.direction;
      const array: number[][] = [];
      let valid = true;
      for (let i = 0; i < shipsToPlace[0]; i++) {
        if (direction === "x") {
          if (coords[1] + i >= 10) valid = false;
          else if (player[coords[0]][coords[1] + i] === "ship") valid = false;

          array.push([coords[0], coords[1] + i]);
        } else if (direction === "y") {
          if (coords[0] + i >= 10) valid = false;
          else if (player[coords[0] + i][coords[1]] === "ship") valid = false;

          array.push([coords[0] + i, coords[1]]);
        }
      }
      setDisplayShip((prev) => {
        return { ...prev, coords: array, valid };
      });
    }
  }, [
    displayShip.direction,
    coords,
    shipsToPlace,
    player,
    setComputer,
    setStartGame,
    randomizeComputerShips,
  ]);

  const handleHover = useCallback((rowNumber: number, colNumber: number) => {
    setCoords([rowNumber, colNumber]);
  }, []);

  const handleClick = useCallback(() => {
    if (displayShip.valid === false) return;

    let clickable = false;
    for (const coord of displayShip.coords) {
      if (JSON.stringify(coord) === JSON.stringify(coords)) clickable = true;
    }

    if (clickable) {
      const playerCopy = JSON.parse(JSON.stringify(player));

      for (const coord of displayShip.coords) {
        playerCopy[coord[0]][coord[1]] = "ship";
      }

      setPlayer?.(playerCopy);
      setShipsToPlace((prev) => prev.slice(1));
    }
  }, [
    displayShip.coords,
    displayShip.valid,
    player,
    setPlayer,
    setShipsToPlace,
    coords,
  ]);

  return (
    <main className="grid h-screen place-content-center justify-items-center gap-4">
      <button
        onClick={rotate}
        className="flex place-items-center gap-2 text-3xl"
      >
        Rotate
        <span className="rounded-lg bg-blue-500 px-2 text-2xl text-white">
          R
        </span>
      </button>
      <table className="clickable">
        <tbody>
          {player.map((row, rowNumber) => (
            <tr key={rowNumber}>
              {row.map((cell, colNumber) => (
                <PlaceShipsBoardCell
                  rowNumber={rowNumber}
                  colNumber={colNumber}
                  cell={cell}
                  displayShip={displayShip}
                  handleHover={handleHover}
                  handleClick={handleClick}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
