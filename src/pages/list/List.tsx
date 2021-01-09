import * as React from 'react';

import Filters from './Filters';
import Header from './Header';
import Results from './Results';

const prices = ['All', '$', '$$', '$$$', '$$$$'];
const categories = ['All', 'Italian', 'Argentinian', 'Korean', 'Mexican'];

function List() {
  const [filters, setFilters] = React.useState({
    openNow: false,
    price: 'All',
    category: 'All',
  });

  return (
    <main>
      <Header />
      <Filters
        filters={filters}
        prices={prices}
        categories={categories}
        onChange={setFilters}
      />
      <Results />
    </main>
  );
}

export default List;
