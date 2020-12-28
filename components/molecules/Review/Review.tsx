import classNames from 'classnames';
import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { Avatar, Typography } from '~/components/atoms';
import { Rating } from '~/components/molecules';
import { RatingProps } from '../Rating';

import styles from './Review.module.scss';

export interface ReviewProps {
  avatarUrl?: string;
  user?: string;
  date?: string;
  loading?: boolean;
  text?: string;
  rating?: RatingProps['value'];
  showSeparator?: boolean;
}

export const Review: FC<ReviewProps> = ({
  avatarUrl,
  date,
  loading,
  rating,
  showSeparator,
  text,
  user,
}) => {
  const elementClass = classNames({
    [styles.review]: true,
    [styles['review--separator-visible']]: showSeparator,
  });

  const userClass = classNames({
    [styles['review-user']]: true,
  });

  const headerClass = classNames({
    [styles['review-user-header']]: true,
  });

  const textClass = classNames({
    [styles['review-text']]: true,
  });

  return (
    <div className={elementClass}>
      <div className={userClass}>
        {loading && <Skeleton height={80} width={80} />}
        {!loading && <Avatar src={avatarUrl} />}

        <div className={headerClass}>
          {loading && (
            <>
              <Skeleton height={24} width={192} />
              <Skeleton height={24} width={90} />
            </>
          )}

          {!loading && (
            <>
              <Typography variant="body2">{user}</Typography>
              <Typography variant="label">{date}</Typography>
            </>
          )}
        </div>
      </div>

      <div className={textClass}>
        {loading && (
          <>
            <Skeleton height={23.3} width={96.5} />
            <Skeleton height={56} />
          </>
        )}

        {!loading && (
          <>
            <Rating value={rating} />
            <Typography variant="headline2">{text}</Typography>
          </>
        )}
      </div>
    </div>
  );
};
