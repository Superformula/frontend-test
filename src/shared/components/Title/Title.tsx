import React from 'react';
import classNames from 'classnames';

import './Title.scss';
import { TitleProps } from './Title.types';

/**
 * Display page title
 */
export const Title: React.FC<TitleProps> = ({ children, className, style }) => (
  <h1 className={classNames('title', className)} style={style}>
    {children}
  </h1>
);
