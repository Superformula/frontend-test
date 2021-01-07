import React from "react";
import "./styles.scss";
import Button from "../common/button";
import Label from "../common/label";
import Checkbox from '../common/checkbox';
import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import Dropdown from "../common/dropdown";


const MENU_ID = "blahblah";

const options =   [{id:1, name:"option 1"}, {id:2, name:"option 2"}]

const OpenNowFilter = () => {
  return <Checkbox label="Open Now"/>;
};

const PriceFilter = () => {
  return  <Dropdown
  id="dropdown-id"
  label="Price"
  options={options}
  value={""}
  onChange={() => {}}
/>
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

export default () => {
  return (
    <FilterContainer>
      <Label className="filter-title"> Filter By: </Label>
      <OpenNowFilter />
      <PriceFilter />
      <CategoryFilter />
      <Button className="primary clear-button">Clear All</Button>
    </FilterContainer>
  );
};
