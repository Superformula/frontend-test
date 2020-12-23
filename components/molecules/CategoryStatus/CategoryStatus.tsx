import React, { FC, useEffect, useState } from 'react';

import { Typography } from '~/components/atoms';

export interface CategoryStatusProps {
  category?: string;
  price?: 1 | 2 | 3 | 4;
}

export const CategoryStatus: FC<CategoryStatusProps> = ({ category = '', price = 1 }) => {
  const [money, setMoney] = useState<string>('');
  const [text, setText] = useState<string>('');

  useEffect(() => {
    let value = '';

    for (let i = 0; i < price; i += 1) {
      value += '$';
    }

    setMoney(value);
  }, [price]);

  useEffect(() => {
    if (category) {
      setText(`${category} • ${money}`);
    } else {
      setText(money);
    }
  }, [category, money]);

  return (
    <div>
      <Typography variant="status">{text}</Typography>
    </div>
  );
};
