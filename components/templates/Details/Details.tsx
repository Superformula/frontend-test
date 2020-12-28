import classNames from 'classnames';
import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

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
  avatarUrl?: ReviewProps['avatarUrl'];
  user?: ReviewProps['user'];
  date?: ReviewProps['date'];
  text?: ReviewProps['text'];
  rating?: ReviewProps['rating'];
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
  reviews?: ReviewData[];
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
      {loading && <Skeleton height={64} width={500} />}
      {!loading && <Typography variant="title">{title}</Typography>}

      <div className={ratingClass}>
        {loading && <Skeleton height={33} width={150} />}
        {!loading && <Rating value={rating} large />}
      </div>

      <div className={statusClass}>
        {
          loading && (
            <div>
              <Skeleton height={32} width={250} />
              <Skeleton height={32} width={150} />
            </div>
          )
        }

        {
          !loading && (
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
          )
        }
      </div>

      <div className={imagesClass}>
        <div className={mapClass}>
          {loading && <Skeleton height={228} />}
          {!loading && <Cover src={mapPlaceholder} alt="map" />}
        </div>

        <div className={coverClass}>
          {loading && <Skeleton height={228} />}
          {!loading && <Cover src={imageUrl1} alt={`${title} 1`} />}
        </div>

        <div className={coverClass}>
          {loading && <Skeleton height={228} />}
          {!loading && <Cover src={imageUrl2} alt={`${title} 2`} />}
        </div>
      </div>

      <div className={addressClass}>
        {loading && <Skeleton height={28} width={600} />}
        {!loading && <Typography variant="headline">{address}</Typography>}
      </div>

      <div className={counterClass}>
        {loading && <Skeleton height={32} width={200} />}
        {!loading && <Typography variant="status2">{`${totalReviews} Reviews`}</Typography>}
      </div>

      <div className={reviewsClass}>
        {reviews.map((review, index) => (
          <Review
            {...review}
            key={index}
            loading={loading}
            showSeparator={index !== reviews.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
