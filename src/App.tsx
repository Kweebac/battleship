import { useCallback, useState } from "react";
import PlayerBoard from "./components/PlayerBoard";
import ComputerBoard from "./components/ComputerBoard";

export default function App() {
  const [player, setPlayer] = useState([
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

  const computerAttack = useCallback(() => {
    const playerCopy = JSON.parse(JSON.stringify(player));
    while (true) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      if (playerCopy[row][col] === "ship") {
        playerCopy[row][col] = "hit";
        break;
      } else if (playerCopy[row][col] === "") {
        playerCopy[row][col] = "miss";
        break;
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

  const computerBoardProps = {
    computer,
    computerAttack,
    playerAttack,
  };

  return (
    <main className="grid h-screen place-content-center gap-8 md:grid-flow-col md:gap-[5rem] lg:gap-[7.5rem] xl:gap-[10rem] 2xl:gap-[12.5rem]">
      <PlayerBoard player={player} />
      <ComputerBoard {...computerBoardProps} />
    </main>
  );
}
