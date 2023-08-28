import React, { useEffect, useState } from "react";
import "./coin.css";

function CoinToss() {
  const [result, setResult] = useState("");
  const [countHead, setCountHead] = useState(0);
  const [countTail, setCountTail] = useState(0);

  // useEffect(() => {
  //   if (result === "heads") {
  //     setCountHead(countHead + 1);
  //   } else if (result === "tails") {
  //     setCountTail(countTail + 1);
  //   }
  // }, [result]);
  const coinToss = () => {
    if (Math.random() < 0.5) {
      setResult("heads");
      console.log("heads");

      // setTimeout(() => {
      //   setCountHead(countHead + 1);
      // }, 2000);
      //   console.log(countHead);
    } else {
      setResult("tails");
      console.log("tails");
      // setCountTail(countTail + 1);
      // console.log(countTail);
    }
  };

  return (
    <div className="App">
      <div id="coin" className={result} key={+new Date()}>
        <div className="side-a">
          <h2>TAIL</h2>
        </div>
        <div className="side-b">
          <h2>HEAD</h2>
        </div>
      </div>
      <h1>Flip a coin</h1>
      <button id="btn" onClick={coinToss}>
        Coin Toss
      </button>
      {/* <h3>Heads: {countHead}</h3>
      <h3>Tails: {countTail}</h3> */}
    </div>
  );
}

export default CoinToss;
