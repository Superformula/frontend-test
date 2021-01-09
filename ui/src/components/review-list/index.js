import React from "react";
import clsx from "clsx";
import { Title, HeaderText } from "../common/text";
import Rating from "../rating";
import OpenIndicator from "../open-indicator";
import './header-detail.scss';

export default ({ name, category, rating, price, isOpen }) => {
  return (
    <section className="header-detail">
      <Title>{name}</Title>
      <Rating value={rating} />
      <div className="sub-details-row">
        <HeaderText>
          {category} • {price}
        </HeaderText>
        <OpenIndicator isOpen={isOpen} />
      </div>
    </section>
  );
};
