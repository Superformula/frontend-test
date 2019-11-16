import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { RestaurantCardProps } from './RestaurantCard.types';
import { StarRating } from 'shared/components/StarRating/StarRating';
import { CuisinePriceInfo } from 'shared/components/CuisinePriceInfo/CuisinePriceInfo';
import { RestaurantStatus } from 'shared/components/RestaurantStatus/RestaurantStatus';
import { Button } from 'shared/components/Button/Button';
import { AspectRatio } from 'shared/components/AspectRatio/AspectRatio';
import './RestaurantCard.scss';

export const RestaurantCard: FC<RestaurantCardProps> = ({
  id,
  name,
  photo,
  photoAlt,
  rating,
  price,
  cuisineName,
  isOpen,
}) => (
  <article className="restaurant-card">
    <AspectRatio ratio={0.6}>
      <img className="restaurant-card__image" src={photo} alt={photoAlt || 'restaurant dishes'} />
    </AspectRatio>
    <h3 className="restaurant-card__name">{name}</h3>
    <StarRating rating={rating} />
    <div className="restaurant-card__about">
      <CuisinePriceInfo cuisineName={cuisineName} priceRange={price} />
      <RestaurantStatus isOpen={isOpen} />
    </div>
    <Link to={`restaurants/${id}`}>
      <Button className="restaurant-card__button">LEARN MORE</Button>
    </Link>
  </article>
);
