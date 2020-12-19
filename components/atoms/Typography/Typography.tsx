import React, { createElement, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Typography.module.scss';

export interface TypographyProps {
  variant: 'title' | 'subtitle' | 'headline' | 'body' | 'status' | 'label';
}

interface TextProps extends HTMLAttributes<HTMLElement> {
  element: 'h1' | 'h2' | 'h3' | 'p';
}

const Text: FC<TextProps> = ({
  element,
  children,
  ...props
}) => createElement(element, props, children);

export const Typography: FC<TypographyProps> = ({ variant, children }) => {
  const elementClass = classNames({
    [styles.typography]: true,
    [styles[`typography--variant-${variant}`]]: true,
  });

  switch (variant) {
    case 'title': return <Text element="h1" className={elementClass}>{children}</Text>;
    case 'subtitle': return <Text element="h2" className={elementClass}>{children}</Text>;
    case 'headline': return <Text element="h3" className={elementClass}>{children}</Text>;
    default: return <Text element="p" className={elementClass}>{children}</Text>;
  }
};
