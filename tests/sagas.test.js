import {expectSaga} from 'redux-saga-test-plan';
import {getBusiness, getThirdPartyLocationData, updatePosition} from 'Services';
import {createAction, loadBusiness, storeUpdatedPosition} from 'Store/actions';
import {locationSaga, watchLoadBusiness} from 'Store/sagas';
import signals from 'Store/signals';

jest.mock('Services');
jest.mock('console');

describe('watchLoadBusiness', () => {

    beforeAll(() => {
        console.error = jest.fn();
    });

    beforeEach(() => {
        getBusiness.mockClear();
    });

    it('business not found', () => {
        const reason = 'Because...';
        getBusiness.mockImplementation(async () => Promise.reject(reason));
        return expectSaga(watchLoadBusiness)
            .take(signals.LOAD_BUSINESS)
            .put(createAction(signals.BUSINESS_LOADING))
            .put(createAction(signals.BUSINESS_NOT_FOUND))
            .dispatch(createAction(signals.LOCATION_UPDATED))
            .dispatch(loadBusiness('1234'))
            .silentRun().then(() => {
                expect(console.error).toHaveBeenCalledWith(reason);
            });
    });

    it('happy path', () => {
        // even returning an empty object will send something to the reducer...
        getBusiness.mockImplementation(async () => ({}));
        return expectSaga(watchLoadBusiness)
            .take(signals.LOAD_BUSINESS)
            .put(createAction(signals.BUSINESS_LOADING))
            .put(createAction(signals.BUSINESS_LOADED))
            .dispatch(createAction(signals.LOCATION_UPDATED))
            .dispatch(loadBusiness('1234'))
            .silentRun();
    });
});

describe('locationSaga', () => {
    beforeAll(() => {
        console.error = jest.fn();
        console.warn = jest.fn();
        console.log = jest.fn();
    });

    test('make sure it always works', () => {
        updatePosition.mockImplementation(() => Promise.reject({code: 3, message: 'Timeout expired'}));
        getThirdPartyLocationData.mockImplementation(() => Promise.reject({code: 3, message: 'the internet is down!'}));
        return expectSaga(locationSaga)
            .call(updatePosition) // try the browser
            .call(getThirdPartyLocationData) // try the third party
            // if we made it here, we're golden.  we broke both of our services via mocks, and still got a result
            .put(createAction(signals.LOCATION_UPDATED))
            .put(storeUpdatedPosition('Las Vegas')) // make sure we end up with Las Vegas
            .silentRun().then(() => {
                expect(console.warn).toHaveBeenCalledWith('navigator.geolocation failed to give current position.');
                expect(console.log).toHaveBeenCalledWith('Failed both geoposition attempts...we\'re in Las Vegas now!');
            });
    });
});
