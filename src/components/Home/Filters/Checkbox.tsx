import * as React from "react";
import Icon from "../../shared/Icon/Icon";

import styles from "./Filters.css";

interface CheckboxProps {
  isChecked: boolean;
  handleCheck: () => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, handleCheck, label }) => {
  return (
    <div onClick={handleCheck} className={styles.filter}>
      {isChecked ? <Icon name="checkboxFill" /> : <Icon name="checkboxEmpty" />}
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
