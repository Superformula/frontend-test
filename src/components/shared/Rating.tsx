import * as React from "react";
import Icon from "./Icon/Icon";

interface Props {
  rating: number;
  variant?: "card" | "header";
}

const Rating: React.FC<Props> = ({ rating, variant = "card" }) => {
  const value = rating * 2;
  const stars = [];

  const isHeader = variant === "header";
  for (let i = 2; i <= 10; i += 2) {
    if (value >= i) {
      stars.push(
        <React.Fragment key={i}>
          <Icon name="starFill" size={isHeader && "xl"} />
        </React.Fragment>
      );
    } else if (value === i - 1) {
      stars.push(
        <React.Fragment key={i}>
          <Icon name="starHalf" size={isHeader && "xl"} />
        </React.Fragment>
      );
    } else {
      stars.push(
        <React.Fragment key={i}>
          <Icon name="starEmpty" size={isHeader && "xl"} />
        </React.Fragment>
      );
    }
  }

  return <>{stars}</>;
};

export default Rating;
