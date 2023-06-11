import axios from 'axios';


jest.mock('axios');

describe('getExchangeDetails', () => {
  it('sends a GET request to the correct URL with the correct parameters', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: 'mocked response' });
    getExchangeDetails('BTC.BTC', 'ETH.ETH', 10);
    expect(axios.get).toHaveBeenCalledWith("https://dev-api.thorswap.net/universal/exchangeAmountDetails", {
      params: {
        "from": 'BTC.BTC',
        "to": 'ETH.ETH',
        "amount": "10"
      }
    });
  });

  it('returns the correct response data', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: 'mocked response' });
    const result = await getExchangeDetails('BTC.BTC', 'ETH.ETH', 10);
    expect(result).toBe('mocked response');
  });

  it('handles errors correctly', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error('mocked error'));
    console.error = jest.fn();
    await getExchangeDetails('BTC.BTC', 'ETH.ETH', 10);
    expect(console.error).toHaveBeenCalledWith(new Error('mocked error'));
  });
});
function getExchangeDetails(arg0: string, arg1: string, arg2: number) {
    throw new Error('Function not implemented.');
}

