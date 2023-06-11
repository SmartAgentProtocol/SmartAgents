// components/SaversComponent.js
import { useState, useEffect } from 'react';
import { fetchSaversData } from '../utils/fetchSaversData';

const SaversComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const saversData = await fetchSaversData();
      setData(saversData);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.sortedPools.map((pool) => (
        <div key={pool.asset}>
          <h2>{pool.ticker}</h2>
          <p>
            {pool.saverCount} savers, {(pool.filled * 100).toFixed(2)}% filled, {(pool.saverReturn * 100).toFixed(2)}% APR, {(pool.earnings / data.one).toLocaleString()} earned
          </p>
        </div>
      ))}
      <div>
        <p>
          {data.uniqueSavers} unique savers with ${(data.totalRuneValue * data.rune_USD).toLocaleString()} USD saved
        </p>
      </div>
    </div>
  );
};

export default SaversComponent;
