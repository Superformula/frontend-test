import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../rating';
import Photo from './photo';
import Details from './details';
import LearnMore from './learn-more';

const GridItem = ({ name, alias, photos, rating, price, isClosed, categories }) =>
  <li className='item'>
    <Photo name={name} url={photos[0]} />
    
    <h4 className='name'>{name}</h4>
    
    <Rating score={rating} />
    <Details price={price} isClosed={isClosed} category={categories[0]} />
    <LearnMore to={alias} />

    <style jsx>{`
      .name {
        font-weight: bold;
        margin: .5rem 0;
      }
    `}</style>
  </li>;

GridItem.propTypes = {
  name: PropTypes.string,
  alias: PropTypes.string,
  photos: PropTypes.array,
  rating: PropTypes.number,
  price: PropTypes.string,
  isClosed: PropTypes.bool,
  categories: PropTypes.array
};

GridItem.defaultProps = {
  name: 'Resturant',
  alias: '',
  photos: [],
  rating: 5,
  price: '$',
  isClosed: false,
  categories: []
};

export default GridItem;