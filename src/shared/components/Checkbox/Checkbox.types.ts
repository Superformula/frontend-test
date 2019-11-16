import { CSSProperties } from 'react';

export type CheckboxProps = {
  /** Defines name of checkbox */
  name: string;
  /** Defines onCheck action */
  onChange(value: boolean): void;
  /** Sets checkbox to checked or unchecked */
  checked?: boolean;
  /** Defines and overrides a style of checkbox */
  style?: CSSProperties;
  /** Defines and override a class name */
  className?: string;
};
