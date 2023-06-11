// pages/ThorQuote.tsx

import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

type Pool = {
  asset: string;
  status: string;
  assetDepth: number;
  runeDepth: number;
  units: number;
  synthUnits: number;
  liquidityUnits: number;
  addAssetLiquidityUnits: number;
  addRuneLiquidityUnits: number;
  withdrawAsset: number;
  withdrawRune: number;
  assetAddedTotal: number;
  runeAddedTotal: number;
  addLiquidityCount: number;
  withdrawCount: number;
};

type ThorQuoteProps = {
  pools: Pool[];
};

const ThorQuote = ({ pools }: ThorQuoteProps) => {
  const [displayPools, setDisplayPools] = useState<Pool[]>([]);

  useEffect(() => {
    setDisplayPools(pools);
  }, [pools]);

  return (
    <div>
      <h1>Thor Quote</h1>
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Status</th>
            <th>Average Depth</th>
          </tr>
        </thead>
        <tbody>
          {displayPools.map((pool) => (
            <tr key={pool.asset}>
              <td>{pool.asset}</td>
              <td>{pool.status}</td>
              <td>
                {Number.isFinite(pool.assetDepth) && Number.isFinite(pool.runeDepth)
                  ? (pool.assetDepth + pool.runeDepth) / 2
                  : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {

      const res = await fetch('https://thornode.ninerealms.com/thorchain/pools');
      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}: ${res.statusText}`);
      }
      const pools: Pool[] = await res.json();
  
      const validPools = pools.filter(
        (pool) =>
          pool.asset &&
          pool.status &&
          Number.isFinite(pool.assetDepth) &&
          Number.isFinite(pool.runeDepth)
      );
  
      return {
        props: {
          pools: validPools,
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          pools: [],
        },
      };
    }
  };

  

export default ThorQuote;
