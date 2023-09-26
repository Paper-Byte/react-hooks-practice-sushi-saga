import React from 'react';

function MoreButton({
  sushiToRemove,
  setSushiList,
  sushiList,
  setSushiSlice,
  setSushiToRemove,
}) {
  const someStateSetsIGuess = () => {
    setSushiSlice((prevState) => prevState + 5);
    const newSushiList = sushiList.filter(
      (sushi) => !sushiToRemove.includes(sushi.id)
    );
    setSushiToRemove([]);
    setSushiList(newSushiList);
  };
  return <button onClick={someStateSetsIGuess}>More sushi!</button>;
}

export default MoreButton;
