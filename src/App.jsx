import { NavLink } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <button>
        <NavLink to="/stopwatch">Stopwatch</NavLink>
      </button>
      <button>
        <NavLink to="/password-generator">Password Generator</NavLink>
      </button>
      <button>
        <NavLink to="/throttle">Throttle</NavLink>
      </button>
    </div>
  );
}

export default App;
