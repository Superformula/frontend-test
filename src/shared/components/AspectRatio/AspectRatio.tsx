import React, { FC } from 'react';

import { AspectRatioProps } from './AspectRatio.types';
import './AspectRatio.scss';

/**
 * Allow to set height of component depending on its percentage width
 */
export const AspectRatio: FC<AspectRatioProps> = ({ ratio, children }) => (
  <div className="aspect-ratio" style={{ paddingTop: `${ratio * 100}%` }}>
    <div className="aspect-ratio__inner">{children}</div>
  </div>
);
