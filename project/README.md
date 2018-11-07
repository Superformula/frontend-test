# Superformula front-end test

## App Architecture

This is two apps, a client and a server.

### the Server 
The server app is a super simple express app with one single `POST /graphql` handler that proxies the Yelp api for us, and takes care of an annoying `CORS` issue as well as conveniently keeping track of the request token. 

### the Client

The client app is comprised of a v4 react-router with just two views `/restaurants`, and `/restaurants/:alias`. These provide us with a filterable list to browse, or a "details" view of any single restaurant we want to know more about.

Both views use [Apollo client](https://www.apollographql.com/docs/react/essentials/get-started.html)  to make `graphql` queries about their respective focuses. Apollo is pretty cool, its very powerful and provides a caching layer as well as some nice functionality around "infinite scroll" style continuous data fetching, among many other things. It can be difficult to debug, so its important to have good tools like [Charles Proxy](https://www.charlesproxy.com/) on hand for introspecting http traffic.

The app keeps state in an `AppContext` that is a simple HOC context keeping track of the our current filtering query. All components in this app are pure functional components, and `AppContext` follows suit with the help of brand spanking new [REACT HOOKS API OMG (notice me dan abramov)](https://reactjs.org/docs/getting-started.html). I'm not suggesting we use this in production yet as it is version `-aplha.0` but its cool to see it work so well and I wanted to try it out anyways so here it is. We're using the `useEffect` hook to observe the app `state` and serialize the query related state into the browser url on state change. This way you can refresh the page, "go back" and get the same filter again, or text it as a link to someone / bookmark it and come back to maybe the same set of restaurants in the list. At least thats what I thought would happen, but after experimenting with it a while I'm not sure Yelp's browse busineses resolver is deterministic, so its a good thing I spent a bunch of time implementing that.





## To run locally

Due to the nature of the `fetch` api, CORS, and yelp's graphql endpoint, you have to run a graphql proxy for this thing to work. Please let me know if I'm missing some crucial aspect of how these tools work. In place of a correctly functioning Apollo client, I made a tiny gql proxy for yelp.

In one terminal window, from `project/` run `npm i && npm start` - this will spin up the client app.

Then, in another, cd into `~project/server/` and create a .env file to store your yelp bearer token

run `echo YELP_TOKEN="your-token-goes-here" > .env`

after your .env file is in place, run `npm i && npm start`

This will give you an express server that proxies yelp running on http://localhost:4000 as well as the webpack-dev-server running the front end app on http://localhost:8080

## Run Tests

run client tests with `npm test`