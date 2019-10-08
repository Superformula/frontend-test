import { useState, useEffect } from 'react';

let listeners = [];
let state = { 
  price: "",
  categories: "All",
  is_open_now: false,
};

const setState = (newState) => {
  state = { ...state, ...newState };
  listeners.forEach((listener) => {
    listener(state);
  });
};

const useGlobalHook = () => {
  const newListener = useState()[1];
  useEffect(() => {
    listeners.push(newListener);
  }, []);
  return [state, setState];
};

export default useGlobalHook;