import axios from 'axios';

const baseEndpoint = 'https://thornode.ninerealms.com/' // Define the base endpoint here
const blocksStub = 'blocks/latest' // Define the blocks stub here
const poolStub = 'thorchain/pool/' // Define the pool stub here

const secondsInWeek = 604800;
const daysInYear = 365;



async function getPoolApr(pool : any) {
  const heightNowResponse = await axios.get(`${baseEndpoint}${blocksStub}`);

  console.log(heightNowResponse, "height now response");

  const heightNow = heightNowResponse.data.block.header.height;

  console.log(heightNow, "height now");

  const height7DaysAgo = `?height=${heightNow - secondsInWeek / 6}`;
  const oldPoolResponse = await axios.get(`${baseEndpoint}${poolStub}${pool.asset}${height7DaysAgo}`);
  const oldPool = oldPoolResponse.data;

  console.log(oldPool, "old pool");

  const oldSaverValue = oldPool.savers_depth / oldPool.savers_units;

 

const newSaverValue = pool.saversDepth
/ pool.saversUnits;

console.log(newSaverValue, "new saver value");

const saver7DayGrowth = (newSaverValue - oldSaverValue) / oldSaverValue;

console.log(saver7DayGrowth, "saver 7 day growth");

  
  return saver7DayGrowth * daysInYear;
};


export function getPoolAprPercentage (pool : any) {
    const poolApr =  getPoolApr(pool);
    console.log(poolApr, "pool apr");
    return poolApr;
}
