import React, { useState } from 'react';

function Sushi({
  sushi,
  setSushiToRemove,
  setSushiPlates,
  setBuyerCash,
  buyerCash,
}) {
  const [isEaten, setIsEaten] = useState(false);

  const setSomeStates = () => {
    if (!isEaten) {
      setIsEaten(true);
    }
    setBuyerCash(buyerCash - sushi.price);
    setSushiPlates((prevState) => [...prevState, 'anotha one']);
    setSushiToRemove((prevState) => [...prevState, sushi.id]);
  };

  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={buyerCash >= sushi.price ? setSomeStates : null}
      >
        {isEaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
