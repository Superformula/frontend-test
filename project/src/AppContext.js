import React, { Component, createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  const [state, setState] = useState({
    location: "las vegas",
    price: "",
    openNow: false,
    category: ""
  });

  const setPrice = (price) => {
    setState({...state, price})
  }

  const setOpenNow = (openNow) => {
    setState({...state, openNow})
  }
  
  const setCategory = (category) => {
    setState({...state, category})
  }

  return (
    <AppContext.Provider 
      value={{
        ...state,
        setPrice,
        setOpenNow,
        setCategory
      }}
    >
      {children}
    </AppContext.Provider>
  );
}