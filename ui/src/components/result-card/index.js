import React from "react";
import './result-card.scss';
import clsx from 'clsx'
import Button from '../common/button'
import {ItemTitle, ItemPropertyText} from '../common/text'
import openImage from './dot.svg'
import closeImage from './dot-closed.svg'

export default ({img, name, rating, category, price, isOpen, onDetailsClick}) => {
  return <article className="search-result-card">
    <img class="item-thumbnail" src={img} alt={"Thumbnail"} />
    <ItemTitle>{name}</ItemTitle>
    <span class="rating-container">Rating aqui</span>
    <div className="details">
      <ItemPropertyText>{category} • {price}</ItemPropertyText>
      {isOpen && <ItemPropertyText><img className="open-indicator" src={openImage} />&nbsp;Open Now</ItemPropertyText>}
      {!isOpen && <ItemPropertyText><img className="closed-indicator" src={closeImage} />&nbsp;Closed</ItemPropertyText>}
    </div>
    <Button className="secondary item-details-button">Learn More</Button>
  </article>
}