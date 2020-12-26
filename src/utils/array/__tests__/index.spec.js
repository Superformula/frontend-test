import { applyMultipleFilters } from '../';

describe('applyMultipleFilters', () => {
  it('should return undefined if nothing is passed', () => {
    const returnedValue = applyMultipleFilters();
    expect(returnedValue).not.toBeDefined();
  });

  it('should apply multiple filters to list of objects', () => {
    const entry = [
      { id: 1, isOpen: false, price: '$' },
      { id: 2, isOpen: false, price: '$' },
      { id: 3, isOpen: true, price: '$' },
      { id: 4, isOpen: false, price: '$$$' },
      { id: 5, isOpen: true, price: '$$' },
    ];
    const filters = { isOpen: true, price: '$' };
    const returnedValue = applyMultipleFilters(entry, filters);
    expect(returnedValue.length).toBe(1);
  });

  it('should apply a single filter to list of objects', () => {
    const entry = [
      { id: 1, isOpen: false, price: '$' },
      { id: 2, isOpen: false, price: '$' },
      { id: 3, isOpen: true, price: '$' },
      { id: 4, isOpen: false, price: '$$$' },
      { id: 5, isOpen: true, price: '$$' },
    ];
    const filters = { isOpen: true };
    const returnedValue = applyMultipleFilters(entry, filters);
    expect(returnedValue.length).toBe(2);
  });

  it('should return original if no filters are applied', () => {
    const entry = [
      { id: 1, isOpen: false, price: '$' },
      { id: 2, isOpen: false, price: '$' },
      { id: 3, isOpen: true, price: '$' },
      { id: 4, isOpen: false, price: '$$$' },
      { id: 5, isOpen: true, price: '$$' },
    ];
    const filters = { isOpen: '' };
    const returnedValue = applyMultipleFilters(entry, filters);
    expect(returnedValue.length).toBe(5);
  });
});
