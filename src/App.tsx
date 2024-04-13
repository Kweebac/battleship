import { useCallback, useRef, useState } from "react";
import PlayerBoard from "./components/PlayerBoard";
import ComputerBoard from "./components/ComputerBoard";

export default function App() {
  const [player, setPlayer] = useState([
    ["", "miss", "", "", "miss", "ship", "ship", "miss", "", ""],
    ["", "ship", "", "", "", "", "", "", "", ""],
    ["", "ship", "", "", "", "miss", "", "", "", ""],
    ["", "ship", "", "", "", "ship", "", "", "", ""],
    ["", "ship", "", "", "", "ship", "", "", "", ""],
    ["", "ship", "", "", "", "ship", "", "", "", ""],
    ["", "miss", "", "", "", "miss", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["miss", "ship", "ship", "miss", "", "", "", "", "", ""],
    ["", "", "", "miss", "ship", "ship", "ship", "ship", "miss", ""],
  ]);
  const [computer, setComputer] = useState([
    ["", "", "", "", "", "ship", "ship", "", "", ""],
    ["", "ship", "", "", "", "", "", "", "", ""],
    ["", "ship", "", "", "", "", "", "", "", ""],
    ["", "ship", "", "", "", "ship", "", "", "", ""],
    ["", "ship", "", "", "", "ship", "", "", "", ""],
    ["", "ship", "", "", "", "ship", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "ship", "ship", "", "", "", "", "", "", ""],
    ["", "", "", "", "ship", "ship", "ship", "ship", "", ""],
  ]);
  const computerAttackQueue = useRef<
    {
      coords: [number, number];
      axis: "y" | "x";
    }[]
  >([]);

  const computerAttack = useCallback(() => {
    const playerCopy = JSON.parse(JSON.stringify(player));

    if (computerAttackQueue.current.length > 0) {
      while (true) {
        const latestQueueItem = computerAttackQueue.current.pop();
        const [row, col] = latestQueueItem?.coords;
        const axis = latestQueueItem?.axis;

        if (playerCopy[row][col] === "ship") {
          playerCopy[row][col] = "hit";

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

          break;
        } else if (playerCopy[row][col] === "") {
          playerCopy[row][col] = "miss";
          break;
        }
      }
    } else {
      while (true) {
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
      computerCopy[row][col] = cell === "ship" ? "hit" : "miss";

      setComputer?.(computerCopy);
    },
    [computer, setComputer],
  );

  return (
    <main className="grid h-screen place-content-center gap-8 md:grid-flow-col md:gap-[5rem] lg:gap-[7.5rem] xl:gap-[10rem]">
      <PlayerBoard player={player} />
      <ComputerBoard
        computer={computer}
        computerAttack={computerAttack}
        playerAttack={playerAttack}
      />
    </main>
  );
}
