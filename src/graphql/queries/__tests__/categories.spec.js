import { categoriesQuery } from '../categories';

describe('categoriesQuery', () => {
  it('should build correct restaurant query', () => {
    expect(categoriesQuery).toMatchSnapshot();
  });
});
