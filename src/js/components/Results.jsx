import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Card from './Card.jsx';

@inject('store')
@observer
class Results extends Component {
  componentDidMount() {
    this.props.store.fetch();
  }

  render() {
    const { store } = this.props;

    return (
      <div className="results">
        <div className="grid-container">
          <div className="row">
            <div className="col-6">
              <h2>All Restaurants</h2>
            </div>
          </div>
          <div className="row">
            { store.isPending && (
              <p className="loading">
                Loading...
              </p>
            ) }

            { store.isComplete && !store.isError && (
              <ul>
                { store.data.businesses.map(({
                  categories,
                  id,
                  is_closed,
                  image_url,
                  name,
                  price,
                  rating,
                  url
                }) => (
                  <li key={ id } className="col-3">
                    <Card
                      category={ categories[0].title }
                      closed={ is_closed }
                      image={ image_url }
                      name={ name }
                      price={ price }
                      rating={ rating }
                      url={ url }
                    />
                  </li>
                )) }
              </ul>
            ) }

            { store.isError && (
              <pre className="error">
                { store.errors.toString() }
              </pre>
            ) }
          </div>
        </div>
      </div>
    );
  }
}

Results.propTypes = { store: PropTypes.object.isRequired };

export default Results;
