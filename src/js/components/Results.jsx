import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card.jsx';

function Results(props) {
  const {
    data,
    errors,
    status
  } = props;

  return (
    <div className="results">
      <div className="grid-container">
        <div className="row">
          <div className="col-6">
            <h2>All Restaurants</h2>
          </div>
        </div>
        <div className="row">
          { status === 'pending' && (
            <p className="loading">
              Loading...
            </p>
          ) }

          { status === 'complete' && (
            <ul>
              { data.map(({
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

          { status === 'error' && (
            <pre className="error">
              { errors.toString() }
            </pre>
          ) }
        </div>
      </div>
    </div>
  );
}

Results.propTypes = {
  data: PropTypes.array.isRequired,
  errors: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired
};

export default Results;
