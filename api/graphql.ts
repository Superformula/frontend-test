import { NowRequest, NowResponse } from '@vercel/node';
import { createProxyMiddleware } from 'http-proxy-middleware';

import * as proxyConfig from '../proxyConfig';

// Create proxy instance outside of request handler function to avoid unnecessary re-creation
const apiProxy = createProxyMiddleware(proxyConfig);

const handler = (request: NowRequest, response: NowResponse) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apiProxy(request as any, response as any, (result: any) => {
    if (result instanceof Error) {
      throw result;
    }

    throw new Error(
      `Request '${request.url}' is not proxied! We should never reach here!`
    );
  });
};

export default handler;
