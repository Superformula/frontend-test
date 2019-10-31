## Yelp API Key
You will need to set an environment variable to provide the Yelp API key to the app. Running `export YELP_KEY={your_key}` (replacing `${your_key}` with the API key) will set the environment variable correctly.

## Running the Demo
The demo should be simple to run. If you have [NodeJS](https://nodejs.org/) installed, you can simply run `npm install` to download all the dependencies and `npm run start` to run the app. Once running, you can open the site at <http://localhost:3000/>.

## Basic Design
The server application is fairly straightforward and simple. It starts up on port 3000 and serves up static resources from the public directory. It additionally sets up an endpoint at `/api/` that proxies any request to Yelp's API with the proper tokens set. Whatever path is provided after `/api/` is what is sent to Yelp's API root (`https://api.yelp.com/v3/`). The server also uses `webpack-dev-middleware` to package up the frontend React app.

The frontend app starts by creating a Redux store and firing off two API requests, one to get the restaurant categories and another to get a list of restaurants. This store is passed via a Redux `Provider` to the `MainComponent`, which is mounted at `#appRoot`.

`MainComponent` renders the header and builds `FilterBar` and `SearchResults` components. `FilterBar` gets categories from the Redux store and fires off actions as filters are updated to trigger searches or client-side filtering.

The `SearchResults` component handles displaying an informational message if there are no search results and generating `RestaurantResult`s for any results that are available. The `RestaurantResult` component is responsible for displaying the relevant information about a restaurant and notifying its parent `SearchResults` component to display a `RestaurantDetails` component if the user clicks the Learn More button.

The `RestaurantDetails` component fires off a request for reviews for the restaurant provided to it and displays the reviews in a modal pop-up. It also displays a message while it is loading or if there are no reviews for the restaurant.

Actions use `redux-thunk` to handle asynchronous dispatching of server requests and results.

## Gotchas
I don't have a copy of Sketch so I wasn't really able to get all the info about the layout. I got a friend with Sketch to figure out what font was being used, but they didn't have time to give me much more than that.

I wasn't sure what the detail view was supposed to look like, so I just tossed in a modal and put the listed info in there.

The business search endpoint doesn't return a value that identifies if a business is currently open, it only provides an option to set that as a query. Since the requirements specify that it should be a client-side filter, I used the `is_closed` field from the result for the filtering, even though that field indicates permanent closure.
