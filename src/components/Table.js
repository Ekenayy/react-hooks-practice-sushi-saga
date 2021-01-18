import React from "react";
// plates = []
function Table({ boughtSushi, money }) {
  // renders an empty plate for every element in the array
  const emptyPlates = boughtSushi.map((_, index) => (
    <div key={boughtSushi.id } className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        {money > 0 ? `You have: ${money} remaining!` : "You're out of money!"}
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
