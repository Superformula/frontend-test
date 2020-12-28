import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

import { Category } from '~/models';

interface YelpCategories {
  categories: Category[];
}

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await axios.get<YelpCategories>('/categories');

  const categories: Category[] = data.categories.reduce((previousValue, currentValue) => {
    const { parent_aliases, alias, title } = currentValue;

    if (parent_aliases.includes('restaurants')) previousValue.push({ alias, title });
    return previousValue;
  }, []);

  res.send({ categories });
};

export default handler;
