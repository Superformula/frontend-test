import * as React from "react";
import Button from "components/shared/Button/Button";
import { RestaurantContext } from "../Home";
import Select from "./Select";
import Checkbox from "./Checkbox";

import styles from "./Filters.css";

const Filters: React.FC = () => {
  const {
    filterValues,
    toggleOpen,
    updatePrice,
    updateCategory,
    priceOptions,
    clearAll,
  } = React.useContext(RestaurantContext);
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
          options={priceOptions}
          width="140px"
        />
      </div>
      <Button type="secondary" handleClick={clearAll}>
        Clear All
      </Button>
    </nav>
  );
};

export default Filters;
