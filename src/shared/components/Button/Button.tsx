import React, { FC } from 'react';
import classNames from 'classnames';

import { ButtonProps, Variant, Size } from './Button.types';
import './Button.scss';

export const Button: FC<ButtonProps> & { variant: typeof Variant; size: typeof Size } = ({
  children,
  onClick,
  style,
  disabled,
  className,
  fullWidth = false,
  variant = Variant.BLUE,
  size = Size.MEDIUM,
}) => (
  <button
    className={classNames('button', `button--${variant}`, className, {
      'button--full-width': fullWidth,
      'button--disabled': disabled,
      'button--small': size === Size.SMALL,
    })}
    style={style}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.variant = Variant;
Button.size = Size;
