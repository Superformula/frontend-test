import {DEFAULT_LIMIT, DEFAULT_OFFSET} from 'Constants';
import signals from 'Store/signals';

export function createAction(type, payload = {}) {
    return {type, ...payload};
}

export const loadBusinesses = (filters = {}, limit = DEFAULT_LIMIT, offset = DEFAULT_OFFSET) =>
    createAction(signals.UPDATE_FILTERS, {filters, limit, offset});

export const storeUpdatedPosition = position => {
    if (typeof position === 'object' && 'coords' in position) {
        return createAction(signals.STORE_LOCATION, {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
    } else {
        return createAction(signals.STORE_LOCATION, {position});
    }
};

export const updateFilters = (filters) => createAction(signals.UPDATE_FILTERS, {filters});

export const changePage = (limit, offset) => createAction(signals.UPDATE_PAGE, {limit, offset});
