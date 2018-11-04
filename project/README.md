# Superformula front-end test

## To run locally

Due to the nature of the `fetch` api and yelp's graphql endpoint, you have to run a local graphql proxy for this thing to work.

In one terminal window run `npm i && npm run start`

Then, in another, cd into `~project/server` and again run `npm i && npm run start`


This will give you an express server that proxies yelp running on http://localhost:4000 as well as the webpack-dev-server running the front end app on http://localhost:8080