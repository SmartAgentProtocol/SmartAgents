import axios from 'axios';
import { addLiquidity } from './functions/add_liquidity';


jest.mock('axios');

describe('addLiquidity', () => {
  it('throws an error if the amount is less than or equal to 0', async () => {
    await expect(addLiquidity('BTC.BTC', 'ETH.ETH', 0, '0x7d8911eb1c72f0ba29302be30301b75cec81f622')).rejects.toThrow('Amount must be greater than 0');
  });

  it('posts to the correct URL', async () => {
    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({ data: 'mocked response' });
    await addLiquidity('BTC.BTC', 'ETH.ETH', 0.1, '0x7d8911eb1c72f0ba29302be30301b75cec81f622');
    expect(axios.post).toHaveBeenCalledWith("https://dev-api.thorswap.net/universal/transaction", {
      data: {
        "from": "BTC.BTC",
        "to": "ETH.ETH",
        "address": "0x7d8911eb1c72f0ba29302be30301b75cec81f622",
        "amount": "0.1",
        "slippage": 1,
        "affiliateFee": 10,
        "affiliateAddress": "thor160yye65pf9rzwrgqmtgav69n6zlsyfpgm9a7xk"
      }
    });
  });

  it('returns the correct response data', async () => {
    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({ data: 'mocked response' });
    const result = await addLiquidity('BTC.BTC', 'ETH.ETH', 0.1, '0x7d8911eb1c72f0ba29302be30301b75cec81f622');
    expect(result).toBe('mocked response');
  });

  it('handles errors correctly', async () => {
    (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValue(new Error('mocked error'));
    console.error = jest.fn();
    await await addLiquidity('BTC.BTC', 'ETH.ETH', 0.1, '0x7d8911eb1c72f0ba29302be30301b75cec81f622');
    expect(console.error).toHaveBeenCalledWith('Failed to add liquidity: mocked error');
  });
});
