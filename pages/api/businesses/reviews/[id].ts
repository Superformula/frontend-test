import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { Review } from '~/models';

interface YelpReviews {
  reviews: Review[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await axios.get<YelpReviews>(`/businesses/${req.query.id}/reviews`);

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
      time_created,
      user: { name, image_url },
    });

    return previousValue;
  }, []);

  res.send({ reviews });
};

export default handler;
