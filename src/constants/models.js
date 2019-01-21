import PropTypes from 'prop-types';

const coordinatesShape = PropTypes.shape({
  latitude: PropTypes.number,
  longitude: PropTypes.number,
});

export const yelpBusinessShape = PropTypes.shape({
  alias: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.shape({
    alias: PropTypes.string,
    title: PropTypes.string,
  })),
  coordinates: coordinatesShape,
  display_phone: PropTypes.string,
  distance: PropTypes.number,
  id: PropTypes.string,
  image_url: PropTypes.string,
  is_closed: PropTypes.bool,
  location: PropTypes.shape({
    address1: PropTypes.string,
    address2: PropTypes.string,
    address3: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    display_address: PropTypes.arrayOf(PropTypes.string),
    state: PropTypes.string,
    zip_code: PropTypes.string,
  }),
  name: PropTypes.string,
  phone: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
  review_count: PropTypes.number,
  transactions: PropTypes.arrayOf(PropTypes.any),
  url: PropTypes.string,
});

export const yelpResultsShape = {
  businesses: PropTypes.arrayOf(yelpBusinessShape),
  region: PropTypes.shape({
    center: coordinatesShape,
  }),
  total: PropTypes.number,
};
