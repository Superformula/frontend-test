import { ReactNode, CSSProperties } from 'react';

export enum Variant {
  BLUE = 'blue',
  WHITE = 'white',
}

export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export type ButtonProps = {
  /** Defines inner content of button */
  children?: ReactNode;
  /** Defines that a button is disabled or not */
  disabled?: boolean;
  /** Defines variant of button: BLUE | WHITE */
  variant?: Variant;
  /** Defines size of button: SMALL | MEDIUM */
  size?: Size;
  /** Should button have full width (100%) */
  fullWidth?: boolean;
  /** Defines and overrides a style of button */
  style?: CSSProperties;
  /** Defines and override a class name */
  className?: string;
  /** Defines onClick action */
  onClick?(): void;
};
