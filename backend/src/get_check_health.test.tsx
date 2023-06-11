import axios from 'axios';
import { getCheckHealth } from './functions/get_status_of_wrapper';


jest.mock('axios');

describe('getCheckHealth', () => {
  it('sends a GET request to the correct URL', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: 'mocked response' });
    await getCheckHealth();
    expect(axios.get).toHaveBeenCalledWith("https://dev-api.thorswap.net/universal");
  });

  it('returns the correct response data', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: 'mocked response' });
    const result = await getCheckHealth();
    expect(result).toBe('mocked response');
  });

  it('handles errors correctly', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error('mocked error'));
    console.error = jest.fn();
    await getCheckHealth();
    expect(console.error).toHaveBeenCalledWith(new Error('mocked error'));
  });
});
