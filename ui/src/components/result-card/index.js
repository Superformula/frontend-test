import React, {useCallback} from "react";
import "./result-card.scss";
import clsx from "clsx";
import Button from "../common/button";
import { ItemTitle, ItemPropertyText } from "../common/text";
import Rating from "../rating";
import OpenIndicator from "../open-indicator";
import {Link} from 'react-router-dom'

export default ({
  id,
  img,
  name,
  rating,
  category,
  price,
  isOpen,
  onDetailsClick
}) => {

  const handleDetailsClick = () => {
    onDetailsClick(id);
  }

  return (
    <article className="search-result-card">
      <img className="item-thumbnail" src={img} alt={"Thumbnail"} />
      <ItemTitle>{name}</ItemTitle>
      <Rating value={rating} />
      <div className="details">
        <ItemPropertyText>
          {category} • {price}
        </ItemPropertyText>
        <OpenIndicator isOpen={isOpen} />
      </div>
      <Link className="button secondary item-details-button" to={`/details/${id}`}>Learn more</Link>
    </article>
  );
};
