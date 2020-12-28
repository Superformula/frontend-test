import classNames from 'classnames';
import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import {
  Button,
  Cover,
  Typography,
} from '~/components/atoms';

import {
  CategoryStatus,
  CategoryStatusProps,
  OpenStatus,
  OpenStatusProps,
  Rating,
  RatingProps,
} from '~/components/molecules';

import styles from './RestaurantItem.module.scss';

export interface RestaurantItemProps {
  id: string;
  category: string;
  imageUrl: string;
  loading?: boolean;
  price: CategoryStatusProps['price'];
  rating: RatingProps['value'];
  status: OpenStatusProps['status'];
  title: string;
  onClick: (id: string) => void;
}

export const RestaurantItem: FC<RestaurantItemProps> = ({
  id, category, imageUrl, price, rating, status, title, onClick, loading,
}) => {
  const elementClass = classNames({
    [styles.item]: true,
  });

  const coverClass = classNames({
    [styles['item-cover']]: true,
  });

  const containerClass = classNames({
    [styles['item-container']]: true,
  });

  const headlineClass = classNames({
    [styles['item-container-headline']]: true,
  });

  const ratingClass = classNames({
    [styles['item-container-rating']]: true,
  });

  const statusClass = classNames({
    [styles['item-container-status']]: true,
  });

  const buttonClass = classNames({
    [styles['item-button']]: true,
  });

  return (
    <div className={elementClass} onClick={() => onClick(id)}>
      <div className={coverClass}>
        {loading && <Skeleton height={228} />}
        {!loading && <Cover src={imageUrl} alt={title} />}
      </div>

      <div className={containerClass}>
        <div className={headlineClass}>
          {loading && <Skeleton height={25} />}
          {!loading && <Typography variant="headline">{title}</Typography>}
        </div>

        <div className={ratingClass}>
          {loading && <Skeleton height={21.3} />}
          {!loading && <Rating value={rating} />}
        </div>

        <div className={statusClass}>
          {loading && <Skeleton height={16} />}

          {
            !loading && (
              <div>
                <CategoryStatus category={category} price={price} />
                <OpenStatus status={status} />
              </div>
            )
          }
        </div>
      </div>

      <div className={buttonClass}>
        {loading && <Skeleton height={48} />}

        {!loading && <Button size="full-width" color="primary" onClick={() => onClick(id)}>Learn More</Button>}
      </div>
    </div>
  );
};
