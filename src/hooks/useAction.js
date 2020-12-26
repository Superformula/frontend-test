import { useContext } from 'react';
import { StoreContext } from '../store';

export const useAction = action => {
  if (typeof action !== 'function') {
    console.error(`[action] must be a function`);
    return;
  }

  const [state, dispatch] = useContext(StoreContext);
  const setState = (path, payload) =>
    dispatch({ type: 'SET_STATE', path, payload });

  return (...args) => action(...args)?.({ state, setState });
};
