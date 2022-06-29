import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import cover from "./img/cover.png";
import sword from "./img/sword-1.png";

function App() {
  const [swap, setSwap] = useState(false);

  const handleSwap = () => {
    setSwap((prevState) => !prevState);
  };

  return (
    <div className="App">
      <h1 className="header">Memory Game</h1>
      <button className="button">New Game</button>
      <p className="turns">
        Turns: <span>0</span>
      </p>

      <div className="cards-container">
        <Card swap={swap} img={sword} setSwap={handleSwap} />

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
