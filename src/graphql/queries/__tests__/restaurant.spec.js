import { restaurantQuery } from '../restaurant';

describe('restaurantQuery', () => {
  it('should build correct restaurant query', () => {
    expect(restaurantQuery).toMatchSnapshot();
  });
});
