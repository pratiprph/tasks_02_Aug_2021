import React, { useState,createContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

import "./styles.css";

const MyContext = createContext()
const MyProvider = MyContext.Provider
const MyConsumer = MyContext.Consumer

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

  function greetings(){
    console.log("greetings")
  }
  return (
    <div className="rate_cont">
      <ul>
        {rating.map((el) => (
          <li key={el}
          onClick={greetings}
          >{el} |</li>
        ))}
      </ul>
    </div>
  );
};

const ThanksComp=()=>{
  return (
    <div>
      thanks
    </div>
  )
}

export default function App() {
  const [display, setDisplay] = useState(false);
  const [greetings, setGreetings] = useState(false);

  return (
    <MyProvider value={{
      greetings:greetings,
      showGreetings:()=>setGreetings(true)
    }}>
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
        { 
          greetings ? <Thanks/> : null
        }
      </div>
      <React.Fragment>
        {
          greetings ? <ThanksComp/> : null
        }
      </React.Fragment>
    </div>
    </MyProvider>
  );
}
