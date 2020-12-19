import classNames from 'classnames';
import React, { FC } from 'react';

import { Status, StatusProps, Typography } from '~/components/atoms';
import styles from './OpenStatus.module.scss';

export interface OpenStatusProps {
  status?: StatusProps['variant'];
}

export const OpenStatus: FC<OpenStatusProps> = ({ status = 'open' }) => {
  const elementClass = classNames({
    [styles['open-status']]: true,
  });

  return (
    <div className={elementClass}>
      <Status variant={status} />
      <Typography variant="status">{status}</Typography>
    </div>
  );
};
