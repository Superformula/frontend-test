import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';

import { Status, StatusProps, Typography } from '~/components/atoms';
import styles from './OpenStatus.module.scss';

export interface OpenStatusProps {
  status?: StatusProps['variant'];
  large?: boolean;
}

export const OpenStatus: FC<OpenStatusProps> = ({ status = 'open', large }) => {
  const [text, setText] = useState<string>('');

  const elementClass = classNames({
    [styles['open-status']]: true,
    [styles['open-status--large']]: large,
  });

  const getVariant = () => {
    if (large) return 'status2';
    return 'status';
  };

  useEffect(() => {
    switch (status) {
      case 'open':
        setText('Open Now');
        break;

      case 'closed':
        setText('Closed');
        break;

      default:
        setText('Open Now');
    }
  }, [status]);

  return (
    <div className={elementClass}>
      <Status variant={status} />
      <Typography variant={getVariant()}>{text}</Typography>
    </div>
  );
};
