import * as React from "react";
import Icon from "../Icon/Icon";

import styles from "./RestaurantInfo.css";

interface Props {
  isOpen: boolean;
  variant?: "card" | "header";
}

const OpenNow: React.FC<Props> = ({ isOpen, variant = "card" }) => {
  const isCard = variant === "card";

  if (isOpen) {
    return (
      <div className={styles.openNow}>
        <Icon name="circleFill" color="green" size={isCard ? "md" : "xl"} />
        <div>Open Now</div>
      </div>
    );
  } else {
    return (
      <div className={styles.openNow}>
        <Icon name="circleFill" color="red" size={isCard ? "md" : "xl"} />
        <div>Closed</div>
      </div>
    );
  }
};

export default OpenNow;
