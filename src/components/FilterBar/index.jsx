import React from 'react';
import { object, func } from 'prop-types';
import Filter from 'components/Filter';

export default function FilterBar(props) {
  const { onReset, onSelect, filters } = props;

  // quick stub to only show the filter if we have anything set;
  // since location is always present, we want to filter it out to avoid a false positive
  const showClearAll = Object.keys(filters).filter(key => key !== 'location')
    .length;

  return (
    <section className="filter-bar">
      <div className="filter-bar__inner container">
        <em className="filter-bar__label">Filter By:</em>
        <Filter.Toggle
          type="open_now"
          isActive={filters.open_now}
          onSelect={onSelect}
        >
          Open Now
        </Filter.Toggle>
        <Filter.Select
          values={filters.price}
          type="price"
          onSelect={onSelect}
          label="Price"
          options={['1', '2', '3', '4']}
        />
        <Filter.Select
          values={filters.categories}
          type="categories"
          label="Categories"
          onSelect={onSelect}
          options={[
            'chinese',
            'mexican',
            'cheesesteaks',
            'panasian',
            'korean',
            'latin',
            'newamerican',
          ]}
        />
        {!!showClearAll && <Filter.Clear onClear={onReset} />}
      </div>
    </section>
  );
}
FilterBar.propTypes = {
  filters: object,
  onSelect: func,
  onReset: func,
};
