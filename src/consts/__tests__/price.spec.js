import { PRICES } from '../price';

describe('PRICES', () => {
  it('should have proper values', () => {
    expect(PRICES).toMatchSnapshot();
  });
});
