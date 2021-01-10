import Button from 'design-system/Button';
import Checkbox from 'design-system/Checkbox';
import Select from 'design-system/Select';
import { Option } from 'design-system/Select/Menu';
import * as React from 'react';
import styled from 'styled-components';

import { FilterValue } from './types';

const FilterWrapper = styled.section`
  padding: ${({ theme: { px2rem } }) => `${px2rem(24)} ${px2rem(64)}`};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.divider1};
  display: grid;
  grid-template-columns: auto auto auto auto 1fr;
  grid-template-rows: auto;
  column-gap: ${({ theme: { px2rem } }) => px2rem(32)};
`;

const FilterLabel = styled.span`
  font-size: ${({ theme: { px2rem } }) => px2rem(16)};
  line-height: ${({ theme: { px2rem } }) => px2rem(24)};
  color: ${({ theme: { colors } }) => colors.label};
`;

const ClearAllButton = styled(Button)`
  width: ${({ theme: { px2rem } }) => px2rem(150)};
  justify-self: end;
`;
interface FiltersProps {
  filters: FilterValue;
  prices: Array<Option>;
  categories: Array<Option>;
  onChange: (newFilters: FilterValue) => void;
}

function Filters({ filters, prices, categories, onChange }: FiltersProps) {
  const isClearDisabled =
    !filters.openNow &&
    filters.price === prices[0].value &&
    filters.category === categories[0].value;

  return (
    <FilterWrapper>
      <FilterLabel>Filter By:</FilterLabel>
      <Checkbox
        label="Open Now"
        checked={filters.openNow}
        onChange={(openNow) =>
          onChange({
            ...filters,
            openNow,
          })
        }
      />
      <Select
        value={filters.price}
        options={prices}
        onChange={(price) =>
          onChange({
            ...filters,
            price,
          })
        }
      />
      <Select
        value={filters.category}
        options={categories}
        onChange={(category) =>
          onChange({
            ...filters,
            category,
          })
        }
      />
      <ClearAllButton
        variant="outlined"
        onClick={() =>
          onChange({
            openNow: false,
            price: prices[0].value,
            category: categories[0].value,
          })
        }
        disabled={isClearDisabled}>
        Clear All
      </ClearAllButton>
    </FilterWrapper>
  );
}

export default Filters;
