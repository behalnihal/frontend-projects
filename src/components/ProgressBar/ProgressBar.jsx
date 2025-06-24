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
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">Progress Bar</h1>
      <div className="w-full" style={{ maxWidth: "600px", padding: "20px" }}>
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
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => {
            setIsLoading(true);
          }}
        >
          Start
        </button>
        <button
          className="bg-gray-300 p-2 rounded"
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
