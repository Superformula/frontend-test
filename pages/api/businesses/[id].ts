import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { Business } from '~/models';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await axios.get<Business>(`/businesses/${req.query.id}`);
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

  res.send({
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
  });
};

export default handler;
