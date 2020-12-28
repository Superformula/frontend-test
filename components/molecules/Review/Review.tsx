import classNames from 'classnames';
import React, { FC } from 'react';

import { Avatar, Typography } from '~/components/atoms';
import { Rating } from '~/components/molecules';
import { RatingProps } from '../Rating';

import styles from './Review.module.scss';

export interface ReviewProps {
  avatarUrl: string;
  user: string;
  date: string;
  text: string;
  rating: RatingProps['value'];
  showSeparator?: boolean;
}

export const Review: FC<ReviewProps> = ({
  avatarUrl,
  date,
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
        <Avatar src={avatarUrl} />

        <div className={headerClass}>
          <Typography variant="body2">{user}</Typography>
          <Typography variant="label">{date}</Typography>
        </div>
      </div>

      <div className={textClass}>
        <Rating value={rating} />
        <Typography variant="headline2">{text}</Typography>
      </div>
    </div>
  );
};
