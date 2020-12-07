import { createProxyMiddleware } from 'http-proxy-middleware'

import { GRAPHQL_SCHEMA_URL } from '~/common'

export default createProxyMiddleware({
    target: GRAPHQL_SCHEMA_URL,
    changeOrigin: true,
    pathRewrite: { '.*': '' },
    xfwd: true,
})

export const config = {
    api: {
        bodyParser: false, // enable POST requests
        externalResolver: true, // hide warning message
    },
}
