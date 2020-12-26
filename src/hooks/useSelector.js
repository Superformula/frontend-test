import { useContext } from 'react';
import { get } from 'utils/object';
import { StoreContext } from '../store';

export const useSelector = path => {
  const [state] = useContext(StoreContext);
  return get(state, path);
};
