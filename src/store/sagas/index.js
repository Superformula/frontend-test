import {all, call, fork, put, select, take, takeEvery, takeLatest} from 'redux-saga/effects';
import {getBusiness, getBusinesses, getCategories, getReviews, getThirdPartyLocationData} from 'Services';
import {createAction, loadBusiness, loadBusinesses, storeUpdatedPosition} from 'Store/actions';
import {clearBusinessCache, clearCategoryCache, selectFilters, selectLocation} from 'Store/selectors';
import signals from 'Store/signals';
import {safeInvoke} from 'Utils';

// This fails on certain browsers...some chromium bug
function updatePosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 200, // 200ms timeout window
            maximumAge: 75000, // 1:15 min
            enableHighAccuracy: true,
        });
    });
}

function* locationSaga() {
    while (true) {
        let position;
        try {
            position = yield call(updatePosition);
        } catch (e) {
            console.warn('navigator.geolocation failed to give current position.');
            try {
                const data = yield call(getThirdPartyLocationData);
                position = data.zip || data.city;
                console.log(`Using ${position} for position, instead of geolocation.`);
            } catch (e) {
                position = 'Las Vegas';
                console.log(`I'm giving up...We're in ${position} now!`);
            }
        }
        yield put(storeUpdatedPosition(position));
        yield put(createAction(signals.LOCATION_UPDATED));
        yield take(signals.UPDATE_LOCATION);
    }
}

function* initLoadBusinesses() {
    yield put(loadBusinesses());
}

function* initLoadCategories() {
    yield put(createAction(signals.CATEGORIES_LOADING));
}

function* fetchCategories() {
    const categories = yield call(getCategories);
    yield put(createAction(signals.CATEGORIES_LOADED, categories));
    yield call(clearCategoryCache);
}

function* watchLoadCategories() {
    yield takeLatest(signals.CATEGORIES_LOADING, fetchCategories);
}

function* watchLoadReviews() {
    yield takeEvery(signals.GET_REVIEWS, fetchReviews);
}

function* fetchReviews(action) {
    // load the business along with the reviews
    yield put(loadBusiness(action.businessId));
    yield put(createAction(signals.REVIEWS_LOADING));
    yield safeInvoke(function* () {
        const response = yield call(getReviews, action);
        yield put(createAction(signals.REVIEWS_LOADED, {...response.data, id: action.businessId}));
    });
}

function* watchUpdateFilters() {
    let {updateFilters} = yield all({
        updateFilters: take(signals.UPDATE_FILTERS),
        waitForLocation: take(signals.LOCATION_UPDATED),
    });
    while (true) {
        yield safeInvoke(function* () {
            const {type, ...params} = updateFilters;
            const location = selectLocation(yield select());
            const {filters, ...pagination} = params;
            yield updateBusinesses({...pagination, ...filters, ...location});
        });
        updateFilters = yield take(signals.UPDATE_FILTERS);
    }
}

function* paginationSaga() {
    while (true) {
        const {limit, offset} = yield take(signals.UPDATE_PAGE);
        yield safeInvoke(function* () {
            const state = yield select();
            const filters = selectFilters(state);
            const location = selectLocation(state);
            yield updateBusinesses({limit, offset, ...filters, ...location});
        });
    }
}

function* updateBusinesses(params) {
    yield put(createAction(signals.BUSINESSES_LOADING));
    const response = yield call(getBusinesses, params);
    yield put(createAction(signals.BUSINESSES_LOADED, response.data.search));
    yield call(clearBusinessCache);
}

function* watchLoadBusiness() {
    yield takeLatest(signals.LOAD_BUSINESS, fetchBusiness);
}

function* fetchBusiness(action) {
    yield put(createAction(signals.BUSINESS_LOADING));
    yield safeInvoke(function* () {
        const {data} = yield call(getBusiness, action);
        if (!data.business) {
            yield put(createAction(signals.BUSINESS_NOT_FOUND));
        }
        yield put(createAction(signals.BUSINESS_LOADED, data));
    });
}

export default function* root() {
    yield all([
        fork(watchUpdateFilters),
        fork(initLoadBusinesses),
        fork(watchLoadReviews),
        fork(watchLoadCategories),
        fork(watchLoadBusiness),
        fork(locationSaga),
        fork(paginationSaga),
    ]);
}
