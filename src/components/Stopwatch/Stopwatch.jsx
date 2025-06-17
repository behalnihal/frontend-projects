import { useState, useEffect } from "react";

function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  function formatTime(time) {
    const hrs = Math.floor(time / (60 * 60 * 1000));
    const mins = Math.floor((time % (60 * 60 * 1000)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    const msecs = Math.floor((time % 1000) / 10);
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}:${msecs
      .toString()
      .padStart(2, "0")}`;
  }
  useEffect(() => {
    let startTime = Date.now() - elapsedTime;
    if (isRunning) {
      const interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isRunning]);
  return (
    <>
      <div>
        <h1>Stop Watch</h1>
      </div>
      <div>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button
          onClick={() => {
            setIsRunning(false);
            setElapsedTime(0);
            setLaps([]);
          }}
        >
          Reset
        </button>
        <button onClick={() => setLaps([...laps, elapsedTime])}>Lap</button>
      </div>
      <div>
        <span>{formatTime(elapsedTime)}</span>
      </div>
      <div>
        {laps.map((lap, index) => {
          return <ol key={index}>{formatTime(lap)}</ol>;
        })}
      </div>
    </>
  );
}

export default Stopwatch;
