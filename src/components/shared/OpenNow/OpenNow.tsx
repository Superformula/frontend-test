import * as React from "react";
import Icon from "../Icon/Icon";

import styles from "./OpenNow.css";

interface Props {
  isOpen: boolean;
}
const OpenNow: React.FC<Props> = ({ isOpen }) => {
  if (isOpen) {
    return (
      <div className={styles.openNow}>
        <Icon name="circleFill" color="green" />
        <div>Open Now</div>
      </div>
    );
  } else {
    return (
      <div className={styles.openNow}>
        <Icon name="circleFill" color="red" />
        <div>Closed</div>
      </div>
    );
  }
};

export default OpenNow;
