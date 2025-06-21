import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isLoading]);
  return (
    <div>
      <h1>Progress Bar</h1>
      <div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#e0e0e0",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: "#76c7c0",
              height: "30px",
              transition: "width 0.5s ease",
            }}
          ></div>
        </div>
        <button
          onClick={() => {
            setIsLoading(true);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setIsLoading(false);
            setProgress(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
