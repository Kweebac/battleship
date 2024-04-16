import { useCallback, useEffect, useState } from "react";

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
  });
  const [coords, setCoords] = useState<[number, number]>();

  const randomizeComputerShips = useCallback(() => {
    const shipsToPlace = [5, 4, 3, 3, 2];
    const computerCopy = JSON.parse(JSON.stringify(computer));
    for (const shipToPlace of shipsToPlace) {
      const direction = Math.random() < 0.5 ? "x" : "y";
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);

      let valid = true;
      // for (let i = 0; i < shipToPlace; i++) {
      //   if (direction === "x") {
      //     if (col + i >= 10) {
      //       valid = false;
      //     }
      //     if (computerCopy[row][col + i] === "ship") {
      //       valid = false;
      //     }
      //   } else if (direction === "y") {
      //     if (row + i >= 10) {
      //       valid = false;
      //     }
      //     if (computerCopy[row + i][col] === "ship") {
      //       valid = false;
      //     }
      //   }
      // }

      if (valid) {
        for (let i = 0; i < shipToPlace; i++) {
          if (direction === "x") {
            computerCopy[row][col + i] = "ship";
          } else if (direction === "y") {
            computerCopy[row + i][col] = "ship";
          }
        }
      }
    }
    setComputer(computerCopy);
  }, [computer, setComputer]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "r") {
        setDisplayShip((prev) => {
          const direction = prev.direction;
          return {
            coords: prev.coords,
            direction: direction === "x" ? "y" : "x",
          };
        });
      }
    };

    addEventListener("keydown", handleKeyDown);

    return () => removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (shipsToPlace.length === 0) {
      randomizeComputerShips();
      setStartGame(true);
    }

    if (coords) {
      const direction = displayShip.direction;
      const array = [];
      for (let i = 0; i < shipsToPlace[0]; i++) {
        if (direction === "x") {
          if (coords[1] + i >= 10) return;
          if (player[coords[0]][coords[1] + i] === "ship") return;

          array.push([coords[0], coords[1] + i]);
        } else if (direction === "y") {
          if (coords[0] + i >= 10) return;
          if (player[coords[0] + i][coords[1]] === "ship") return;

          array.push([coords[0] + i, coords[1]]);
        }
      }
      setDisplayShip({ coords: array, direction });
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
  }, [displayShip.coords, player, setPlayer, setShipsToPlace, coords]);

  return (
    <main className="grid h-screen place-content-center justify-items-center gap-4">
      <h1 className="flex place-items-center gap-2 text-3xl">
        Rotate
        <span className="rounded-lg bg-green-600 px-2 text-2xl text-white">
          R
        </span>
      </h1>
      <table className="clickable">
        <tbody>
          {player.map((row, rowNumber) => (
            <tr key={rowNumber}>
              {row.map((cell, colNumber) => {
                if (cell === "ship")
                  return (
                    <td key={colNumber}>
                      <svg
                        fill="#5555FF"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 13.5L11 2.03V13.5H3M12.5 13.5C13.85 9.75 13.67 4.71 12.5 1C17.26 2.54 20.9 8.4 20.96 13.5H12.5M21.1 17.08C20.69 17.72 20.21 18.27 19.65 18.74C19 18.45 18.42 18 17.96 17.5C16.47 19.43 13.46 19.43 11.97 17.5C10.5 19.43 7.47 19.43 6 17.5C5.5 18 4.95 18.45 4.3 18.74C3.16 17.8 2.3 16.46 2 15H21.94C21.78 15.75 21.5 16.44 21.1 17.08M20.96 23C19.9 23 18.9 22.75 17.96 22.25C16.12 23.25 13.81 23.25 11.97 22.25C10.13 23.25 7.82 23.25 6 22.25C4.77 22.94 3.36 23.05 2 23V21C3.41 21.05 4.77 20.9 6 20C7.74 21.25 10.21 21.25 11.97 20C13.74 21.25 16.2 21.25 17.96 20C19.17 20.9 20.54 21.05 21.94 21V23H20.96Z" />
                      </svg>
                    </td>
                  );
                else {
                  const color = displayShip.coords.some(
                    (coord) => coord[0] === rowNumber && coord[1] === colNumber,
                  )
                    ? "bg-green-600"
                    : undefined;

                  return (
                    <td
                      className={color}
                      onMouseOver={() => handleHover(rowNumber, colNumber)}
                      onClick={() => handleClick()}
                      key={colNumber}
                    ></td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
