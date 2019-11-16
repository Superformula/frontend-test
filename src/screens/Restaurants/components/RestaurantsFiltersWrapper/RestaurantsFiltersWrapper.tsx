import React, { FC, useState } from 'react';

import { RestaurantsFiltersWrapperProps } from './RestaurantsFiltersWrapper.types';
import './RestaurantsFiltersWrapper.scss';
import { Grid } from 'shared/components/Grid/Grid';
import { Checkbox } from 'shared/components/Checkbox/Checkbox';
import { Select } from 'shared/components/Select/Select';
import { Button } from 'shared/components/Button/Button';

const priceOptions = [
  { value: 'all', label: 'All' },
  { value: '$', label: '$' },
  { value: '$$', label: '$$' },
  { value: '$$$', label: '$$$' },
];

const categoriesOptions = [
  { value: 'all', label: 'All' },
  { value: 'italian', label: 'Italian' },
  { value: 'seafood', label: 'Seafood' },
  { value: 'steakhouses', label: 'Steakhouses' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'american', label: 'American' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'thai', label: 'Thai' },
];

export const RestaurantsFiltersWrapper: FC<RestaurantsFiltersWrapperProps> = () => {
  const [openNowChecked, setOpenNowChecked] = useState(false);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const clearAllFilters = () => {
    setOpenNowChecked(false);
    setSelectedPrices([]);
    setSelectedCategories([]);
  };

  return (
    <Grid.Row isFullWidth className="restaurants-filters-wrapper">
      <Grid.Row>
        <section className="restaurants-filters">
          <p className="restaurants-filters__filter-label">Filter By:</p>
          <Checkbox
            name="Open Now"
            checked={openNowChecked}
            onChange={setOpenNowChecked}
            className="restaurants-filters__checkbox"
          />
          <Select
            title="Price"
            targetClassName="restaurants-filters__price-target"
            optionsClassName="restaurants-filters__price-options"
            options={priceOptions}
            values={selectedPrices}
            onChange={setSelectedPrices}
          />
          <Select
            title="Categories"
            targetClassName="restaurants-filters__categories-target"
            optionsClassName="restaurants-filters__categories-options"
            options={categoriesOptions}
            values={selectedCategories}
            onChange={setSelectedCategories}
          />
          <Button
            className="restaurants-filters__clear-button"
            variant={Button.variant.WHITE}
            size={Button.size.SMALL}
            onClick={clearAllFilters}
          >
            Clear all
          </Button>
        </section>
      </Grid.Row>
    </Grid.Row>
  );
};
