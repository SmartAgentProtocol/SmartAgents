import axios from 'axios';

const one = 100000000, tenThousand = 10000, daysInYear = 365 / 7, secondsInWeek = 7 * 24 * 60 * 60;
const USD = `BNB.BUSD-BD1`;

const baseEndpoint = 'https://thornode.ninerealms.com/';
const blocksStub = 'blocks/latest';
const poolsStub = 'thorchain/pools';
const poolStub = 'thorchain/pool/';
const saversStub = '/savers';
const mimirStub = 'thorchain/mimir';

let sortedPools = [], savers = [];
let uniqueSavers = 0, totalRuneValue = 0, rune_USD = 0, synthCap = 0;

const getMimir = async () => {
  synthCap = 2 * (((await axios.get(`${baseEndpoint}${mimirStub}`)).data).MAXSYNTHPERPOOLDEPTH) / tenThousand;
};

const getPools = async () => {
  return ((await axios.get(`${baseEndpoint}${poolsStub}`)).data).filter((x) => x.status == 'Available');
};

const getPoolAPR = async (pool) => {
  let height_now = (await axios.get(`${baseEndpoint}${blocksStub}`)).data.block.header.height;
  let height7DaysAgo = `?height=${height_now - (secondsInWeek) / 6}`;
  let oldPool = (await axios.get(`${baseEndpoint}${poolStub}${pool.asset}${height7DaysAgo}`)).data;
  let oldSaverValue = oldPool.savers_depth / oldPool.savers_units;
  let newSaverValue = pool.savers_depth / pool.savers_units;
  let saver7DayGrowth = (newSaverValue - oldSaverValue) / oldSaverValue;
  return saver7DayGrowth * (daysInYear);
};

const getSaversCount = async (pool) => {
  savers = (await axios.get(`${baseEndpoint}${poolStub}${pool}/${saversStub}`)).data;
  return savers.length;
};

const scanPools = async (pools) => {
  for (pool of pools) {
    if (pool.asset == USD) {
      rune_USD = pool.balance_asset / pool.balance_rune;
    }
    if (pool.savers_depth == 0) {
      continue;
    }
    pool.ticker = pool.asset.substr(0, pool.asset.search(/\./));
    pool.saverReturn = await getPoolAPR(pool);
    pool.saverCount = await getSaversCount(pool.asset);
    uniqueSavers += pool.saverCount;
    totalRuneValue += (pool.savers_depth * pool.balance_rune) / pool.balance_asset / one;
    pool.saverCap = synthCap * pool.balance_asset;
    pool.filled = pool.synth_supply / pool.saverCap;
    pool.earnings = pool.savers_depth - pool.savers_units;
    sortedPools.push(pool);
  }
  return sortedPools.sort((a, b) => (a.saverCount > b.saverCount ? -1 : b.saverCount > a.saverCount ? 1 : 0));
};

const fetchSaversData = async () => {
  await getMimir();
  const pools = await getPools();
  const sortedPoolsData = await scanPools(pools);
  return {
    sortedPools: sortedPoolsData,
    uniqueSavers: uniqueSavers,
    totalRuneValue: totalRuneValue,
    rune_USD: rune_USD,
  };
};

export { fetchSaversData };

