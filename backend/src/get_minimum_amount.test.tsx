import axios from 'axios';
import { getMinimumAmountToSend } from './functions/get_minimum_amount_to_send';

jest.mock('axios');

describe('getMinimumAmountToSend', () => {
  it('sends a GET request to the correct URL with the correct parameters', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: 'mocked response' });
    await getMinimumAmountToSend('BTC.BTC', 'ETH.ETH');
    expect(axios.get).toHaveBeenCalledWith("https://dev-api.thorswap.net/universal/minAmountDetails", {
      params: {
        "from": "BTC.BTC",
        "to": "ETH.ETH"
      }
    });
  });

  it('returns the correct response data', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: 'mocked response' });
    const result = await getMinimumAmountToSend('ETH.ETH', 'ETH.ETH');
    expect(result).toBe('mocked response');
  });

  it('handles errors correctly', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error('mocked error'));
    console.error = jest.fn();
    await getMinimumAmountToSend('asset1', 'asset2');
    expect(console.error).toHaveBeenCalledWith(new Error('mocked error'));
  });
});
