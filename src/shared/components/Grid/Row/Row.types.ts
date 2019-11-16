import { CSSProperties, ReactNode } from 'react';

export type RowProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  isFullWidth?: boolean;
};
