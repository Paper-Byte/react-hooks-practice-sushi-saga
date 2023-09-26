import React, { useState, useEffect } from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';
import PayMe from './PayMe';

const API = 'http://localhost:3001/sushis';

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [sushiPlates, setSushiPlates] = useState([]);
  const [buyerCash, setBuyerCash] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`${API}`);
        const data = await resp.json();
        setSushiList((prevState) => [...prevState, ...data]);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <SushiContainer
        sushiList={sushiList}
        setSushiList={setSushiList}
        setSushiPlates={setSushiPlates}
        setBuyerCash={setBuyerCash}
        buyerCash={buyerCash}
      />
      <Table sushiPlates={sushiPlates} buyerCash={buyerCash} />
      <PayMe setBuyerCash={setBuyerCash} buyerCash={buyerCash} />
    </div>
  );
}

export default App;
