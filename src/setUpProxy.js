const { createProxyMiddleware } = require('http-proxy-middleware');

var restream = function(proxyReq, req, res, options) {
  if (req.body) {
    let bodyData = JSON.stringify(req.body);
    proxyReq.setHeader('Content-Type','application/json');
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));

    proxyReq.write(bodyData);
  }
};

module.exports = function(app) {
  app.use(
    createProxyMiddleware(process.env.YELP_API_BASEURL,{
    target: process.env.YELP_API_PATH,
    secure: false,
    changeOrigin: true,
    onProxyReq:restream
    })
  );
};

