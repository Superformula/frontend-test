import * as React from "react";
import Button from "../../shared/Button/Button";
import { SearchContext } from "../Home";
import Select from "./Select/Select";
import Checkbox from "./Checkbox/Checkbox";

import styles from "./Filters.css";

const Filters: React.FC = () => {
  const {
    filterValues,
    toggleOpen,
    updatePrice,
    updateCategory,
    priceOptions,
    categoryOptions,
    clearAll,
  } = React.useContext(SearchContext);
  const { isOpen, price, category } = filterValues;

  return (
    <nav className={styles.container}>
      <div className={styles.filters}>
        <label>Filter By:</label>
        <Checkbox isChecked={isOpen} handleCheck={toggleOpen} label="Open Now" />
        <Select label="Price" value={price} onSelect={updatePrice} options={priceOptions} />
        <Select
          label="Category"
          value={category}
          onSelect={updateCategory}
          options={categoryOptions}
          width="300px"
        />
      </div>
      <Button type="secondary" handleClick={clearAll}>
        Clear All
      </Button>
    </nav>
  );
};

export default Filters;
