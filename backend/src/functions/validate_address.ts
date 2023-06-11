import axios from 'axios';

export const validateAddress = async (currency : string, address : string) => {
    try {
        const response = await axios.get("https://dev-api.thorswap.net/universal/validateAddress", {
            params : {
                currency : currency,
                address : address
            }
        });
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
}