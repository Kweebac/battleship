import { useCallback } from "react";

type ComputerBoardProps = {
  player: string[][];
  setPlayer: React.Dispatch<React.SetStateAction<string[][]>>;
  computer: string[][];
  setComputer: React.Dispatch<React.SetStateAction<string[][]>>;
};

export default function ComputerBoard({
  player,
  setPlayer,
  computer,
  setComputer,
}: ComputerBoardProps) {
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

  const populateRow = useCallback(
    (row: number) => {
      return computer[row].map((cell, col) => {
        const handleClick = () => {
          if (cell === "hit" || cell === "miss") return;

          playerAttack(row, col, cell);
          computerAttack();
        };

        if (cell === "hit")
          return (
            <td onClick={handleClick} key={col}>
              <svg
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20.96 21C19.9 21 18.9 20.74 17.96 20.24C16.12 21.24 13.81 21.24 11.97 20.24C10.13 21.24 7.82 21.24 6 20.24C4.77 20.93 3.36 21.04 2 21V19C3.41 19.04 4.77 18.89 6 18C7.74 19.24 10.21 19.24 11.97 18C13.74 19.24 16.2 19.24 17.96 18C19.17 18.89 20.54 19.04 21.94 19V21H20.96M22 3.5L7.11 5.96L13.11 12.17L22 3.5M10.81 16.36L11.97 15.54L13.12 16.36C13.65 16.72 14.3 16.93 14.97 16.93C15.12 16.93 15.28 16.91 15.43 16.89L5.2 6.31C4.29 7.65 3.9 9.32 4 10.92L9.74 16.83C10.13 16.74 10.5 16.58 10.81 16.36Z" />
              </svg>
            </td>
          );
        else if (cell === "miss")
          return (
            <td onClick={handleClick} key={col}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
              </svg>
            </td>
          );
        else return <td onClick={handleClick} key={col}></td>;
      });
    },
    [computer, playerAttack, computerAttack],
  );

  return (
    <section className="grid w-max justify-items-center gap-4">
      <h1 className="text-3xl font-semibold">Computer</h1>
      <table className={"computer"}>
        <tbody>
          <tr>
            <td></td>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </tr>
          <tr>
            <th>A</th>
            {populateRow(0)}
          </tr>
          <tr>
            <th>B</th>
            {populateRow(1)}
          </tr>
          <tr>
            <th>C</th>
            {populateRow(2)}
          </tr>
          <tr>
            <th>D</th>
            {populateRow(3)}
          </tr>
          <tr>
            <th>E</th>
            {populateRow(4)}
          </tr>
          <tr>
            <th>F</th>
            {populateRow(5)}
          </tr>
          <tr>
            <th>G</th>
            {populateRow(6)}
          </tr>
          <tr>
            <th>H</th>
            {populateRow(7)}
          </tr>
          <tr>
            <th>I</th>
            {populateRow(8)}
          </tr>
          <tr>
            <th>J</th>
            {populateRow(9)}
          </tr>
        </tbody>
      </table>
    </section>
  );
}
