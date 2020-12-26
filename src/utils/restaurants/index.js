import { ROUTES } from 'consts/routes';

export const getRestaurantUrl = id => ROUTES.RESTAURANT.replace(':id', id);
