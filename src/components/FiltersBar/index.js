import React from 'react';
import { useAction } from 'hooks/useAction';
import { useSelector } from 'hooks/useSelector';
import { isObjectEmpty } from 'utils/object';
import { clearFilters } from 'actions/filters';
import { filtersPath } from 'paths';
import { DICTIONARY } from 'consts/dictionary';
import { Separator } from '../Separator';
import { GridWrapper } from '../GridWrapper';
import { Filters } from '../Filters';
import { Wrapper } from './Wrapper';
import { ClearAll } from './ClearAll';
import { Label } from './Label';

export const FiltersBar = () => {
  const clearAll = useAction(clearFilters);
  const filters = useSelector(filtersPath) || {};
  const hasNoFilters =
    isObjectEmpty(filters) ||
    Object.entries(filters).every(([, value]) => !value);

  return (
    <Wrapper>
      <Separator spaced />
      <GridWrapper flex>
        <Label>{DICTIONARY.FILTER_BY}:</Label>
        <Filters />
        <ClearAll onClick={clearAll} disabled={hasNoFilters}>
          {DICTIONARY.CLEAR_ALL}
        </ClearAll>
      </GridWrapper>
      <Separator spaced />
    </Wrapper>
  );
};
