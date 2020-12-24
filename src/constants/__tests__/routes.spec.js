import { ROUTES } from '../routes';

describe('ROUTES', () => {
  it('should have proper values', () => {
    expect(ROUTES).toMatchSnapshot();
  });
});
