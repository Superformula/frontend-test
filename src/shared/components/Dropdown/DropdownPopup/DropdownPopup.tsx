import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import { usePortal } from 'shared/hooks';
import { DropdownPopupProps } from './DropdownPopup.types';

export const DropdownPopup: FC<DropdownPopupProps> = ({ children, style }) => {
  const target = usePortal('dropdown-portal');

  return createPortal(<div style={style}>{children}</div>, target);
};
