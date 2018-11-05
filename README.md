- [React / Redux Demo App](#react--redux-demo-app)
  - [Quickstart](#quickstart)
    - [`json-server`](#json-server)
    - [Production](#production)
    - [Project Outline](#project-outline)
      - [Directory Structure](#directory-structure)
      - [Application Design](#application-design)
      - [Roadmap](#roadmap)

# React / Redux Demo App

## Quickstart

Create a `.env` file in the root of the project, and copy over the keys from `.env.example` (replacing them with the proper production values/keys).

```bash
> yarn
> yarn start
```

A hot-reloadable web app is viewable at `http://localhost:8080/`.

### `json-server`

Due to CORS, a bonus `server` application is available. It will proxy requests to Yelp's API. See the `./server/README.md` file for a quick way to set this up.

### Production

```bash
> yarn
> yarn build
```

View the `./dist` directory for minified assets.

### Project Outline

This project uses React & Redux, SASS, and includes a custom webpack config.

Other notable packages include `include-media` (useful media query mixins), `dotenv` for app environments, and

#### Directory Structure

Here is a notable breakdown of the components and the files used.

- ./src/
  - ./actions - redux action creators
  - ./api - `axios` API wrapper
  - ./assets - assets (images and styles)
  - ./components - basic / shared page components
    - ./Filter - page filter components, used in the `FilterBar`
    - ./FilterBar - page filter bar component
    - ./Nav - simple page navigation (only used in the `RestaurantContainer`)
    - ./OpenStatus - Basic open / closed component
    - ./Restaurant - Shared components for Restaurant views and tiles
    - ./ScrollToTop - basic scrollToTop component (useful when navigating between URLs)
    - ./Stars - Stars review components
  - ./containers - Top Level Page components
  - ./routes - Routes definitions
  - ./selectors - redux store helper selectors
  - ./store - redux store configuration
  - ./App.jsx - main application wrapper (includes `<Provider />`)
  - ./index.html - main page template for HTML view
  - ./index.jsx - main app entry point / webpack / render call
- .env-example - example .env file (copy to `.env` or `.env.production`, etc)
- .gitignore
- .eslintrc.js - common eslint rules, extends from `airbnb` with some overrides
- .prettierrc.js - prettier defaults
- jsconfig.json - editor configuration
- README.md (this file)

When developing, use the top level `Container` to map from the redux store and pass props down.

#### Application Design

TL;DR –– use the top level state tree (redux store) to handle the application state and various component logic. Pass props via top level `Container` `mapStateToProps` calls down to corresponding components.

The most notable complexity of this application is in the redux store with the filtering logic. We are using the [Yelp API](https://www.yelp.com/developers/documentation/v3/business) to make requests, along with `axios` to format and prepare the query string for the requests.

The `state.restaurant.filter` object will contain a mapping of keys and values that the yelp API prefers. For example, the API may be requested as so:

```js
axios.get('/api/businesses/search', {
    params: {
    open_now: true,
    price: '$,$$'
  }
})
...
```

The `buildQueryObject` helper (found in `./src/reducers/helpers.js`) prepares the formatting of our object appropriately, as we're storing in the reducer itself as arrays, for example:

```js
state = {
  restaurant: {
    filters: {
      location: 'Las Vegas',
      open_now: true,
      price: ['$', '$$']
    }
  }
};
```

Our `toggleFilter` (found in `./src/reducers/helpers.js`) helper will remove items from the array, or set as `true` (in the case of the `open_now` filter).

The views all use a direct mapping of the state tree to determine their active status, for example:

```jsx
<Filter.Option
  isActive={values.includes(option)}
  onSelect={this.onSelect}
  key={option}
  value={option}
/>
```

#### Roadmap

Time permitting, these options would have been implemented:

- add more dynamic based `Load More` and use Yelp Pagination (right now, first page is only loaded and the Container simply slices out the array to fake loading more)
- add mobile optimized filter navigation and touch up to mobile views
- add unit tests
- add storybook
