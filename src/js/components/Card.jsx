import PropTypes from 'prop-types';
import Rating from 'react-rating';
import React from 'react';

import OpenClosedIndicator from './OpenClosedIndicator.jsx';

function Card(props) {
  const {
      category,
      closed,
      image,
      name,
      price,
      rating,
      url
    } = props,
    emptySymbol = '/src/images/star-empty.png',
    fullSymbol = '/src/images/star-filled.png';

  return (
    <div className="card">
      <div className="card-image">
        <img src={ image } alt={ name } />
      </div>
      <p className="card-name">{ name }</p>
      <Rating
        readonly
        placeholderRating={ rating }
        emptySymbol={ <img src={ emptySymbol } className="icon" alt="" /> }
        placeholderSymbol={ <img src={ fullSymbol } className="icon" alt="" /> }
        fullSymbol={ <img src={ fullSymbol } className="icon" alt="" /> }
      />
      <div className="row card-details">
        <div className="col-8 collapsed">
          { category } • { price }
        </div>
        <div className="col-4 collapsed text-right">
          { closed }
          <OpenClosedIndicator closed={ closed } />
        </div>
      </div>
      <a href={ url } className="btn">Learn More</a>
    </div>
  );
}

Card.propTypes = {
  category: PropTypes.string.isRequired,
  closed: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Card;
