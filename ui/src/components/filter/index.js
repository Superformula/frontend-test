import React from "react";

import Button from "../common/button";
import Label from "../common/label";
import Checkbox from "../common/checkbox";
import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
import Dropdown from "../common/dropdown";
import "react-contexify/dist/ReactContexify.css";
import "./styles.scss";
import clsx from "clsx";



const OpenNowFilter = () => {
  return <Checkbox label="Open Now" />;
};

const PriceFilter = () => {
  return (
    <Dropdown
      id="dropdown-id"
      label="Price"
      options={options}
      value={""}
      onChange={() => {}}
    />
  );
};

const CategoryFilter = () => {
  return (
    <Dropdown
      id="dropdown-id"
      label="Category"
      options={options}
      value={1}
      onChange={() => {}}
    />
  );
};

const FilterContainer = props => {
  return <div className="filter-panel" {...props} />;
};

export default ({
  priceOptions,
  categoryOptions,
  openNowSelected,
  priceFilterValue,
  categoryFilterValue,
  onClearClicked
}) => {

  const clearButtonDisabled = !(openNowSelected || priceFilterValue || categoryFilterValue);
  return (
    <FilterContainer>
      <Label className="filter-title"> Filter By: </Label>
      <OpenNowFilter />
      <Dropdown
      id="price-filter"
      label="Price"
      options={priceOptions}
      value={priceFilterValue}
      onChange={() => {}}
    />
      <Dropdown
      id="category-filter"
      label="Category"
      options={categoryOptions}
      value={categoryFilterValue}
      onChange={() => {}}
    />
      <Button className={clsx("primary clear-button", clearButtonDisabled && 'disabled')}>Clear All</Button>
    </FilterContainer>
  );
};
