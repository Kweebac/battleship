import { useCallback, useRef, useState } from "react";
import PlayerBoard from "./PlayerBoard";
import ComputerBoard from "./ComputerBoard";
import Win from "./Win";

type GameProps = {
  player: string[][];
  setPlayer: React.Dispatch<React.SetStateAction<string[][]>>;
  computer: string[][];
  setComputer: React.Dispatch<React.SetStateAction<string[][]>>;
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
};

function useGameLogic({
  player,
  setPlayer,
  computer,
  setComputer,
  setStartGame,
}: GameProps) {
  const [playerShips, setPlayerShips] = useState(17);
  const [computerShips, setComputerShips] = useState(17);
  const winner =
    playerShips === 0 ? "Computer" : computerShips === 0 ? "Player" : "";

  const computerAttackQueue = useRef<
    {
      coords: [number, number];
      axis: "y" | "x";
    }[]
  >([]);
  const unsunkShipsLength = useRef([5, 4, 3, 3, 2]);
  const maxShipsInARow = useRef(5);
  const shipsHitInARow = useRef(0);

  const computerAttack = useCallback(() => {
    const playerCopy = JSON.parse(JSON.stringify(player));

    while (true) {
      const latestQueueItem = computerAttackQueue.current.pop();
      if (latestQueueItem !== undefined) {
        const [row, col] = latestQueueItem.coords;
        const axis = latestQueueItem?.axis;

        if (playerCopy[row][col] === "ship") {
          playerCopy[row][col] = "hit";
          setPlayerShips((prev) => prev - 1);
          shipsHitInARow.current++;

          if (axis === "y") {
            // delete all x axis in queue
            computerAttackQueue.current = computerAttackQueue.current.filter(
              (queueItem) => queueItem.axis === "y",
            );

            // add y axis cell on either side of current cell
            computerAttackQueue.current.push({
              coords: [row + 1, col],
              axis: "y",
            });
            computerAttackQueue.current.push({
              coords: [row - 1, col],
              axis: "y",
            });
          } else if (axis === "x") {
            // delete all y axis in queue
            computerAttackQueue.current = computerAttackQueue.current.filter(
              (queueItem) => queueItem.axis === "x",
            );

            // add x axis cell on either side of current cell
            computerAttackQueue.current.push({
              coords: [row, col + 1],
              axis: "x",
            });
            computerAttackQueue.current.push({
              coords: [row, col - 1],
              axis: "x",
            });
          }

          if (shipsHitInARow.current === maxShipsInARow.current)
            computerAttackQueue.current = [];

          break;
        } else if (playerCopy[row][col] === "") {
          playerCopy[row][col] = "miss";
          break;
        }
      } else {
        if (shipsHitInARow.current > 0) {
          const index = unsunkShipsLength.current.indexOf(
            shipsHitInARow.current,
          );
          unsunkShipsLength.current.splice(index, 1);
          maxShipsInARow.current = unsunkShipsLength.current[0];
          shipsHitInARow.current = 0;
        }

        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);

        if (playerCopy[row][col] === "ship") {
          const computerAddAttackToQueue = (
            row: number,
            col: number,
            axis: "y" | "x",
          ) => {
            if (row < 0 || row >= 10 || col < 0 || col >= 10) return;
            computerAttackQueue.current.push({
              coords: [row, col],
              axis,
            });
          };

          playerCopy[row][col] = "hit";
          setPlayerShips((prev) => prev - 1);

          shipsHitInARow.current++;

          computerAddAttackToQueue(row + 1, col, "y");
          computerAddAttackToQueue(row - 1, col, "y");
          computerAddAttackToQueue(row, col + 1, "x");
          computerAddAttackToQueue(row, col - 1, "x");

          break;
        } else if (playerCopy[row][col] === "") {
          playerCopy[row][col] = "miss";

          break;
        }
      }
    }

    setPlayer?.(playerCopy);
  }, [player, setPlayer]);

  const playerAttack = useCallback(
    (row: number, col: number, cell: string) => {
      const computerCopy = JSON.parse(JSON.stringify(computer));
      if (cell === "ship") {
        computerCopy[row][col] = "hit";
        setComputerShips((prev) => prev - 1);
      } else if (cell === "") computerCopy[row][col] = "miss";

      setComputer?.(computerCopy);
    },
    [computer, setComputer],
  );

  const reset = useCallback(() => {
    setPlayer([
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
    setComputer([
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ]);
    setStartGame(false);
  }, [setStartGame, setPlayer, setComputer]);

  return { player, computer, computerAttack, playerAttack, winner, reset };
}

export default function Game({
  player,
  setPlayer,
  computer,
  setComputer,
  setStartGame,
}: GameProps) {
  const { computerAttack, playerAttack, winner, reset } = useGameLogic({
    player,
    setPlayer,
    computer,
    setComputer,
    setStartGame,
  });

  return (
    <main className="grid h-screen place-content-center gap-8 md:grid-flow-col md:gap-[5rem] lg:gap-[7.5rem] xl:gap-[10rem]">
      <PlayerBoard player={player} />
      <ComputerBoard
        computer={computer}
        computerAttack={computerAttack}
        playerAttack={playerAttack}
      />
      {winner && <Win winner={winner} reset={reset} />}
    </main>
  );
}
