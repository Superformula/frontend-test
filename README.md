# YELP API Restaurant Assessment

## How to start
make a `.env` file and fill in the following configurations:
```
YELP_ID=abc
YELP_KEY=abc123
GOOGLE_KEY=abc123
```

Run the following in terminal:
```
npm install
npm start
```

## Testing
```
npm test

// resets snapshots
npm run test-reset 
```

## How to build for production
```
npm run webpack
```

## What technologies does it use primarily?
- react
- react-router
- Fetch API
- Yelp's GraphQL api
- CSS Flexbox
- CSS Grid
- SCSS
- Jest

## Browser Compatibility
- Tested only in Chrome
- Will not work in ie due to fetch API + Grid CSS

## Folder Structure
```
+-- package.json
+-- webpack.config.js // configure builds + dev server
+-- README.md
+-- .env // store confidential keys here
+-- _build
+-- _src
|   +-- _components // here we store shared components
|   +-- _views // here are page/view specific components
|       +-- _Home
|           +-- index.js // main view component
|           +-- home.scss // home view styles
|           +-- _Filters // large view subcomponent
|               +-- index.js
|               +-- index.spec.js // jest test file
|               +-- filters.scss
|       +-- _Detail
|   +-- App.js // set up router + providers
|   +-- fetchYelp.js // helper for making yelp api calls
|   +-- graphQueries.js // stores actual graphql queries
|   +-- index.js
|   +-- index.html
|   +-- index.scss //global styles

```

## Design Decisions
- **Hierarchical folder structure per view**
  - This makes it really easy to quickly find files and modify them, improving maintainability.
  - Shared components go in the `components/` folder for any shared component that is needed. (Like our `Divider` component)
- **Lifting State Management up high + controlled components**
  - This approach allows you to have one "source of truth". This drastically reduces bugs
  - This ends up making some files really big, but can be remedied by using HOCs, hooks or renderProps.
- **CSS namespacing**
  - There are a few global styles I've added here, however the majority of components are namespaced.
  - This approach makes it much harder for CSS regression issues.
  - I'd prefer namespacing with JSS / Styled components over SCSS, but used SCSS to save time.
- **Making Data fetches calls inside components**
  - Not a very scalable approach, but for small apps it increases clarity.
  - Makes clear use of `componentDidMount` lifecycle methods
- **Not using State management like Redux + Flux**
  - Again, not very scalable- but got the job done on this small app.
  - Not really sure where state management is headed on a React community level, but I'm excited for React Hooks and the `useReducer` hook
- **Responsive Styling**
  - Only a few places I used responsive media queries.
  - Normally, I think it's a good idea to Develop mobile-first. That would include using CSS libraries or components that help you harness Grid + Flex + breakpoints
- **Component Library**
  - Did not use any component libraries like Material UI
  - Normally, I would use something like Material UI. It enables a Developer to work so much faster. However I wanted to show my ability to not rely on a vendor library to get production-ready user interface.

## Things to improve on
- Tests
  - I haven't had much test-running experience w/ React. This created a lot of roadblocks specifically when mocking sub components
  - Once I learn more w/ Jest, I'd like to write tests for every file, not just small, display components
- CSS
  - Switch over to Material UI for better-looking cookie-cutter components (dropdown, buttons, Grid, Flex)
  - Use JSS (much better namespacing) per component
- Data Fetching
  - Use HOCs to hydrate components with data instead of `componentDidMount` inside of the View component