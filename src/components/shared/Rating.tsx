import * as React from "react";
import Icon from "./Icon/Icon";

interface Props {
  rating: number;
}

const Rating: React.FC<Props> = ({ rating }) => {
  const value = rating * 2;
  const stars = [];
  for (let i = 2; i <= 10; i += 2) {
    if (value >= i) {
      stars.push(<Icon name="starFill" />);
    } else if (value === i - 1) {
      stars.push(<Icon name="starHalf" />);
    } else {
      stars.push(<Icon name="starEmpty" />);
    }
  }

  return <>{stars}</>;
};

export default Rating;
