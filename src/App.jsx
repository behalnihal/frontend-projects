import { NavLink } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center space-y-4">
      <button className="bg-white p-4 rounded shadow">
        <NavLink to="/stopwatch">Stopwatch</NavLink>
      </button>
      <button className="bg-white p-4 rounded shadow">
        <NavLink to="/password-generator">Password Generator</NavLink>
      </button>
      <button className="bg-white p-4 rounded shadow">
        <NavLink to="/throttle">Throttle</NavLink>
      </button>
      <button className="bg-white p-4 rounded shadow">
        <NavLink to="/progress-bar">Progress Bar</NavLink>
      </button>
      <button className="bg-white p-4 rounded shadow">
        <NavLink to="/emi-calculator">EMI Calculator</NavLink>
      </button>
    </div>
  );
}

export default App;
