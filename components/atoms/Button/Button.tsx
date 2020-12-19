import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

export interface ButtonProps {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'normal' | 'full-width';
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  size = 'normal',
  disabled = false,
}) => {
  const elementClass = classNames({
    [styles.button]: true,
    [styles[`button--color-${color}`]]: true,
    [styles[`button--size-${size}`]]: true,
    [styles['button--disabled']]: disabled,
  });

  return <button type="button" className={elementClass}>{children}</button>;
};
