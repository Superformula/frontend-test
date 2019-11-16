import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

import { usePortal } from 'shared/hooks';
import { DropdownPopupProps } from './DropdownPopup.types';
import { AnimateOnAppear } from 'shared/components/AnimateOnAppear/AnimateOnAppear';

export const DropdownPopup = forwardRef<HTMLDivElement, DropdownPopupProps>(({ isOpened, children, style }, ref) => {
  const target = usePortal('dropdown-portal');

  return createPortal(
    <AnimateOnAppear ref={ref} style={style} isVisible={isOpened}>
      {children}
    </AnimateOnAppear>,
    target,
  );
});
