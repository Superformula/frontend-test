import classNames from 'classnames';
import React, { FC } from 'react';

import { Cover, Typography } from '~/components/atoms';

import {
  CategoryStatus,
  CategoryStatusProps,
  OpenStatus,
  OpenStatusProps,
  Rating,
  RatingProps,
  Review,
  ReviewProps,
} from '~/components/molecules';

import styles from './Details.module.scss';
import mapPlaceholder from './assets/map.svg';

export type ReviewData = {
  avatarUrl: ReviewProps['avatarUrl'];
  user: ReviewProps['user'];
  date: ReviewProps['date'];
  text: ReviewProps['text'];
  rating: ReviewProps['rating'];
};

export interface DetailsProps {
  address: string;
  category: string;
  imageUrl1: string;
  imageUrl2: string;
  loading?: boolean;
  price: CategoryStatusProps['price'];
  rating: RatingProps['value'];
  status: OpenStatusProps['status'];
  title: string;
  totalReviews: number;
  reviews: ReviewData[];
}

export const Details: FC<DetailsProps> = ({
  address,
  category,
  imageUrl1,
  imageUrl2,
  loading,
  price,
  rating,
  reviews,
  status,
  title,
  totalReviews,
}) => {
  const elementClass = classNames({
    [styles.details]: true,
  });

  const ratingClass = classNames({
    [styles['details-rating']]: true,
  });

  const statusClass = classNames({
    [styles['details-status']]: true,
  });

  const imagesClass = classNames({
    [styles['details-images']]: true,
  });

  const coverClass = classNames({
    [styles['details-images-cover']]: true,
  });

  const mapClass = classNames({
    [styles['details-images-map']]: true,
  });

  const addressClass = classNames({
    [styles['details-address']]: true,
  });

  const counterClass = classNames({
    [styles['details-counter']]: true,
  });

  const reviewsClass = classNames({
    [styles['details-reviews']]: true,
  });

  return (
    <div className={elementClass}>
      <Typography variant="title">{title}</Typography>

      <div className={ratingClass}>
        <Rating value={rating} large />
      </div>

      <div className={statusClass}>
        <div>
          <CategoryStatus
            large
            category={category}
            price={price}
          />

          <OpenStatus
            large
            status={status}
          />
        </div>
      </div>

      <div className={imagesClass}>
        <div className={mapClass}>
          <Cover src={mapPlaceholder} alt="map" />
        </div>

        <div className={coverClass}>
          <Cover src={imageUrl1} alt={`${title} 1`} />
        </div>

        <div className={coverClass}>
          <Cover src={imageUrl2} alt={`${title} 2`} />
        </div>
      </div>

      <div className={addressClass}>
        <Typography variant="headline">{address}</Typography>
      </div>

      <div className={counterClass}>
        <Typography variant="status2">{`${totalReviews} Reviews`}</Typography>
      </div>

      <div className={reviewsClass}>
        {reviews.map((review, index) => (
          <Review
            {...review}
            loading={loading}
            showSeparator={index !== reviews.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
