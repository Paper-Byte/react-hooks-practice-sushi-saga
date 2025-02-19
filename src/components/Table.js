import React from 'react';

function Table({ sushiPlates, buyerCash }) {
  // renders an empty plate for every element in the array
  const emptyPlates = sushiPlates.map((_, index) => (
    <div
      key={index}
      className="empty-plate"
      style={{ top: -7 * index }}
    />
  ));

  return (
    <>
      <h1 className="remaining">You have: ${buyerCash} remaining!</h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
