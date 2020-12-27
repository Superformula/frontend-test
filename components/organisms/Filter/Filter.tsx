import classNames from 'classnames';
import React, {
  FC,
  useEffect,
  useState,
} from 'react';

import { Button, Radio, Typography } from '~/components/atoms';
import { Select, SelectOption } from '~/components/molecules';

import styles from './Filter.module.scss';

export type FilterData = {
  price: string | null;
  category: string | null;
  open: boolean;
}

export interface FilterProps {
  priceOptions: SelectOption[];
  categoryOptions: SelectOption[];
  onChange: (value: FilterData) => void;
}

export const Filter: FC<FilterProps> = ({ priceOptions, categoryOptions, onChange }) => {
  const [price, setPrice] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const elementClass = classNames({
    [styles.filter]: true,
  });

  const statusClass = classNames({
    [styles['filter-status']]: true,
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

  const handleStatusChange = (value: boolean) => {
    setOpen(value);
    onChange({ price, category, open: value });
  };

  const handlePriceChange = (value: string) => {
    setPrice(value);
    onChange({ price: value, category, open });
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    onChange({ price, category: value, open });
  };

  const handleClearClick = () => {
    setPrice(null);
    setCategory(null);
    setOpen(false);
    onChange({ price: null, category: null, open: false });
  };

  useEffect(() => {
    setDisabled(Boolean(!price && !category && !open));
  }, [price, category, open]);

  return (
    <div className={elementClass}>
      <div className={labelClass}>
        <Typography variant="label">Filter By:</Typography>
      </div>

      <div className={statusClass}>
        <Radio
          checked={open}
          onChange={handleStatusChange}
        >
          Open Now
        </Radio>
      </div>

      <div className={priceClass}>
        <Select
          label="Price"
          value={price}
          options={priceOptions}
          onChange={handlePriceChange}
        />
      </div>

      <div className={categoryClass}>
        <Select
          label="Categories"
          value={category}
          options={categoryOptions}
          onChange={handleCategoryChange}
        />
      </div>

      <div className={buttonClass}>
        <Button
          size="small"
          color="secondary"
          disabled={disabled}
          onClick={handleClearClick}
        >
          Clear All
        </Button>
      </div>
    </div>
  );
};
