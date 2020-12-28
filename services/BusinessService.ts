import { Business } from '~/models';
import axios from '~/utils/axios';

export interface Businesses {
  businesses: Business[];
}

interface GetAllProps {
  category: string;
}

export const getAll = async (props?: GetAllProps): Promise<Businesses> => {
  const params = {
    categories: props?.category,
    location: 'Las Vegas',
  };

  const { data } = await axios.get<Businesses>('/businesses/search', { params });

  const businesses: Business[] = data.businesses.reduce((previousValue, currentValue) => {
    const {
      id,
      image_url,
      name,
      rating,
      categories,
      is_closed,
      price,
      alias,
    } = currentValue;

    previousValue.push({
      id,
      image_url,
      name,
      rating,
      categories,
      is_closed,
      price,
      alias,
    });

    return previousValue;
  }, []);

  return { businesses };
};

interface GetOneProps {
  id: string;
}

export const getOne = async (props: GetOneProps): Promise<Business> => {
  const { data } = await axios.get<Business>(`/businesses/${props.id}`);
  const {
    id,
    name,
    rating,
    categories,
    is_closed,
    location,
    coordinates,
    photos,
    price,
    review_count,
  } = data;

  const { display_address } = location;

  return {
    id,
    name,
    rating,
    categories,
    is_closed,
    coordinates,
    photos,
    price,
    review_count,
    location: { display_address },
  } as Business;
};
