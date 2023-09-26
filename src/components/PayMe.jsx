import React from 'react';

const PayMe = ({ setBuyerCash, buyerCash }) => {
  const mafs = (event) => {
    const newDollaBills = event.target.value.replace(/[^0-9]/g, '');
    const newerDollBills = Math.round(parseInt(newDollaBills)) || 0;
    setBuyerCash(newerDollBills);
  };
  return (
    <>
      <span>Pay Me</span>
      <input type="text" value={buyerCash} onChange={mafs}></input>
    </>
  );
};

export default PayMe;
