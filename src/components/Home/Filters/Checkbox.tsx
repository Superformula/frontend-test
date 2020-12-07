import * as React from "react";

import styles from "./Filters.css";

interface CheckboxProps {
  isChecked: boolean;
  handleCheck: () => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, handleCheck, label }) => {
  return (
    <div onClick={handleCheck} className={styles.filter}>
      {isChecked ? <FullIcon /> : <EmptyIcon />}
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;

// Icons

const EmptyIcon: React.FC = () => {
  return (
    <svg
      className={styles.checkboxIcon}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 426.667 426.667"
      version="1.1"
      viewBox="0 0 426.67 426.67"
      xmlSpace="preserve"
    >
      <path d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333S331.2,0,213.333,0    z M213.333,384c-94.293,0-170.667-76.373-170.667-170.667S119.04,42.667,213.333,42.667S384,119.04,384,213.333    S307.627,384,213.333,384z" />
    </svg>
  );
};

const FullIcon: React.FC = () => {
  return (
    <svg
      className={styles.checkboxIcon}
      enableBackground="new 0 0 426.667 426.667"
      version="1.1"
      viewBox="0 0 426.667 426.667"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m213.33 106.67c-58.88 0-106.67 47.787-106.67 106.67s47.787 106.67 106.67 106.67 106.67-47.787 106.67-106.67-47.787-106.67-106.67-106.67z" />
      <path d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333     S331.2,0,213.333,0z M213.333,384c-94.293,0-170.667-76.373-170.667-170.667S119.04,42.667,213.333,42.667     S384,119.04,384,213.333S307.627,384,213.333,384z" />
    </svg>
  );
};
