import { COLORS } from '../colors';

describe('COLORS', () => {
  it('should have proper values', () => {
    expect(COLORS).toMatchSnapshot();
  });
});
