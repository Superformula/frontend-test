# Superformula Front-end Developer Coding Test

Application is deployed on AWS, as well as storybook. Proxy for yelp API is deployed on AWS Lambda.

**Application url:** http://frontend-application-v1.s3-website.eu-central-1.amazonaws.com/

**Storybook url:** http://frontend-application-v1-storybook.s3-website.eu-central-1.amazonaws.com/

![Application gif](https://user-images.githubusercontent.com/57920591/69098195-708e5f80-0a58-11ea-83ef-54911710fddc.gif)

## Commands

**Run locally**

*Create .env with `API_URL=/api` and proper `YELP_API_TOKEN`
```
npm i
npm watch
```

**Storybook**
```
npm run storybook
```

**Build**

*remember to add .env with proper `API_URL`
```
npm run build
```

**Test**
```
npm test
```

## Done / not done

### Done

- Most of components used inside Restaurants view are tested (96.68% Lines)
- Used React
- No boilerplate
- SCSS Preprocessor

### Not done (Lack of time)
#### *if you want me to do something from this list, just me let know

- Mobile view is created only for second view (Restaurant details view)
- Filter navigation filter only on server side queries
- `Categories` are not pre-filled from endpoint
- Tests for restaurant details view
- Pagination

## I would change/add (if more time)
- Better accessability (+ get designs for focus on button)
- 100% test coverage (with GraphQL MockedProvider)
- E2E tests
- Add filters to path
- I changed restaurant card view (https://i.snipboard.io/3wp2xC.jpg), it's now possible to manage the height of card automatically, I can make it the same as on designs if needed of course
- Add rest of components to storybook (some of components inside screens folder), add colors to storybook
- Describe all components (I described only a few)
- Add prop types
- There are 6 variants of grey color, maybe its possible to "standardize" them?
- Make dropdown more reusable (setting width automatically)
- Consistently use style props or className
- Improve tablet views
- If you want I could use `em` for padding etc.
- Clean up git commits a bit
- Show loader in better place on filters change (now it's in filters row)
- Remove/change grid
- Add error boundaries
- Fix bug with half star svg on safari + properly format date
- Canceling requests
- Clean up shared imports
- Add placeholders when loading
- More manual tests (especially on other browsers, mostly tested on Chrome)

## Improvements
- Configure CI/CD on github (+ add snyk, npm audit checks)
- Lazy loading
- SSR (Next.js)
- CSS (prefixes, theme)
- Chunk app
- Implement more views - some lack of designs (error view, 404, no restaurants view)
- PWA - add manifest.json for mobile etc.
- i11n
- Visual regression testing
- Add some addons to storybook
- Add some plugins to webpack for compression
- Consider changing apollo to https://github.com/FormidableLabs/urql - it's smaller
- Consider removing react-spring and create animation from scratch
- Add plop
- Polyfills for older browsers if needed
- Analyze bundle size and make it smaller
- Showing images with proper resolution depending on screen size (`srcset`) + images compression
- Configure CORS, CSP, HTTPS and other headers
- CDN

## App structure
```
.storybook - storybook config
dist - application files ready to be deployed
src - core code of application
  - api
    - queries - all GraphQL queries, each file separated by feature
    - client - configuration of GraphQL client
  - assets - icons, images
  - screens - every screen in app is separate folder here
    - RestaurantDetails - view of restaurant details
      - components - specific components for this view, each in separated folder
    - Restaurants - view of restaurants
      - components - specific components for this view, each in separated folder
  - shared - folder with shared stuff, such as components and hooks
    - components
    - hooks
  - styles - global styles/mixins
  - types - global types for entities
  App.tsx - core component of app
  index.tsx - connecting with DOM
storybook-static - storybook files ready to be deployed
test - config files for tests, only fileMock.js is inside at the moment
typings - global typings
.env.dist - environment variables, pattern for creating .env file
.eslintrc.js - config for eslint
.gitignore
.stylelintrc - stylelint config
index.html - base for creating index.html inside /dist folder
jest.config.js - config for tests
package.json
tsconfig.json
webpack.dev.config.js - webpack configuration for development
webpack.prod.config.js - webpack configuration for production
```

## Good to know
- There is a mismatch - first sentence in readme says "You are only required to complete the desktop views, unless otherwise instructed.", when later we have: "Also create mobile version included in Figma comp."
- Figma do not show `font-weight` in styles, we need to click `Table` instead of  `Code` to read proper ones
- I couldn't read buttons paddings on figma
- Yelp API seems to be not working as expected, when we send `is_closed` as true, it still returns restaurants that are "open now"

PS. Any feedback regarding code quality + what You would change will be appreciated
