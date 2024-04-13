type WinProps = {
  winner: string;
  reset: () => void;
};

export default function Win({ winner, reset }: WinProps) {
  return (
    <section className="absolute grid h-screen w-screen place-content-center backdrop-blur-sm">
      <div className="grid w-screen justify-items-center gap-8 bg-yellow-50 p-12">
        <h1 className="text-6xl">{winner + " won!"}</h1>
        <button
          onClick={reset}
          className="h-12 w-36 rounded-lg bg-[wheat] text-lg"
        >
          Play again
        </button>
      </div>
    </section>
  );
}
