import React from 'react';

export type DropdownProps = {
  target(isOpened: boolean): React.ReactNode;
  children(close: () => void): React.ReactNode;
};
