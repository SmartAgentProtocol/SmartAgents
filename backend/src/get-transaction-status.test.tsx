import axios from 'axios';


jest.mock('axios');

describe('getTransactionStatus', () => {
  it('should return data from axios response', async () => {
    const mockData = { id: '12345', status: 'success' };
    (axios.get as jest.Mocked<any>).mockResolvedValue({ data: mockData });
    const result = await getTransactionStatus('12345');
    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith('https://dev-api.thorswap.net/universal/status', {
      params: {
        id: '12345',
        type: 'SWAP:TC-TC'
      }
    });
  });

  it('should return error if axios call throws error', async () => {
    const mockError = new Error('Request failed');
    (axios.get as jest.Mocked<any>).mockRejectedValue(mockError);
    const result = await getTransactionStatus('12345');
    expect(result).toEqual(mockError);
    expect(axios.get).toHaveBeenCalledWith('https://dev-api.thorswap.net/universal/status', {
      params: {
        id: '12345',
        type: 'SWAP:TC-TC'
      }
    });
  });
});
function getTransactionStatus(arg0: string) {
    throw new Error('Function not implemented.');
}

