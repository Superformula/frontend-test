import qs from 'qs';

/*
  toggleFilter:
  add / remove filters from the state tree by object key
*/
const toggleFilter = (state, filter, value) => {
  const newFilters = Object.assign(state.filters, {});

  if (typeof value === 'string') {
    if (value === 'All') {
      delete newFilters[filter];
    } else if (!newFilters[filter]) {
      newFilters[filter] = [value];
    } else if (newFilters[filter].includes(value)) {
      newFilters[filter].pop(value);
    } else {
      newFilters[filter].push(value);
    }
  } else {
    // check for boolean
    if (newFilters[filter]) {
      delete newFilters[filter];
      return newFilters;
    }

    newFilters[filter] = value;
  }

  return newFilters;
};

export default {
  toggleFilter,
};

/*
buildQueryObject
The yelp API requires a comma separated list
instead of array formatted string for the filter
query params; this helps build that.
*/

export const buildQueryObject = (params) => {
  const queryObject = {};
  Object.keys(params).forEach((param) => {
    if (typeof params[param] === 'string') {
      queryObject[param] = params[param];
    } else if (typeof params[param] === 'boolean') {
      queryObject[param] = params[param];
    } else {
      queryObject[param] = params[param].join(',');
    }
  });
  return queryObject;
};
