global.fetch = require('jest-fetch-mock');

const {expectSaga} = require('redux-saga-test-plan');
expectSaga.DEFAULT_TIMEOUT = 10; // some weird bug in expect saga test plan, setting this low makes things run much faster
