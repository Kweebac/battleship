import { useState } from "react";
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

  return (
    <main className="grid h-screen place-content-center gap-8 md:grid-flow-col md:gap-[5rem] lg:gap-[7.5rem] xl:gap-[10rem] 2xl:gap-[12.5rem]">
      <PlayerBoard player={player} />
      <ComputerBoard
        player={player}
        setPlayer={setPlayer}
        computer={computer}
        setComputer={setComputer}
      />
    </main>
  );
}
