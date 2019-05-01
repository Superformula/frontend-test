import React, { Component } from 'react';

import OpenClosedIndicator from './OpenClosedIndicator.jsx';
import Rating from 'react-rating';

class Card extends Component {

  render() {
    const {
      category,
      closed,
      image,
      name,
      price,
      rating
    } = this.props;
    return (
      <div className="card">
        <div className="card-image">
          <img src={ image } />
        </div>
        <p className="card-name">{ name }</p>
        <Rating
          readonly={ true }
          placeholderRating={ rating }
          emptySymbol={<img src="/src/images/star-empty.png" className="icon" />}
          placeholderSymbol={<img src="/src/images/star-filled.png" className="icon" />}
          fullSymbol={<img src="/src/images/star-filled.png" className="icon" />}
        />
        <div className="row card-details">
          <div className="col-8 collapsed">
            { category } • { price }
          </div>
          <div className="col-4 collapsed text-right">
            {closed}
            <OpenClosedIndicator closed={ closed } />
          </div>
        </div>
        <a href="#" className="btn">Learn More</a>
      </div>
    );
  }
}

export default Card;
