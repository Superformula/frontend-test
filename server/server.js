const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const Api = require('./api');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/api/businesses/search', (req, res, next) => {
  return Api.get('/businesses/search', req.query).then(data => {
    res.json(data);
  });
});

server.get('/api/businesses/:id', (req, res, next) => {
  return Api.get(`/businesses/${req.params.id}`, req.query).then(data => {
    res.json(data);
  });
});

server.get('/api/businesses/:id/reviews', (req, res, next) => {
  return Api.get(`/businesses/${req.params.id}/reviews`, req.query).then(data => {
    res.json(data);
  });
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
