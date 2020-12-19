import React, { FC, useEffect, useState } from 'react';

import { Star, StarProps } from '~/components/atoms';

export interface RatingProps {
  value?: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
}

export const Rating: FC<RatingProps> = ({ value = 0 }) => {
  const [stars, setStars] = useState<StarProps['variant'][]>([]);

  useEffect(() => {
    const values: StarProps['variant'][] = [];

    for (let i = 0; i < 5; i += 1) {
      if (value < i) values.push('empty');
      if (value === i) values.push('empty');
      if (value === i + 0.5) values.push('half');
      if (value > i + 0.5) values.push('full');
    }

    setStars(values);
  }, [value]);

  return (
    <div>
      {stars.map((variant, index) => <Star key={index} variant={variant} />)}
    </div>
  );
};
