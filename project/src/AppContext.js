import React, { createContext, useState, useEffect } from "react";
import { withRouter, matchPath } from "react-router-dom";
import qs from "query-string";

export const AppContext = createContext();

export const AppContextProvider = withRouter(
  ({ children, history, location }) => {
    
    let initialState = {
      location: "las vegas",
      price: "",
      openNow: "false",
      category: "",
      limit: 12
    };

    const queryState = qs.parse(location.search);

    if (Object.keys(queryState).length) {
      initialState = queryState;
    }

    const [state, setState] = useState(initialState);

    const match = matchPath(location.pathname, { path: "/restaurants/:alias" });

    useEffect(
      () => {
        if (!match) {
          history.push({ search: `?${qs.stringify(state)}` });
        }
      },
      [state]
    );

    const setPrice = price => {
      setState({ ...state, price });
    };

    const setOpenNow = openNow => {
      setState({ ...state, openNow });
    };

    const setCategory = category => {
      setState({ ...state, category });
    };

    const loadMore = () => {
      const nextLimit = Number(state.limit) + 12;

      setState({
        ...state,
        limit: (nextLimit <= 48 ? nextLimit : 48) // yelp api limits results to 50
      })
    }

    const clearAll = () => {
      setState({
        ...state,
        price: "",
        openNow: "false",
        category: "",
        limit: 12
      });
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
