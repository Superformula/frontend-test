import React from "react";
import clsx from 'clsx';

export default ({ children,className,  ...rest }) => {
  return <span className={clsx('label', className)} {...rest}>{children}</span>;
};
