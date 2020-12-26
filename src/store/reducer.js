import { set } from '../utils/object';

/**
 * Simple reducer to set state based on paths
 * @param {*} state
 * @param {*} action
 */
export const reducer = (state, action) => {
  const { type, path, payload } = action;

  switch (type) {
    case 'SET_STATE':
      if (process.env.NODE_ENV === 'development') {
        console.info(`SET_STATE: [${path}]`, { payload });
      }
      return set({ ...state }, path, payload);
    default:
      throw new Error();
  }
};
