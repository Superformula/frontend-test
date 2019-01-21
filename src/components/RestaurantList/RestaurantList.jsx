import React from 'react';
import PropTypes from 'prop-types';

import { yelpBusinessShape } from '../../constants/models';
import { Card, CardSkeleton, GridItem } from '..';

const SkeletonLoaders = () => {
  let i = 0;
  const loaders = [];
  while (i < 8) {
    i += 1;
    loaders.push(<CardSkeleton key={`${i}-skeleton`} />);
  }
  return loaders;
};

const RestaurantList = ({ businesses }) => (
  <GridItem
    display="flex"
    flexWrap="wrap"
    justifyContent="center"
    width={[1]}
  >
    {businesses.length > 0 ? businesses.map((item) => {
      const {
        id,
        image_url: imageSrc,
        price,
        rating,
        categories,
        is_closed: isClosed,
      } = item;
      return (
        <Card
          key={id}
          imageSrc={imageSrc}
          title={item.name}
          rating={rating}
          price={price}
          closed={isClosed}
          category={categories[0].title}
          onClick={() => (item.id)}
        />
      );
    }) : <SkeletonLoaders />}
  </GridItem>
);

RestaurantList.defaultProps = {
  businesses: [],
};

RestaurantList.propTypes = {
  businesses: PropTypes.arrayOf(yelpBusinessShape),
};

export default RestaurantList;
