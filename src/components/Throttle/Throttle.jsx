import { useState, useEffect } from "react";

const Throttle = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center space-y-4">
      <span>
        {height} x {width}
      </span>
    </div>
  );
};

export default Throttle;
