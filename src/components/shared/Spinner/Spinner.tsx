import * as React from "react";

import styles from "./Spinner.css";

const Spinner: React.FC = () => {
  return <div className={styles.loader}>Loading...</div>;
};

export default Spinner;
