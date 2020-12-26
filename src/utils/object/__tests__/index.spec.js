import { isObjectEmpty, set, get } from '../';

describe('Object utils', () => {
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

  describe('get', () => {
    it('should return a nested attribute', () => {
      const source = { test: { nested: { attribute: 1 } } };
      const path = ['test', 'nested', 'attribute'];
      const returnedValue = get(source, path);
      expect(returnedValue).toBe(1);
    });

    it('should return original source if path is invalid', () => {
      const source = { test: { nested: { attribute: 1 } } };
      const path = null;
      const returnedValue = get(source, path);
      expect(returnedValue).toEqual(source);
    });
  });
});
