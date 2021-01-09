import React from "react";
import './result-card.scss';
import clsx from 'clsx'
import Button from '../common/button'
import {ItemTitle, ItemPropertyText} from '../common/text'
import Rating from '../rating';
import OpenIndicator from '../open-indicator';


export default ({img, name, rating, category, price, isOpen, onDetailsClick}) => {
  return <article className="search-result-card">
    <img className="item-thumbnail" src={img} alt={"Thumbnail"} />
    <ItemTitle>{name}</ItemTitle>
    <Rating value={rating}/>
    <div className="details">
      <ItemPropertyText>{category} • {price}</ItemPropertyText>
      <OpenIndicator isOpen={isOpen} />
    </div>
    <Button className="secondary item-details-button">Learn More</Button>
  </article>
}