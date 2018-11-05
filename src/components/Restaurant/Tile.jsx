import React from 'react';
import { bool, func, string, array, number } from 'prop-types';
import { Link } from 'react-router-dom';
import Restaurant from 'components/Restaurant';
import { ROUTES } from 'routes';

export default function Tile(props) {
  const {
    goToRestaurant,
    id,
    is_closed,
    price,
    rating,
    image_url,
    name,
    categories,
  } = props;
  return (
    <div
      role="presentation"
      onClick={goToRestaurant}
      className="restaurant-tile"
    >
      <div
        className="restaurant-tile__img"
        style={{
          backgroundImage: `url(${image_url})`,
        }}
      />
      <h4 className="restaurant-tile__heading">{name}</h4>
      <Restaurant.Meta
        rating={rating}
        is_closed={is_closed}
        categories={categories}
        price={price}
      />
      <Link
        to={`${ROUTES.RESTAURANT}/${id}`}
        className="restaurant-tile__button button button--block"
      >
        Learn More
      </Link>
    </div>
  );
}

Tile.propTypes = {
  goToRestaurant: func,
  id: string,
  image_url: string,
  name: string,
  is_closed: bool,
  rating: number,
  categories: array,
  price: string,
};
