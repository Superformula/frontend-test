import { ROUTES } from 'consts/routes';
import { COLORS } from 'consts/colors';

export const getRestaurantUrl = id => ROUTES.RESTAURANT.replace(':id', id);

export const getRestaurantMapUrl = address =>
  `https://maps.googleapis.com/maps/api/staticmap?center=${address}&scale=1&size=640x228&maptype=roadmap&format=png&key=${process.env.GOOGLE_API_KEY}`;
