# Superformula Front-end Developer Coding Test Solution

Thanks for taking the time to review my test project.  I enjoyed writing it and I hope you enjoy the final product.  I
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

![Chrome Emulator](chrome-emulator.png)

## Architecture

Technologies used:

 - [Redux](https://redux.js.org/) / [Redux-Saga](https://redux-saga.js.org/)
 - [Apollo](https://www.apollographql.com/docs/react/) / [GraphQL](https://graphql.org/)
 - [Jest](https://jestjs.io/) / [Storybook](https://storybook.js.org/)
 - [Babel](https://babeljs.io/) / [Webpack](https://webpack.js.org/) / [Sass/SCSS](https://sass-lang.com/)

### Why GraphQL?

The following are the main reasons for choosing to use the GraphQL API:

- Related information can be gathered in a single request
- Utilizes powerful caching (on the server and client)
  - Note: Because of this, I made the filtering server based.  There is no client filtering in the application.  Where 
  possible, we will skip the query and use redux.
- Local data is much easier to store from the request (and you can easily normalize this in redux for later use)

### Why Redux and What is Redux-Saga?

For any application that can benefit from storing complex data locally, redux is a phenomenal solution.  Since we are
storing related information on the client, it was an easy choice due to my familiarity and my trust in the ecosystem.

Redux-Saga is a different beast.  If you are familiar with redux, then you already know that managing actions can be
somewhat complicated.  There are many solutions to this problem, including: Redux-Thunk, 
