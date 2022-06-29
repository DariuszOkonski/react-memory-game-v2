import { useState } from "react";
import "./App.css";
import cover from "./img/cover.png";
import sword from "./img/sword-1.png";

function App() {
  const [swap, setSwap] = useState(false);

  return (
    <div className="App">
      <h1 className="header">Memory Game</h1>
      <button
        onClick={() => setSwap((prevState) => !prevState)}
        className="button"
      >
        New Game
      </button>
      <p className="turns">
        Turns: <span>0</span>
      </p>

      <div className="cards-container">
        <div className="card">
          <img className={`front ${swap && "hide"}`} src={cover} alt="" />
          <img className={`back ${swap && "show"}`} src={sword} alt="" />
        </div>
        <div className="card">
          <img src={cover} alt="" />
        </div>
        <div className="card">
          <img src={cover} alt="" />
        </div>
        <div className="card">
          <img src={cover} alt="" />
        </div>
        <div className="card">
          <img src={cover} alt="" />
        </div>
        <div className="card">
          <img src={cover} alt="" />
        </div>
        <div className="card">
          <img src={cover} alt="" />
        </div>
        <div className="card">
          <img src={cover} alt="" />
        </div>
        <div className="card">
          <img src={cover} alt="" />
        </div>
        <div className="card">
          <img src={cover} alt="" />
        </div>
        <div className="card">
          <img src={cover} alt="" />
        </div>
        <div className="card">
          <img src={cover} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
