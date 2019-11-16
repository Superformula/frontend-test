import React, { FC, useState, useRef, useCallback, useEffect } from 'react';

import './Dropdown.scss';

import { DropdownProps } from './Dropdown.types';
import { DropdownPopup } from './DropdownPopup/DropdownPopup';
import { useElementPosition } from './useElementPosition';

export const Dropdown: FC<DropdownProps> = ({ target, children }) => {
  const [isOpened, setOpened] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const { targetPosition, recalculatePosition } = useElementPosition(targetRef);

  const toggleOpened = useCallback(() => setOpened(!isOpened), [isOpened]);

  useEffect(() => {
    recalculatePosition();
  }, [isOpened, recalculatePosition]);

  return (
    <>
      <div
        className="dropdown__target"
        ref={targetRef}
        onClick={toggleOpened}
        onKeyDown={toggleOpened}
        role="button"
        tabIndex={0}
      >
        {target(isOpened)}
      </div>
      <DropdownPopup
        style={{
          position: 'absolute',
          transformOrigin: 'top left',
          top: targetPosition.top,
          left: targetPosition.left,
        }}
      >
        {isOpened && children(toggleOpened)}
      </DropdownPopup>
    </>
  );
};
