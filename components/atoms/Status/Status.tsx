import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Status.module.scss';

import openStatus from './assets/status-open.svg';
import closedStatus from './assets/status-closed.svg';

export interface StatusProps {
  variant: 'open' | 'close';
}

const OpenStatus: FC<HTMLAttributes<HTMLElement>> = (props) => <img {...props} src={openStatus} alt="open status" />;
const ClosedStatus: FC<HTMLAttributes<HTMLElement>> = (props) => <img {...props} src={closedStatus} alt="closed status" />;

export const Status: FC<StatusProps> = ({ variant = 'open' }) => {
  const elementClass = classNames({
    [styles.star]: true,
  });

  switch (variant) {
    case 'open': return <OpenStatus className={elementClass} />;
    case 'close': return <ClosedStatus className={elementClass} />;
    default: return <OpenStatus className={elementClass} />;
  }
};
