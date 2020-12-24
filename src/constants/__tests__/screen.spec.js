import { BREAKPOINTS } from '../screen';

describe('BREAKPOINTS', () => {
  it('should have proper values', () => {
    expect(BREAKPOINTS).toMatchSnapshot();
  });
});
