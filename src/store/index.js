import React, { createContext, useReducer } from 'react';
import { initialStore } from './initialStore';
import { reducer } from './reducer';

/**
 * This is a basic store context implamantation so it can be used to do state control
 * in the website without needing major dependencies such as Redux, Flux, etc.
 */
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStore);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
