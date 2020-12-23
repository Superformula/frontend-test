import classNames from 'classnames';
import React, {
  createElement,
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';

import styles from './Typography.module.scss';

export interface TypographyProps {
  variant?: 'title' | 'subtitle' | 'headline' | 'body' | 'status' | 'label' | 'span';
}

interface TextProps extends HTMLAttributes<HTMLElement> {
  element: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const Text: FC<TextProps> = ({
  element,
  children,
  ...props
}) => createElement(element, props, children);

export const Typography: FC<TypographyProps> = ({ variant = 'title', children }) => {
  const [element, setElement] = useState<TextProps['element']>('h1');

  const elementClass = classNames({
    [styles.typography]: true,
    [styles[`typography--variant-${variant}`]]: true,
  });

  useEffect(() => {
    switch (variant) {
      case 'title':
        setElement('h1');
        break;

      case 'subtitle':
        setElement('h2');
        break;

      case 'headline':
        setElement('h3');
        break;

      case 'span':
        setElement('span');
        break;

      default:
        setElement('p');
    }
  }, [variant]);

  return <Text element={element} className={elementClass}>{children}</Text>;
};
