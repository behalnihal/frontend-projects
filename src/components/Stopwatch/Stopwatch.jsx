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
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">Stop Watch</h1>

      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={() => setIsRunning(false)}
        >
          Stop
        </button>
        <button
          className="bg-gray-300 p-2 rounded"
          onClick={() => {
            setIsRunning(false);
            setElapsedTime(0);
            setLaps([]);
          }}
        >
          Reset
        </button>
        <button
          className="bg-gray-300 p-2 rounded"
          onClick={() => setLaps([...laps, elapsedTime])}
        >
          Lap
        </button>
      </div>
      <div className="text-2xl font-bold">
        <span>{formatTime(elapsedTime)}</span>
      </div>
      <div className="text-lg">
        {laps.map((lap, index) => {
          return <ol key={index}>{formatTime(lap)}</ol>;
        })}
      </div>
    </div>
  );
}

export default Stopwatch;
