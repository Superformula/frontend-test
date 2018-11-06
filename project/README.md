# Superformula front-end test

## To run locally

Due to the nature of the `fetch` api, CORS, and yelp's graphql endpoint, you have to run a graphql proxy for this thing to work. Please let me know if I'm missing some crucial aspect of how these tools work. In place of a correctly functioning Apollo client, I made a tiny gql proxy for yelp.

In one terminal window, from `project/` run `npm i && npm start` - this will spin up the client app.

Then, in another, cd into `~project/server/` and create a .env file to store your yelp bearer token

run `echo YELP_TOKEN="your-token-goes-here" > .env`

after your .env file is in place, run `npm i && npm start`

This will give you an express server that proxies yelp running on http://localhost:4000 as well as the webpack-dev-server running the front end app on http://localhost:8080

## Run Tests

run tests with `npm test`