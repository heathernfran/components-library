import { useState } from "react";

interface Props {
  startTime?: number;
}

export function Timer({ startTime = 30 }: Props) {
  const [seconds, setSeconds] = useState(startTime);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    const nextIntervalId = setInterval(() => {
      setSeconds((prevState) => prevState - 1);
    }, 1000);
    setIntervalId(nextIntervalId);
  };

  const clearTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const pauseTimer = () => {
    clearTimer();
  };

  const resetTimer = () => {
    clearTimer();
    setSeconds(startTime);
  };

  return (
    <>
      <span>Time remaining: {seconds}</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
}
