import * as React from "react";

import styles from "./Button.css";

interface Props {
  type: "primary" | "secondary";
  handleClick: () => void;
  size?: "md" | "xl";
}

const Button: React.FC<Props> = ({ type, handleClick, children, size = "md" }) => {
  return (
    <button
      onClick={handleClick}
      className={`${styles.btn} ${type === "primary" ? styles.primary : styles.secondary} ${
        size === "md" ? styles.sizeMd : styles.sizeXl
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
