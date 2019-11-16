import React from 'react';
import classNames from 'classnames';

import { CuisinePriceInfoProps, Size } from './CuisinePriceInfo.types';
import './CuisinePriceInfo.scss';

/**
 * Displays information about cuisine and price range label
 */
export const CuisinePriceInfo: React.FC<CuisinePriceInfoProps> & { size: typeof Size } = ({
  cuisineName,
  priceRange,
  size = Size.SMALL,
}) => (
  <p
    className={classNames('cuisine-price-info', {
      'cuisine-price-info--big': size === Size.BIG,
    })}
  >
    {cuisineName}
    <span className="cuisine-price-info__price">{priceRange}</span>
  </p>
);

CuisinePriceInfo.size = Size;
