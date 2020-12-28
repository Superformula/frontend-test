import { NextApiRequest, NextApiResponse } from 'next';
import { BusinessService } from '~/services';

interface BusinessQuery {
  category: string;
  offset?: number;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query as unknown;
  const { category, offset } = query as BusinessQuery;
  const data = await BusinessService.getAll({ category, offset });

  res.send(data);
};

export default handler;
