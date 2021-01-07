import React from "react";
import './button.scss';
import clsx from 'clsx'

export default ({ children, className,  ...rest }) => {
  return <button className={clsx('button', className)} {...rest}>{children}</button>;
};
