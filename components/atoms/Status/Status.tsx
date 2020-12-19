import classNames from 'classnames';
import React, {
  FC,
  useEffect,
  useState,
} from 'react';

import styles from './Status.module.scss';
import openStatus from './assets/status-open.svg';
import closedStatus from './assets/status-closed.svg';

export interface StatusProps {
  variant?: 'open' | 'close';
}

export const Status: FC<StatusProps> = ({ variant = 'open' }) => {
  const [src, setSrc] = useState<string>('');
  const [alt, setAlt] = useState<string>('');

  const elementClass = classNames({
    [styles.status]: true,
  });

  useEffect(() => {
    switch (variant) {
      case 'open':
        setSrc(openStatus);
        setAlt('open status');
        break;

      case 'close':
        setSrc(closedStatus);
        setAlt('closed status');
        break;

      default:
        setSrc(openStatus);
        setAlt('open status');
    }
  }, [variant]);

  return <img className={elementClass} src={src} alt={alt} />;
};
