import React, { FC } from 'react';

import './ErrorMessage.scss';

export const ErrorMessage: FC = () => (
  <div className="error-message">
    <p className="error-message__label">Oops! An error has occurred</p>
  </div>
);
