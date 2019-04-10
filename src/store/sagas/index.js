import {all, call, fork, put, select, take, takeLatest} from 'redux-saga/effects';
import {
    getBusiness,
    getBusinesses,
    getCategories,
    getReviews,
    getThirdPartyLocationData,
    updatePosition,
} from 'Services';
import {createAction, loadBusiness, loadBusinesses, storeUpdatedPosition} from 'Store/actions';
import {clearBusinessCache, clearCategoryCache, selectFilters, selectLocation} from 'Store/selectors';
import signals from 'Store/signals';
import {safeInvoke} from 'Utils';


export default function* rootSaga() {
    yield all([
        fork(watchUpdateFilters),
        fork(watchLoadReviews),
        fork(watchLoadCategories),
        fork(watchLoadBusiness),
        fork(watchLocationUpdate),
        fork(watchPagination),
    ]);
}

///////////////////////////
//  Watchers
///////////////////////////

export function* watchLoadCategories() {
    yield take(signals.LOCATION_UPDATED);
    yield takeLatest(signals.CATEGORIES_LOADING, fetchCategories);
}

export function* watchLoadReviews() {
    const {reviews} = yield  all({
        location: take(signals.LOCATION_UPDATED),
        reviews: take(signals.GET_REVIEWS),
    });
    yield takeLatest(signals.GET_REVIEWS, fetchReviews);
    yield put(createAction(signals.GET_REVIEWS, reviews));
}

export function* watchLoadBusiness() {
    yield take(signals.LOCATION_UPDATED);
    yield takeLatest(signals.LOAD_BUSINESS, fetchBusiness);
}

export function* watchLocationUpdate() {
    yield takeLatest(signals.UPDATE_LOCATION, locationSaga);
    // fire it off once on application load
    yield put(createAction(signals.UPDATE_LOCATION));
}

export function* watchPagination() {
    yield takeLatest(signals.UPDATE_PAGE, paginationSaga);
}

export function* watchUpdateFilters() {
    yield take(signals.LOCATION_UPDATED);
    yield takeLatest(signals.UPDATE_FILTERS, handleUpdateFilters);
    yield put(loadBusinesses());
}

///////////////////////////
//  Fetchers / Handlers
///////////////////////////

export function* fetchBusiness(action) {
    yield put(createAction(signals.BUSINESS_LOADING));
    yield safeInvoke(function* () {
        const {data} = yield call(getBusiness, action);
        yield put(createAction(signals.BUSINESS_LOADED, data));
    }, function* () {
        yield put(createAction(signals.BUSINESS_NOT_FOUND));
    });
}

export function* fetchBusinesses(params) {
    yield put(createAction(signals.BUSINESSES_LOADING));
    const response = yield call(getBusinesses, params);
    yield put(createAction(signals.BUSINESSES_LOADED, response.data.search));
    yield call(clearBusinessCache);
}

export function* fetchCategories() {
    const categories = yield call(getCategories);
    yield put(createAction(signals.CATEGORIES_LOADED, categories));
    yield call(clearCategoryCache);
}

export function* fetchReviews(action) {
    // load the business along with the reviews
    yield put(loadBusiness(action.businessId));
    yield put(createAction(signals.REVIEWS_LOADING));
    yield safeInvoke(function* () {
        const response = yield call(getReviews, action);
        yield put(createAction(signals.REVIEWS_LOADED, {...response.data, id: action.businessId}));
    });
}

export function* handleUpdateFilters(updateFilters) {
    yield safeInvoke(function* () {
        const {type, ...params} = updateFilters;
        const location = selectLocation(yield select());
        const {filters, ...pagination} = params;
        yield fetchBusinesses({...pagination, ...filters, ...location});
    });
}

///////////////////////////
//  Simple Sagas
///////////////////////////

export function* locationSaga() {
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
            console.log(`Failed both geoposition attempts...we're in ${position} now!`);
        }
    }
    yield put(storeUpdatedPosition(position));
    yield put(createAction(signals.LOCATION_UPDATED));
}

export function* paginationSaga({limit, offset}) {
    yield safeInvoke(function* () {
        const state = yield select();
        const filters = selectFilters(state);
        const location = selectLocation(state);
        yield fetchBusinesses({limit, offset, ...filters, ...location});
    });
}
