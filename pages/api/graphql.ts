import { NextApiRequest, NextApiResponse } from "next";
import got from "got";

export default async function graphlProxy(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const url = process.env.YELP_GRAPHQL_URI;

  const response = await got(url!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
    json: {
      query: req.body.query,
      operationName: req.body.operationName,
      variables: req.body.variables,
    },
  }).json();

  res.json(response);
}
