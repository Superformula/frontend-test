/**
 * Applies multiple filters to list of items.
 *
 * @param {object[]} items - list of items to be filtered.
 * @param {object} filters - object with filter values to be applied.
 *
 * @returns {object[]} - filtered list.
 */
export const applyMultipleFilters = (items, filters = {}) => {
  const filterKeys = Object.keys(filters);
  return items?.filter(item =>
    filterKeys.every(key => {
      if (!filters[key]) return true;
      return item[key] === filters[key];
    })
  );
};
