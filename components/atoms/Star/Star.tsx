import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Star.module.scss';

import emptyStar from './assets/star-empty.svg';
import fullStar from './assets/star-full.svg';
import halfStar from './assets/star-half.svg';

export interface StarProps {
  variant: 'empty' | 'full' | 'half';
}

const EmptyStar: FC<HTMLAttributes<HTMLElement>> = (props) => <img {...props} src={emptyStar} alt="empty star" />;
const FullStar: FC<HTMLAttributes<HTMLElement>> = (props) => <img {...props} src={fullStar} alt="full star" />;
const HalfStar: FC<HTMLAttributes<HTMLElement>> = (props) => <img {...props} src={halfStar} alt="half star" />;

export const Star: FC<StarProps> = ({ variant = 'empty' }) => {
  const elementClass = classNames({
    [styles.star]: true,
  });

  switch (variant) {
    case 'empty': return <EmptyStar className={elementClass} />;
    case 'full': return <FullStar className={elementClass} />;
    case 'half': return <HalfStar className={elementClass} />;
    default: return <EmptyStar className={elementClass} />;
  }
};
