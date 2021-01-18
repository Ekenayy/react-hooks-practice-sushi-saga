import React from "react";

function MoreButton({page, setPage}) {

  const handleClick = () => {
    setPage(page + 4)
  }
  // console.log(page)

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
