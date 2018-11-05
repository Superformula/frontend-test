import React, { Component } from 'react';
import { number } from 'prop-types';
import { Star } from './Star';

export class StarsContainer extends Component {
  score = (amount) => {
    const { rating } = this.props;
    if (rating > amount && rating !== amount) return 1;
    if (rating < amount && rating > amount - 1) return 0.5;
    if (rating < amount) return 0;

    return 1;
  };

  renderStars() {
    const items = [];

    /* eslint-disable-next-line */
    for (let i = 1; i < 6; i++) {
      items.push(<Star key={i} score={this.score(i)} />);
    }

    return items;
  }

  render() {
    return <div className="stars">{this.renderStars()}</div>;
  }
}

StarsContainer.propTypes = {
  rating: number,
};

export default StarsContainer;
