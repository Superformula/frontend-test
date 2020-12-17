import React, { FC } from 'react';

import styles from './Typography.module.scss';

export interface TypographyProps {
  variant: 'title' | 'subtitle' | 'headline' | 'body' | 'status';
}

export const Typography: FC<TypographyProps> = ({ variant, children }) => {
  switch (variant) {
    case 'title': return <h1 className={styles.title}>{children}</h1>;
    case 'subtitle': return <h2 className={styles.subtitle}>{children}</h2>;
    case 'headline': return <h3 className={styles.headline}>{children}</h3>;
    case 'body': return <p className={styles.body}>{children}</p>;
    case 'status': return <p className={styles.status}>{children}</p>;
    default: return <p>{children}</p>;
  }
};
