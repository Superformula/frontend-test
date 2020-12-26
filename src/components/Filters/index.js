import React, { useCallback } from 'react';
import { DICTIONARY } from 'consts/dictionary';
import { Checkbox } from 'components/Checkbox';
import { useAction } from 'hooks/useAction';
import { useSelector } from 'hooks/useSelector';
import { filtersPath } from 'paths';
import { setFilter } from 'actions/filters';
import { FilterWrapper } from './FilterWrapper';
import { RadioSelect } from '../RadioSelect';
import { useCategoriesData } from 'hooks/useCategoriesData';

export const Filters = () => {
  const categories = useCategoriesData();
  const updateFilter = useAction(setFilter);
  const { isOpen = false, price, category } = useSelector(filtersPath) || {};

  const toggleIsOpenFilter = useCallback(
    event => updateFilter('isOpen', event?.target?.checked),
    [setFilter]
  );
  const updateSelectFilter = useCallback(
    key => event => updateFilter(key, event?.target?.value),
    [setFilter]
  );

  return (
    <>
      <FilterWrapper>
        <Checkbox
          name="open-now-filter-desktop"
          onChange={toggleIsOpenFilter}
          checked={isOpen}
        >
          {DICTIONARY.OPEN_NOW}
        </Checkbox>
      </FilterWrapper>
      <FilterWrapper>
        <RadioSelect
          name="price"
          onChange={updateSelectFilter('price')}
          selected={price}
        />
      </FilterWrapper>
      {categories && (
        <FilterWrapper>
          <RadioSelect
            name="category"
            onChange={updateSelectFilter('category')}
            selected={category}
            options={categories}
            label={DICTIONARY.CATEGORIES}
          />
        </FilterWrapper>
      )}
    </>
  );
};
