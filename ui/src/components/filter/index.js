import React from "react";

import Button from "../common/button";
import Label from "../common/label";
import Checkbox from "../common/checkbox";
import { Menu, Item, Separator, Submenu, MenuProvider } from "react-contexify";
import Dropdown from "../common/dropdown";
import "react-contexify/dist/ReactContexify.css";
import "./styles.scss";
import clsx from "clsx";

const FilterContainer = (props) => {
  return <div className="filter-panel" {...props} />;
};

export default ({
  priceOptions,
  categoryOptions,
  openNowSelected,
  priceFilterValue = "",
  categoryFilterValue = "",
  onPriceSelected,
  onCategorySelected,
  onClearFilter,
  onOpenNowChange,
}) => {
  const clearButtonDisabled = !(
    openNowSelected ||
    priceFilterValue ||
    categoryFilterValue
  );
  const handlePriceChange = (id, value) => {
    onPriceSelected(value);
  };
  const handleCategorySelected = (id, value) => {
    onCategorySelected(value);
  };

  const handleOpenNowChange = (ev) => {
    onOpenNowChange(ev.target.checked);
  };
  return (
    <FilterContainer>
      <Label className="filter-title"> Filter By: </Label>
      <Checkbox
        label="Open Now"
        onChange={handleOpenNowChange}
        checked={openNowSelected}
      />

      <Dropdown
        id="price-filter"
        label="Price"
        options={priceOptions}
        value={priceFilterValue}
        onChange={handlePriceChange}
      />
      <Dropdown
        id="category-filter"
        label="Category"
        options={categoryOptions}
        value={categoryFilterValue}
        onChange={handleCategorySelected}
      />
      <Button
        onClick={onClearFilter}
        className={clsx(
          "primary clear-button",
          clearButtonDisabled && "disabled"
        )}
      >
        Clear All
      </Button>
    </FilterContainer>
  );
};
