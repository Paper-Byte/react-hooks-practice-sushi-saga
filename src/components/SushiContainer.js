import React, { useState, useEffect } from 'react';
import MoreButton from './MoreButton';
import Sushi from './Sushi';

function SushiContainer({
  sushiList,
  setSushiList,
  setSushiPlates,
  setBuyerCash,
  buyerCash,
}) {
  const [sushiSlice, setSushiSlice] = useState(0);
  const [sushiToRemove, setSushiToRemove] = useState([]);

  useEffect(() => {
    if (sushiSlice >= 100) {
      setSushiSlice(0);
    }
  }, [sushiSlice]);

  const sushiToDisplay = [...sushiList].slice(
    sushiSlice,
    sushiSlice + 5
  );

  return (
    <div className="belt">
      {sushiToDisplay.map((sushi) => (
        <Sushi
          key={sushi.id}
          setSushiToRemove={setSushiToRemove}
          sushi={sushi}
          setSushiPlates={setSushiPlates}
          setBuyerCash={setBuyerCash}
          buyerCash={buyerCash}
        />
      ))}
      <MoreButton
        setSushiToRemove={setSushiToRemove}
        sushiToRemove={sushiToRemove}
        setSushiList={setSushiList}
        sushiList={sushiList}
        setSushiSlice={setSushiSlice}
      />
    </div>
  );
}

export default SushiContainer;
