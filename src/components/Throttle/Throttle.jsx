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
    <div>
      <span>
        {height} x {width}
      </span>
    </div>
  );
};

export default Throttle;
