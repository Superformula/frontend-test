import React, { FC } from 'react';
import classNames from 'classnames';

import { ContainerProps } from './Container.types';
import './Container.scss';

export const Container: FC<ContainerProps> = ({ className, style, children }) => (
  <div className={classNames('container', className)} style={style}>
    {children}
  </div>
);
