import classNames from 'classnames';
import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import styles from './Avatar.module.scss';

export interface AvatarProps {
  alt?: string;
  src?: string;
}

export const Avatar: FC<AvatarProps> = ({ alt, src }) => {
  const elementClass = classNames({
    [styles.avatar]: true,
  });

  const imageClass = classNames({
    [styles['avatar-image']]: true,
  });

  return (
    <div className={elementClass}>
      {
        src && (
          <img
            className={imageClass}
            src={src}
            alt={alt}
          />
        )
      }

      <Skeleton height={80} />
    </div>
  );
};
