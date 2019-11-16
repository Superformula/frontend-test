import React, { forwardRef } from 'react';
import { useTransition, animated } from 'react-spring';

import { AnimateOnAppearProps } from './AnimateOnAppear.types';

export const AnimateOnAppear = forwardRef<HTMLDivElement, AnimateOnAppearProps>(
  ({ isVisible, children, style }, ref) => {
    const transitions = useTransition(isVisible, null, {
      from: {
        transition: '0.05s linear',
        transformOrigin: 'top center',
        transform: 'scale(1,0)',
      },
      enter: {
        transform: 'scale(1,1)',
      },
      leave: {
        transform: 'scale(1,0)',
      },
    });

    return (
      <>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div ref={ref} key={key} style={{ ...style, ...props }}>
                {children}
              </animated.div>
            ),
        )}
      </>
    );
  },
);
