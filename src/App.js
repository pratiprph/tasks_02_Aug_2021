import React, { useState,createContext,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
//import { useHistory } from "react-router-dom";

import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

import "./styles.css";
import { resolveModuleName } from "typescript";

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
  const [rating, setRating] = useState({});
  //const history = useHistory();
  console.log(history)
  function greetings(){
    // fetch('/api', {
    //   method: 'POST',
    //   body: rating,
    // })
    //   .then(res => res.json())
    //   .then(json => console.log(json))
  }
 
   useEffect(()=>{
     fetch('http://localhost:3001/api')
       .then(res=>res.json())
       .then(res=>setRating(res))
   },[])
 
   const rates = Object.keys(rating)
  function goBack(){
    history.go('/')
  }
  return (
    <div className="rate_cont">
      <span className="close" style={{position:"absolute",right:"15px",cursor: "pointer"}}
       onClick={goBack}
      >&times;</span>
      <ul>
        {rates.map((el) => (
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

export default function App(props) {
  const [display, setDisplay] = useState(false);
  const [greetings, setGreetings] = useState(false);
 console.log(props)
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
            bottom: "150px"
          }}
        >
          <SentimentVerySatisfiedIcon onMouseOver={() => setDisplay(true)} />
          {display ? <BadgeComp /> : null}
        </div>
       
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
