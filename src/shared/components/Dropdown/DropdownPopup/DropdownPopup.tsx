import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

import { usePortal } from 'shared/hooks';
import { DropdownPopupProps } from './DropdownPopup.types';

export const DropdownPopup = forwardRef<HTMLDivElement, DropdownPopupProps>(({ children, style }, ref) => {
  const target = usePortal('dropdown-portal');

  return createPortal(
    <div ref={ref} style={style}>
      {children}
    </div>,
    target,
  );
});
