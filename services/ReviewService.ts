import moment from 'moment';

import { Review } from '~/models';
import axios from '~/utils/axios';

interface GetOneProps {
  id: string;
}

export interface Reviews {
  reviews: Review[];
}

export const getOne = async (props: GetOneProps): Promise<Reviews> => {
  const { data } = await axios.get<Reviews>(`/businesses/${props.id}/reviews`);

  const reviews: Review[] = data.reviews.reduce((previousValue, currentValue) => {
    const {
      id,
      rating,
      text,
      time_created,
      user,
    } = currentValue;

    const { name, image_url } = user;

    previousValue.push({
      id,
      rating,
      text,
      time_created: moment(time_created).format('MM/D/YYYY'),
      user: { name, image_url },
    });

    return previousValue;
  }, []);

  return { reviews };
};
