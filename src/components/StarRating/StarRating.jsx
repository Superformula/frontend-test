import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FullStar from '../../assets/star-full.svg';
import HalfStar from '../../assets/star-half.svg';
import EmptyStar from '../../assets/star-empty.svg';
import { GridItem } from '..';

const StarWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: inline-block;
  padding: 0 1px;
`;


class StarRating extends PureComponent {
  renderStars() {
    const { count } = this.props;
    const starElements = [];
    let i = 1;
    while (i <= count) {
      starElements.push(this.renderStar(i));
      i += 1;
    }

    return starElements;
  }

  renderStar(index) {
    const { rating } = this.props;
    let icon = <EmptyStar />;
    if ((Math.ceil(rating) === index) && (rating % 1 !== 0)) icon = <HalfStar />;
    if (rating >= index) icon = <FullStar />;
    return <StarWrapper key={`star-${index}`}>{icon}</StarWrapper>;
  }

  render() {
    return <GridItem my={2}>{this.renderStars()}</GridItem>;
  }
}

StarRating.defaultProps = {
  count: 5,
};

StarRating.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number.isRequired,
};

export default StarRating;
