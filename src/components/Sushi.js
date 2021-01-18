import React, {useState} from "react";

function Sushi( {sushi, money, onBuy, boughtSushi, setBoughtSushi} ) {

  const { name, img_url, price, id} = sushi
  const [clicked, setClicked] = useState(false)

  const handleClick = (e) => {
  if (money >= sushi.price) {
    setClicked(true)
    onBuy(sushi)
  }

  }

  //  console.log(clicked)

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {clicked ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
