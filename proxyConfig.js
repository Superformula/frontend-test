const { YELP_API_KEY } = process.env;

module.exports = {
  target: 'https://api.yelp.com',
  changeOrigin: true,
  pathRewrite: { '^/api/graphql': '/v3/graphql' },
  onProxyReq: (proxyReq) => {
    proxyReq.setHeader('Authorization', `Bearer ${YELP_API_KEY || ''}`);
    proxyReq.setHeader('Accept-Language', 'en-US');
  },
};
