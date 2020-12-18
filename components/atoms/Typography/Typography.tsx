import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Typography.module.scss';

export interface TypographyProps {
  variant: 'title' | 'subtitle' | 'headline' | 'body' | 'status' | 'label';
}

export const Typography: FC<TypographyProps> = ({ variant, children }) => {
  const elementClass = classNames({
    [styles.typography]: true,
    [styles[`typography--variant-${variant}`]]: true,
  });

  switch (variant) {
    case 'title': return <h1 className={elementClass}>{children}</h1>;
    case 'subtitle': return <h2 className={elementClass}>{children}</h2>;
    case 'headline': return <h3 className={elementClass}>{children}</h3>;
    default: return <p className={elementClass}>{children}</p>;
  }
};
