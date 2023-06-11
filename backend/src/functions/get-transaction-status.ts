import axios from 'axios';

export const getTransactionStatus = async (hash : string) => {
    try {
        const response = await axios.get(`https://thornode.ninerealms.com/thorchain/alpha/tx/status/${hash}`, {
        });
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
}