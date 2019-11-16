import React, { FC } from 'react';
import classNames from 'classnames';

import './Loader.scss';
import { LoaderProps } from './Loader.types';

export const Loader: FC<LoaderProps> = ({ isFullscreen }) => (
  <div className={classNames('loader', { 'loader--fullscreen': isFullscreen })}>
    <span className="loader__bounce" />
    <span className="loader__bounce" />
    <span className="loader__bounce" />
  </div>
);
