import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { Business } from '~/models';

interface YelpBusinesses {
  businesses: Business[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const params = {
    price: req.query.open,
    open_now: req.query.open,
    categories: req.query.category,
    location: 'Las Vegas',
  };

  const { data } = await axios.get<YelpBusinesses>('/businesses/search', { params });

  const businesses: Business[] = data.businesses.reduce((previousValue, currentValue) => {
    const {
      id,
      image_url,
      name,
      rating,
      categories,
      is_closed,
      price,
    } = currentValue;

    previousValue.push({
      id,
      image_url,
      name,
      rating,
      categories,
      is_closed,
      price,
    });

    return previousValue;
  }, []);

  res.send({ businesses });
};

export default handler;
