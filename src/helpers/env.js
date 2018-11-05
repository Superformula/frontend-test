const { NODE_ENV, YELP_API_KEY, YELP_API_ROOT } = process.env;

export const IS_PRODUCTION = NODE_ENV === 'production';

export default {
  IS_PRODUCTION,
  YELP_API_KEY, // TODO: Make more secure.
  YELP_API_ROOT,
};
