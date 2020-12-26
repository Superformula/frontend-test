import React, { useCallback } from 'react';
import { DICTIONARY } from 'consts/dictionary';
import { Checkbox } from 'components/Checkbox';
import { useAction } from 'hooks/useAction';
import { useSelector } from 'hooks/useSelector';
import { filtersPath } from 'paths';
import { setFilter } from 'actions/filters';
import { FilterWrapper } from './FilterWrapper';

export const Filters = () => {
  const updateFilter = useAction(setFilter);
  const { isOpen = false } = useSelector(filtersPath) || {};
  const toggleIsOpenFilter = useCallback(
    event => {
      updateFilter('isOpen', event?.target?.checked);
    },
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
      <FilterWrapper>FILTERS 2</FilterWrapper>
    </>
  );
};
