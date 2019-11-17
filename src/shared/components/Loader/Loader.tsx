import React, { FC } from 'react';
import classNames from 'classnames';

import './Loader.scss';
import { LoaderProps } from './Loader.types';

export const Loader: FC<LoaderProps> = ({ isInline, isFullscreen }) => (
  <div className={classNames('loader', { 'loader--fullscreen': isFullscreen, 'loader--inline': isInline })}>
    <span className="loader__bounce" />
    <span className="loader__bounce" />
    <span className="loader__bounce" />
  </div>
);
