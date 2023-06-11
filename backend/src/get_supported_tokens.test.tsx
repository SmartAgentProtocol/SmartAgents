import axios from 'axios';
import { getSupportedTokens } from './functions/get_supported_tokens';


jest.mock('axios');

describe('getSupportedTokens', () => {
  it('sends a GET request to the correct URL', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: 'mocked response' });
    await getSupportedTokens();
    expect(axios.get).toHaveBeenCalledWith("https://dev-api.thorswap.net/universal/currenciesFull");
  });

  it('returns the correct response data', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: 'mocked response' });
    const result = await getSupportedTokens();
    expect(result).toBe('mocked response');
  });

  it('handles errors correctly', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error('mocked error'));
    console.error = jest.fn();
    await getSupportedTokens();
    expect(console.error).toHaveBeenCalledWith(new Error('mocked error'));
  });
});
