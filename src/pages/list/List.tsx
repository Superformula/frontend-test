import * as React from 'react';

import Filters from './Filters';
import Header from './Header';
import Results from './Results';

function List() {
  return (
    <main>
      <Header />
      <Filters />
      <Results />
    </main>
  );
}

export default List;
