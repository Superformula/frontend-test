import React, { FC } from 'react';
import classNames from 'classnames';

import { RestaurantStatusProps, Size } from './RestaurantStatus.types';
import './RestaurantStatus.scss';

export const RestaurantStatus: FC<RestaurantStatusProps> & { size: typeof Size } = ({ isOpen, size = Size.SMALL }) => (
  <div
    className={classNames('restaurant-status', {
      'restaurant-status--big': size === Size.BIG,
    })}
  >
    <div
      className={classNames('restaurant-status__dot', {
        'restaurant-status__dot--red': !isOpen,
      })}
    />
    <p className="restaurant-status__label">{isOpen ? 'Open Now' : 'Closed'}</p>
  </div>
);

RestaurantStatus.size = Size;
