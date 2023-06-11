import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SaverTracker = () => {
  const [sortedPools, setSortedPools] = useState([]);
  const [uniqueSavers, setUniqueSavers] = useState(0);
  const [totalRuneValue, setTotalRuneValue] = useState(0);
  const [rune_USD, setRune_USD] = useState(0);
  const [synthCap, setSynthCap] = useState(0);
  const getMimir = async () => {
    // Fetch and process data from Mimir
    // Then update the relevant state variables
  };
  const getPools = async () => {
    // Fetch and process data related to pools
    // Return the result
  };

  const scanPools = async (pools) => {
    // Process the pools data
    // Then update the relevant state variables
  };
  

  // ... other constants and functions go here ...

  useEffect(() => {
    const main = async () => {
      await getMimir();
      await scanPools(await getPools());
    };

    main();
  }, []);

  return (
    <div>
      <h2>THORChain Savers Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Depth</th>
            {/* Add other columns as needed */}
          </tr>
        </thead>
        <tbody>
          {sortedPools.map(pool => (
            <tr key={pool.asset}>
              <td>{pool.ticker}</td>
              <td>{Number(pool.savers_depth / one).toLocaleString()}</td>
              {/* Add other data as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        {uniqueSavers} unique savers with ${Number(totalRuneValue * rune_USD).toLocaleString()} USD saved
      </p>
    </div>
  );
};

export default SaverTracker;
