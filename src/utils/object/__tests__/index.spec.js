import { isObjectEmpty } from '../';

describe('isObjectEmpty', () => {
  it('should return false if entry is not an object', () => {
    const returnedValue = isObjectEmpty();
    expect(returnedValue).toBe(false);
  });

  it('should return true object is empty', () => {
    const returnedValue = isObjectEmpty({});
    expect(returnedValue).toBe(true);
  });

  it('should return false object is not empty', () => {
    const returnedValue = isObjectEmpty({ test: 1 });
    expect(returnedValue).toBe(false);
  });
});
