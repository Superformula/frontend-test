import classNames from 'classnames';
import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import styles from './Cover.module.scss';

export interface CoverProps {
  alt?: string;
  src?: string;
}

export const Cover: FC<CoverProps> = ({ alt, src }) => {
  const elementClass = classNames({
    [styles.cover]: true,
  });

  const imageClass = classNames({
    [styles['cover-image']]: true,
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

      <Skeleton height={228} />
    </div>
  );
};
