import { Restaurant } from '../../models/models';

/** 
 * Reducers for redux store 
 * Updates redux store state based on action that was dispatched in components
 * */

export const restaurantsReducer = (state: Restaurant[] = [], action: any) => {
  switch(action.type) {
    case "UPDATEREST":
      return action.payload;
    default:
      return state;
  }
};

export const openFilterReducer = (state = false, action: any) => {
  switch (action.type) {
    case "OPENFILTER":
      return !state;
    default:
      return state;
  }
}

export const priceFilterReducer = (state = false, action: any) => {
  switch (action.type) {
    case "PRICEFILTER":
      return !state;
    default:
      return state;
  }
}
export const catFilterReducer = (state = false, action: any) => {
  switch (action.type) {
    case "CATFILTER":
      return !state;
    default:
      return state;
  }
}
