# Superformula Test - Julian Coy

Thanks for taking the time to review my project.  I enjoyed writing it and I hope you enjoy the final product.  I
made a few enhancements and variations to the UX.  I will describe them in detail later on.  For now...

## Quick Start

### Requirements

 - [node 8+](https://nodejs.org/en/download/)
 - npm 6+ (this should come with node)
 
 I will be running commands using yarn (1.5.1).  Feel free to use npm instead...

### How to run the application

First clone the repo and install the dependencies.  This can only be done once you have node/npm installed.

```
$ yarn install
```

Once you have the dependencies installed, you can run the application locally.  The application is served via webpack's
devServer and can easily be started with the following command:

```
$ yarn start
```

This will spin up a proxied development server at port 3000.  Webpack should automatically open a browser for you, but 
if it doesn't, you can navigate to https://localhost:3000/ or https://0.0.0.0:3000/.  If for some reason, this port is
already bound (or you need to change the host setting), you can easily modify the start command to specify your
desired configuration.  Like so...

```
yarn start --host localhost --port 1234
``` 

Webpack will build, bundle, serve, and proxy this application for you!  If you use `0.0.0.0` as your host, the app will
be available on your local network and you can view the application on a mobile device.  If you don't want to/can't do 
that, chrome's dev tools offer the ability to emulate native devices.  See the screenshot below as an example.

![Chrome Emulator](docs/chrome-emulator.png)
![Chrome Emulator](docs/chrome-emulator.png)

## Architecture

Technologies used:

 - [Redux](https://redux.js.org/) / [Redux-Saga](https://redux-saga.js.org/)
 - [Apollo](https://www.apollographql.com/docs/react/) / [GraphQL](https://graphql.org/)
 - [Jest](https://jestjs.io/) / [Storybook](https://storybook.js.org/)
 - [Babel](https://babeljs.io/) / [Webpack](https://webpack.js.org/) / [Sass/SCSS](https://sass-lang.com/)

### Why GraphQL?

The following are the main reasons for choosing to use the GraphQL API:

- Related information can be gathered in a single request
- Utilizes powerful caching (on the server and client)<sup>†</sup>
- Local data is much easier to store from the request and you can easily normalize it

<sup>†</sup>
<sup><sub>
Because of this, I made the filtering server based.  There is no client filtering in the application.  Where possible, 
we will skip the query and use redux.
</sub></sup>

### Why Redux and What is Redux-Saga?

For any application that can benefit from storing complex data locally, redux is a phenomenal solution.  Since we are 
storing intricately related data on the client, it was an easy choice due to my familiarity with and trust in the
ecosystem.

Redux-Saga is a different beast, but one I adore.  If you are familiar with redux, then you already know that managing 
actions can be somewhat complicated.  There are many solutions to this problem, including: Redux-Thunk, Observable, etc.
These are wonderful solutions, but they (in my opinion) lead to more complex and fragile logic.  They are also much 
harder to test, since dispatching actions to the store can be a complicated process at best.

Redux-Saga removes a lot of that complication by following a simple rule: only dispatch simple objects to the store and
don't use callbacks.  Cause that's how you end up crazy...ever seen a triple curried thunk?  If you don't believe me,
check out some of the [sagas I wrote here](src/store/sagas/index.js).  They're super simple.

I went ahead and started up a small test suite that would show how simple and powerful testing your sagas can be.  Due 
to time limitations, I was only able to write a few tests.  But I think they show the simplicity and power of this
design decision.

## Caveats / Changes

While building the application, I made a few UX tweaks where I thought they would be beneficial.  I also decided to do 
some minor deviations from the requirements in regards to filters (no client filters), but I don't think that will be a
problem.  Here are (in no particular order) the deviations/alterations I made along the way:

- Client-side filtering is not a thing
    - apollo/graphql cache is favorable
    - we don't have to worry about stale data
    - why not?
    - pagination + small payloads = better data UX
- Filters are queued on small mobile devices while being automatically applied on larger devices
- For some reason the Yelp GraphQL API behaved oddly<sup>††</sup>...these deviations were the result:
    - Only one image was provided per business, so the site was slightly modified to work with that parameter
    - Only three reviews would ever some back
    - These are all solvable with pagination, but I decided to leave that for another time (the sagas/reducers were 
    stubbed out)
    
<sup>††</sup>
<sup><sub>
I'm assuming this a limitation of the API key I used...
</sub></sup>

## Looking Forward

### Testing

I made the rough outlines of a test suite, but it is far from complete.  You can view components in Storybook, but the 
simpler components should be thoroughly tested with snapshots and helper tools such as 
[Enzyme](https://airbnb.io/enzyme/).  The sagas are also very important to test, as they house the heart of the 
application's logic.  I was able to get off to a good start on those, but clearly they would need a little more 
coverage.

### Data Normalization

If we ever wanted to store large amounts of information and interact with that date, it would be prudent to use a 
normalization scheme.  Since GraphQL by nature sends denormalized data, it is possible to request and store the same 
information multiple times in your redux store.  Apart from keeping the store lean, normalization allows us to create
database-like queries to have powerful control over our data in the client domain.  Libraries like 
[normalizr](https://github.com/paularmstrong/normalizr) and [reselect](https://github.com/reduxjs/reselect) are AWESOME 
for this.

### Pagination

Pagination is an easy win and provides a necessary part of the experience.  It was scrapped to focus on other features 
that would be more pertinent to gauging my abilities.

## Demo

### Mobile

![Mobile Demo](docs/mobile-demo.gif)

### Desktop

This demo also shows how the caching is smart and will store recent queries, so you can save a few requests, while still
being responsive to user interaction.

#### Filtering

![Desktop Filtering Grid](docs/desktop-filtering-grid.gif)

#### Navigation to detail page

![Desktop Navigate to Detail](docs/desktop-nav-detail.gif)
