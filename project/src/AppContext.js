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
      category: ""
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

    const clearAll = () => {
      setState({
        ...state,
        price: "",
        openNow: "false",
        category: ""
      });
    };

    return (
      <AppContext.Provider
        value={{
          ...state,
          setPrice,
          setOpenNow,
          setCategory,
          clearAll
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
);
