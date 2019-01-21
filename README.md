# Superformula Front-end Developer Coding Test

## Requirements
In order to run this project you'll need to use **node 8.10** or higher. I recommend managing your node version via [NVM](https://github.com/creationix/nvm).

## Quick start
1. Clone this repo using `git clone https://github.com/ryanleafey/frontend-test/tree/rleafey-test`
1. Run `npm install` to install dependencies.
1. Run `npm start` to see the app at http://localhost:8080/.
1. Run `npm run storybook` to see the Storybook app at http://localhost:6006/.

## Table of Contents
- [Requirements](#requirements)
- [Quick start](#quick-start)
- [Available scripts](#available-scripts)
- [App architecture](#app-architecture)
- [What's left?](#what's-left)
- [Demo](#demo)

## Available scripts

In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser. The page will reload if you make edits.<br>

#### `npm run test`

Launches the test runner in the interactive watch mode.<br>

#### `npm run build`

Builds the app for production to the `dist` folder.<br>

#### `npm run lint`
Lints the JS and SCSS files

Additional linting scripts are available:

````
npm run lint:fix // Fix linting errors across JavaScript and Sass files
npm run storybook // Run Storybook at http://localhost:6006/.
npm run build-storybook // Build storybook assets
````

## App architecture
The app uses an action creator to fetch data from Yelp's API and store it the Redux store.
A simple proxy was built and hosted on [glitch](https://glitch.com/edit/#!/colorful-halibut?path=server.js) to work around CORS.

Redux was set up using [redux-actions](https://github.com/redux-utilities/redux-actions) and is organized using the [Ducks proposal](https://github.com/erikras/ducks-modular-redux) which aims to consolidate Redux's code spraw.
`App.jsx` is connected to the store and passes props down to its child components. An optimization here could be to use a provider component with render props or the context API to pass these props
as far down the stack as necessary to avoid prop drilling. The load more button requests more data and the restaurants reducer merges it into the state. 

Since a requirement was to not use a CSS framework, a quick attempt was made to assemble a design system.
The base of the design system is in `./theme/theme.js` which includes colors, font sizes, spacing, and button variations.
You can imagine how this could be extended and made dynamic by populating theme values via an API call or config on the window
object before loading app data. The theme props are hooked into styled components throughout the project via a `ThemeProvider` so we can easily change the look and feel of the app.

The tests included in this project are simply here to show that I care about testing and to indicate that we should be adding them wherever possible.
There is plenty of room to expand on these tests and to add more test coverage to the remaining components, Redux functions, etc.

## What's left?
### There's a lot left to do...
- Finish extending fetch/reducer functionality to support serverside queries
- Write and hook up front-end filters for price and open_now
- Hook up 'Clear Filters' button
- Moar tests
- Webpack optimizations for code splitting and tree shaking
- Mobile/responsive styles
- Error handling
- Add react router
    - Pull page title from route prop into hero mini component
- Build details page
    - Add route
    - map component
    - reviews component
    - hook up learn more link
- Localization
    - Add react-intl
    - update fetch to pass locale to Yelp
- Harden/document <Griditem/> usage
- End-toEnd tests
- CI/CD pipeline 

A note on arrow functions in JSX:
These are a performance concern and under normal circumstances I would not use them in JSX in order to bind `this`. In the interest of time I left them in place so I could get farther with the exercise. 

## Demo
[App Demo](http://restaurant-listing.s3-website-us-east-1.amazonaws.com/) | [Storybook Demo](http://restaurant-listing.s3-website-us-east-1.amazonaws.com/storybook-static)

<img src="listing.gif"/>
