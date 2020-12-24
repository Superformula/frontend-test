import { restaurantsQuery } from '../restaurants';

describe('restaurantsQuery', () => {
  it('should build correct restaurant query', () => {
    expect(restaurantsQuery).toMatchSnapshot();
  });
});
