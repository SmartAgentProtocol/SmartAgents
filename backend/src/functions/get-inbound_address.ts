import axios from 'axios';

interface InboundAddress {
  address: string;
  chain: string;
  chain_lp_actions_paused: boolean;
  chain_trading_paused: boolean;
  dust_threshold: string;
  gas_rate: string;
  gas_rate_units: string;
  global_trading_paused: boolean;
  halted: boolean;
  outbound_fee: string;
  outbound_tx_size: string;
  pub_key: string;
  router: string;
}

async function getInboundAddress(asset: string): Promise<InboundAddress | undefined> {
  try {
    const response = await axios.get('https://thornode.ninerealms.com/thorchain/inbound_addresses');
    const inboundAddresses = response.data as InboundAddress[];
    const inboundAddress = inboundAddresses.find(address => address.chain === asset);
    return inboundAddress;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export const getInboundAddressDetails = async (asset: string) => {
    const details = await getInboundAddress(asset);
    return details;
}
