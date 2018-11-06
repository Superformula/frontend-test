import React, { createContext, useState, useEffect } from "react";
import { withRouter, matchPath } from "react-router-dom";
import qs from "query-string";

export const AppContext = createContext();

const getInitialState = () => ({
  location: "las vegas",
  price: "",
  openNow: "false",
  category: "",
  offset: 0
});

export const AppContextProvider = withRouter(
  ({ children, history, location }) => {
    
    const queryState = qs.parse(location.search);

    let initialState = {
      ...getInitialState(),
      ...queryState
    };

    const [state, setState] = useState(initialState);

    const match = matchPath(location.pathname, { path: "/restaurants/:alias" });

    // this effect will write the query related state into
    // the router's query so you could maybe send your search
    // to someone else or bookmark it or something
    useEffect(
      () => {
        if (!match) {
          const { offset, ...queryState } = state;
          history.push({ search: `?${qs.stringify(queryState)}` });
        }
      },
      [state]
    );

    const setPrice = price => {
      setState({ ...state, offset: 0, price });
    };

    const setOpenNow = openNow => {
      setState({ ...state, offset: 0, openNow });
    };

    const setCategory = category => {
      setState({ ...state, offset: 0, category });
    };

    // loadMore returns offset to be used by Apollo's fetchMore
    const loadMore = () => {
      const offset = state.offset + 12;
      setState({...state, offset});
      return offset;
    };

    const clearAll = () => {
      setState(getInitialState());
    };

    return (
      <AppContext.Provider
        value={{
          ...state,
          setPrice,
          setOpenNow,
          setCategory,
          clearAll,
          loadMore
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
);
