import { NextApiRequest, NextApiResponse } from 'next';
import { CategoryService } from '~/services';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const data = await CategoryService.getAll();
  res.send(data);
};

export default handler;
