import React, { FC } from 'react';

import { CheckboxIconProps } from './CheckboxIcon.types';

export const CheckboxIcon: FC<CheckboxIconProps> = ({ checked, className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7" fill="white" stroke="#C8C8C8" />
    {checked && <circle cx="8" cy="8" r="4" fill="#002B56" />}
  </svg>
);
