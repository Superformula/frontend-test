import { NextApiRequest, NextApiResponse } from 'next';

import { BusinessService } from '~/services';

interface BusinessQuery {
  id: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query as unknown;
  const { id } = query as BusinessQuery;
  const data = await BusinessService.getOne({ id });

  res.send(data);
};

export default handler;
