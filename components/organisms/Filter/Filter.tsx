import classNames from 'classnames';
import React, {
  FC,
  useEffect,
  useState,
} from 'react';

import { Button, Typography } from '~/components/atoms';
import { Select, SelectOption } from '~/components/molecules';

import styles from './Filter.module.scss';

export type FilterData = {
  price: string | null;
  category: string | null;
}

export interface FilterProps {
  priceOptions: SelectOption[];
  categoryOptions: SelectOption[];
  onChange: (value: FilterData) => void;
}

export const Filter: FC<FilterProps> = ({ priceOptions, categoryOptions, onChange }) => {
  const [price, setPrice] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const elementClass = classNames({
    [styles.filter]: true,
  });

  const labelClass = classNames({
    [styles['filter-label']]: true,
  });

  const priceClass = classNames({
    [styles['filter-price']]: true,
  });

  const categoryClass = classNames({
    [styles['filter-category']]: true,
  });

  const buttonClass = classNames({
    [styles['filter-button']]: true,
  });

  const handlePriceChange = (value: string) => {
    setPrice(value);
    onChange({ price: value, category });
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    onChange({ price, category: value });
  };

  const handleClearClick = () => {
    setPrice(null);
    setCategory(null);
    onChange({ price: null, category: null });
  };

  useEffect(() => {
    setDisabled(Boolean(!price && !category));
  }, [price, category]);

  return (
    <div className={elementClass}>
      <div className={labelClass}>
        <Typography variant="label">Filter By:</Typography>
      </div>

      <div className={priceClass}>
        <Select label="Price" options={priceOptions} value={price} onChange={handlePriceChange} />
      </div>

      <div className={categoryClass}>
        <Select label="Categories" options={categoryOptions} value={category} onChange={handleCategoryChange} />
      </div>

      <div className={buttonClass}>
        <Button color="secondary" size="small" disabled={disabled} onClick={handleClearClick}>Clear All</Button>
      </div>
    </div>
  );
};
