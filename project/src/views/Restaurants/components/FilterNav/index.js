import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "AppContext";
import FlatButton from "components/FlatButton";
import CheckBox from "components/FormControls/CheckBox";
import Select from "components/FormControls/Select";

const Wrapper = styled.div`
  padding: 15px 70px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 20px;
  }
`;

const FilterNav = () => {
  const appContext = useContext(AppContext);
  const {
    setPrice,
    setOpenNow,
    setCategory,
    clearAll,
    openNow,
    price,
    category
  } = appContext;

  return (
    <Wrapper>
      <Controls>
        <span>Filter By:</span>
        <CheckBox label="Open Now" onChange={setOpenNow} checked={openNow} />
        <Select
          onChange={setPrice}
          placeholder="Price"
          options={["All", "$", "$$", "$$$", "$$$$"]}
          value={price}
        />
        <Select
          onChange={setCategory}
          placeholder="Categories"
          options={[
            "Italian",
            "Seafood",
            "Steakhouses",
            "Japanese",
            "American",
            "Mexican",
            "Thai"
          ]}
          value={category}
        />
      </Controls>
      <FlatButton onClick={clearAll}>Clear All</FlatButton>
    </Wrapper>
  );
};

export default FilterNav;
