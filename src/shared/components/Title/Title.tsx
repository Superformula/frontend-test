import React from 'react';

import './Title.scss';
import { TitleProps } from './Title.types';

/**
 * Display page title
 */
export const Title: React.FC<TitleProps> = ({ children, style }) => (
  <h1 className="title" style={style}>
    {children}
  </h1>
);
