import fetchMock from 'fetch-mock';
import request from './request';

describe('request', () => {
  it('should throw if url is not provided', async () => {
    await expect(request({ url: '' })).rejects.toEqual(new Error('Missing a URL to fetch.'));
  });

  it('should throw on a 500 response', async () => {
    fetchMock.get('/fiveHundred', 500);
    await expect(request({ url: '/fiveHundred' })).rejects.toMatchObject({ status: 500 });
  });

  it('should throw on a 400 response', async () => {
    fetchMock.get('/fourHundred', 400);
    await expect(request({ url: '/fourHundred' })).rejects.toMatchObject({ status: 400 });
  });

  it('should successfully fetch data', async () => {
    fetchMock.get('/restaurants', { yummy: 'food' });
    await expect(await request({ url: '/restaurants' })).toEqual({ yummy: 'food' });
  });
});
