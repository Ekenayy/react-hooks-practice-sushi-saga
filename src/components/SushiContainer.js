import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer( { money, onBuy, sushis, setBoughtSushi, boughtSushi }) {
  
  const [page, setPage] = useState(0)
  const size = page + 4


  let fourSushis = sushis.slice(page, size).map((sushi) => {
    return <Sushi money={money} key={sushi.id} onBuy={onBuy} boughtSushi={boughtSushi} setBoughtSushi={setBoughtSushi} sushi={sushi}/>
  })
  
  return (
    <div className="belt">
      {fourSushis}
      <MoreButton page={page} setPage={setPage} />
    </div>
  );
}

export default SushiContainer;
