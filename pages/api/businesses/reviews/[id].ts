import { NextApiRequest, NextApiResponse } from 'next';

import { ReviewService } from '~/services';

interface ReviewQuery {
  id: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query as unknown;
  const { id } = query as ReviewQuery;
  const data = await ReviewService.getOne({ id });

  res.send(data);
};

export default handler;
