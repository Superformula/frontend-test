import React, { FC } from 'react';

import { RestaurantsFiltersWrapperProps } from './RestaurantsFiltersWrapper.types';
import './RestaurantsFiltersWrapper.scss';
import { Grid } from 'shared/components/Grid/Grid';
import { Checkbox } from 'shared/components/Checkbox/Checkbox';
import { Select } from 'shared/components/Select/Select';
import { Button } from 'shared/components/Button/Button';

const priceOptions = [
  { value: '1', label: '$' },
  { value: '2', label: '$$' },
  { value: '3', label: '$$$' },
  { value: '4', label: '$$$' },
];

const categoriesOptions = [
  { value: 'italian', label: 'Italian' },
  { value: 'seafood', label: 'Seafood' },
  { value: 'steak', label: 'Steakhouses' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'tradamerican', label: 'American' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'thai', label: 'Thai' },
];

export const RestaurantsFiltersWrapper: FC<RestaurantsFiltersWrapperProps> = ({ filters, onChange }) => {
  const handleChange = (fieldName: string, value: string[] | boolean) => {
    const newValues = {
      ...filters,
      [fieldName]: value,
    };

    onChange(newValues);
  };

  return (
    <Grid.Row isFullWidth className="restaurants-filters-wrapper">
      <Grid.Row>
        <section className="restaurants-filters">
          <p className="restaurants-filters__filter-label">Filter By:</p>
          <Checkbox
            name="Open Now"
            checked={filters.openNow}
            onChange={checked => handleChange('openNow', checked)}
            className="restaurants-filters__checkbox"
          />
          <Select
            title="Price"
            targetClassName="restaurants-filters__price-target"
            optionsClassName="restaurants-filters__price-options"
            options={priceOptions}
            values={filters.price}
            onChange={values => handleChange('price', values)}
          />
          <Select
            title="Categories"
            targetClassName="restaurants-filters__categories-target"
            optionsClassName="restaurants-filters__categories-options"
            options={categoriesOptions}
            values={filters.categories}
            onChange={values => handleChange('categories', values)}
          />
          <Button
            className="restaurants-filters__clear-button"
            variant={Button.variant.WHITE}
            size={Button.size.SMALL}
            disabled={!filters.openNow && !filters.price.length && !filters.categories.length}
            onClick={() => onChange({ openNow: false, price: [], categories: [] })}
          >
            Clear all
          </Button>
        </section>
      </Grid.Row>
    </Grid.Row>
  );
};
