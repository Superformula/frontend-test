import { CSSProperties } from 'react';

export type CheckboxProps = {
  /** Defines name of checkbox */
  name: string;
  /** Defines onCheck action */
  onChange(value: boolean): void;
  /** Defines and overrides a style of checkbox */
  style?: CSSProperties;
  /** Defines and override a class name */
  className?: string;
};
