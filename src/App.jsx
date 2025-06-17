import { NavLink } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <button>
        <NavLink to="/stopwatch">Stopwatch</NavLink>
      </button>
    </div>
  );
}

export default App;
