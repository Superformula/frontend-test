import React from 'react';
import { inject, observer } from 'mobx-react';

import Filter from './Filter.jsx';
import Results from './Results.jsx';

import '../../css/main.scss';

const RestaurantsContainer = inject('store')(observer((props) => {
  const store = props;

  return (
    <React.Fragment>
      <div className="grid-container restaurants-container">
        <div className="row">
          <div className="col-6">
            <h1>Restaurants</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </h3>
          </div>
        </div>
      </div>
      <Filter />
      <Results />
    </React.Fragment>
  );
}));

export default RestaurantsContainer;
