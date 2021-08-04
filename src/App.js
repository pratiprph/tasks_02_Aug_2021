import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

import "./styles.css";

const BadgeComp = () => {
  const [show, setShow] = useState(false);
  function showRatings() {
    setShow(true);
  }
  return (
    <div>
      <div className="badge" onClick={showRatings}>
        <div>Help us improve</div>
      </div>
      {show ? <RatingCard /> : null}
    </div>
  );
};

const RatingCard = () => {
  const [rating, setRating] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="rate_cont">
      <ul>
        {rating.map((el) => (
          <li key={el}>{el} |</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <div
        style={{
          width: "400px",
          height: "500px",
          backgroundColor: "green"
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "70px"
          }}
        >
          <SentimentVerySatisfiedIcon onMouseOver={() => setDisplay(true)} />
          {display ? <BadgeComp /> : null}
        </div>
      </div>
    </div>
  );
}
