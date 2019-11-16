import React, { FC } from 'react';
import classNames from 'classnames';

import { RowProps } from './Row.types';
import './Row.scss';

export const Row: FC<RowProps> = ({ className, isFullWidth, style, children }) => (
  <div
    className={classNames('row', className, {
      'row--full-width': isFullWidth,
    })}
    style={style}
  >
    {children}
  </div>
);
