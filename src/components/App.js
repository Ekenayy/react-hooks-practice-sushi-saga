import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  // _limit=4&offset=8
  const [sushis, setSushis] = useState([])
  const [boughtSushi, setBoughtSushi] = useState([])
  const [money, setMoney] = useState(100)

  const onBuy = (sushi) => {

    setBoughtSushi([
      ...boughtSushi,
      sushi
    ])
    setMoney(money - sushi.price)
  
  }

  // console.log(money)

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(sushis => setSushis(sushis))
  } 
  ,[])

  return (
    <div className="app">
      <SushiContainer money={money} onBuy={onBuy} sushis={sushis} boughtSushi={boughtSushi} setBoughtSushi={setBoughtSushi} />
      <Table boughtSushi={boughtSushi} money={money} />
    </div>
  );
}

export default App;
