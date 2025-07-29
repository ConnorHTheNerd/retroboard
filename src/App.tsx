import Scoreboard from "./components/Scoreboard";
// import Button from "./components/Button"; - NOT IN USE

import "./App.css";

function App() {
  let countries = [
    "Testium",
    "Testembourg",
    "United Testdom",
    "Testaly",
    "Testria",
    "Testerlands",
    "Testmany",
    "Trance",
    "Testmark",
    "Testland",
  ];

  return (
    <div className="app">
      <Scoreboard countries={countries} />
      <div className="button-container">
        <button type="button" className="btn btn-danger">
          Reset Scoreboard
        </button>
      </div>
    </div>
  );
}

export default App;
