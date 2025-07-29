import { useState } from "react";
import "../Scoreboard.css";
import votingLight from "../assets/voting-light.png";
import notVoting from "../assets/not-voting.png";

interface Props {
  name: string;
  runningOrder: number;
  isVoting?: boolean;
}

const Country = ({ name, runningOrder, isVoting = false }: Props) => {
  let [points, setPoints] = useState(0);

  function handleClick() {
    setPoints(points++);
  }

  let img_path = notVoting;
  let ro = runningOrder.toString();

  if (isVoting) {
    img_path = votingLight;
  }

  return (
    <div className="country-container">
      <div className="country">
        <div className="voting-light">
          <img src={img_path} height="25" width="25"></img>
        </div>
        <div className="running-order">{runningOrder < 10 ? "0" + ro : ro}</div>
        <button className="name" onClick={handleClick}>
          {name}
        </button>
        <div className="points">{points}</div>
      </div>
    </div>
  );
};

export default Country;
