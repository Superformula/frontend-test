import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

export interface ButtonProps {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'normal' | 'full-width';
  disabled?: boolean;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  size = 'normal',
  disabled = false,
  onClick,
}) => {
  const elementClass = classNames({
    [styles.button]: true,
    [styles[`button--color-${color}`]]: true,
    [styles[`button--size-${size}`]]: true,
    [styles['button--disabled']]: disabled,
  });

  const handleClick = () => {
    if (!disabled) onClick();
  };

  return <button type="button" className={elementClass} onClick={handleClick}>{children}</button>;
};
