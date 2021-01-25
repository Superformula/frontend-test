import { createProxyMiddleware } from 'http-proxy-middleware'

export default createProxyMiddleware({
    target: process.env.YELP_API_BASEURL,
    changeOrigin: true,
    pathRewrite: { '.*': '' }
})

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}