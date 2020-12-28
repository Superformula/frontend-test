import { NextApiRequest, NextApiResponse } from 'next';
import { BusinessService } from '~/services';

interface BusinessQuery {
  category: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query as unknown;
  const { category } = query as BusinessQuery;
  const data = await BusinessService.getAll({ category });

  res.send(data);
};

export default handler;
