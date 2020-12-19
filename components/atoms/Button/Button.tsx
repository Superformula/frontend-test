import classNames from 'classnames';
import React, {
  FC,
  useCallback,
} from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'normal' | 'full-width';
  disabled?: boolean;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
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

  const handleClick = useCallback(() => {
    if (!disabled) onClick();
  }, [disabled]);

  return <button type="button" className={elementClass} onClick={handleClick}>{children}</button>;
};
