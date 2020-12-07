import * as React from "react";

import styles from "./Button.css";

interface Props {
  type: "primary" | "secondary";
  handleClick: () => void;
}

const Button: React.FC<Props> = ({ type, handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      className={`${styles.btn} ${type === "primary" ? styles.primary : styles.secondary}`}
    >
      {children}
    </button>
  );
};

export default Button;
