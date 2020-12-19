import classNames from 'classnames';
import React, {
  FC,
  useEffect,
  useState,
} from 'react';

import styles from './Star.module.scss';
import emptyStar from './assets/star-empty.svg';
import fullStar from './assets/star-full.svg';
import halfStar from './assets/star-half.svg';

export interface StarProps {
  variant?: 'empty' | 'full' | 'half';
}

export const Star: FC<StarProps> = ({ variant = 'empty' }) => {
  const [src, setSrc] = useState<string>('');
  const [alt, setAlt] = useState<string>('');

  const elementClass = classNames({
    [styles.star]: true,
  });

  useEffect(() => {
    switch (variant) {
      case 'empty':
        setSrc(emptyStar);
        setAlt('empty star');
        break;

      case 'full':
        setSrc(fullStar);
        setAlt('full star');
        break;

      case 'half':
        setSrc(halfStar);
        setAlt('half star');
        break;

      default:
        setSrc(emptyStar);
        setAlt('empty star');
    }
  }, [variant]);

  return <img className={elementClass} src={src} alt={alt} />;
};
