import React, { FC } from 'react';

import { HeaderProps } from './Header.types';
import { Title } from 'shared/components';
import { Grid } from 'shared/components/Grid/Grid';
import { StarRating } from 'shared/components/StarRating/StarRating';
import { CuisinePriceInfo } from 'shared/components/CuisinePriceInfo/CuisinePriceInfo';
import { RestaurantStatus } from 'shared/components/RestaurantStatus/RestaurantStatus';
import './Header.scss';

export const Header: FC<HeaderProps> = ({ title, rating, cuisineName, priceRange, isOpen }) => (
  <Grid.Row>
    <header className="restaurant-details-header">
      <Title className="restaurant-details-header__title">{title}</Title>
      <StarRating rating={rating} size={StarRating.size.BIG} />
      <div className="restaurant-details-header__details">
        <CuisinePriceInfo cuisineName={cuisineName} priceRange={priceRange} size={CuisinePriceInfo.size.BIG} />
        <RestaurantStatus isOpen={isOpen} size={RestaurantStatus.size.BIG} />
      </div>
    </header>
  </Grid.Row>
);
