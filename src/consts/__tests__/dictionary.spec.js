import { DICTIONARY } from '../dictionary';

describe('DICTIONARY', () => {
  it('should have proper values', () => {
    expect(DICTIONARY).toMatchSnapshot();
  });
});
