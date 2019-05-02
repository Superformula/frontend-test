import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Filter from '../components/Filter.jsx';
import Results from '../components/Results.jsx';

import '../../css/main.scss';

@inject('store')
@observer
class RestaurantsContainer extends Component {
  componentDidMount() {
    this.props.store.fetch();
  }

  render() {
    const { store } = this.props;

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
        { store.isComplete && !store.isError && (
          <Results
            data={ store.data.businesses }
            errors={ store.errors }
            status={ store.status }
          />
        ) }
      </React.Fragment>
    );
  }
}

RestaurantsContainer.propTypes = { store: PropTypes.object.isRequired };

export default RestaurantsContainer;
