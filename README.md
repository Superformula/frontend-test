# Resto Explorer

This repo contains the code for deploying a simple application to search for restaurants in the Las Vegas area. You can access a live version of this application here: https://resto-explorer.vercel.app

## Local Development

### Requirements

This project was built using NodeJS 12.14.1 and npm 6.13.4, be sure to run compatible versions.

To run the project you will need a set of API keys:

- Yelp API key: this key is used to fetch data from the Yelp GraphQl API
- Google Map Api key: this key is used to render the maps
- Sentry DSN: this keys is used to track statistics and errors

### Set up

First, start by cloning the repo:

```bash
git clone https://github.com/surbina/resto-explorer.git
```

Then install the dependencies:

```bash
npm i
```

Once that's ready, you can run the project with the following command:

```bash
YELP_API_KEY=<YOUR API KEY> GOOGLE_MAPS_API_KEY=<YOUR API KEY> SENTRY_DSN=<YOUR API KEY> npm run start
```

### Running checks

The project includes a series of automatic checks to guarantee the quality of the project. You can manually run these checks following the instructions below.

Lint:

```bash
npm run lint
```

Type Check:

```bash
npm run type-check
```

Unit Tests

```bash
npm run test:unit
```

Integration Tests

```bash
# In order to run the integration tests we need the application to be running
npm run start
npm run test:integration
```

### Storybook

The project also includes a Storybook gallery with stories for some of the components in the project.

Use the command below to run the Storybook server locally:

```bash
npm run storybook
```

## Libraries/Dependencies

The project uses the following dependencies:

- ReactJS@17: React is the backbone of the project, used to create the components that define how the view is rendered.
- Styled-components@5: In order to decorate the html rendered by react we are using styled-component.
- Apollo Client@3.3.6: The GraphQl client provided by the Apollo team provides an excellent way of fetching data, caching and feeding it to React.
- React Router@5.2.0: React Router is the de facto solution when it comes to conditional rendering based on the url of the browser.
- React Popper@2.2.4: React Popper provides a positioning engine used for the overlays and tooltips.
- Google Maps React@2.1.9: Awesome integration with Google Maps, it makes adding maps a trivial task.
- date-fns@2.16.1: This library provides a set of functions to handle dates in an easy way.
- Sentry@5.29.2: We are using Sentry to keep track of errors and site statistics.

## Application Design

The project was developed following the (simplified) dir structure found below.

```
resto-explorer/
├─ api/
├─ stories/
├─ cypress/
├─ src/
│ ├─ design-system/
│ ├─ pages/
│ ├─ App.tsx
│ ├─ index.ts
├─ package.json
```

The `api` folder is where all the serverless functions needed by our application are located. Currently there is only one of such functions used to proxy requests to the Yelp API.

In the `stories` folder we can find all the Storybook's stories. Due to time restrictions we only included a minimum set of stories to showcase how the tool can be used for such purposes.

The `cypress` folder is where most of the files used for the integration tests are located. In particular, the directory `cypress/integration` is where all the tests suites are located. Again, due to time constraint only the happy path was tested like this.

The `src` is where the core of the project resides. The `design-system` folder holds a number of components that are generic enough that can be extracted out of this application and used elsewhere. This folder also includes a Theme that defines shared values such as colors, helpers, etc.

In the `pages` folder we can find a folder for each screen in our application. These folders are some kind of black box that exposes only a single component.

Finally, the `App.tsx` component is responsible for defining the routing for the application.

## Continuous Integration/Continuous Deployment

This repository includes a set of [GitHub Action](https://github.com/features/actions) used to automatically run checks when pushing to the main branch or opening a PR to the main branch.

Additionally, when merging to the main branch the application will be automatically deployed using [Vercel](https://vercel.com/).

## Changes to the original design/specification

The project includes some deviations from the original design.

- Replaced radio with checkbox for the `Open now` toggle: The original designs include a toggle that resembled a radio button. A radio button usually depicts that there are multiple choices from which the user can pick. Moreover, a radio button usually cannot be "unselected" (the user needs to select a different option). This led me to think that using a checkbox was probably a better call.

- All the filtering is performed on the server side: This was risky, since the instructions clearly state that `Open now` and `Price` should perform a client side validation. I decided to make a server side search in order to avoid potential bugs. E.g.: if a user has loaded 20 restaurants that all happen to be open and then decides to toggle the filter to only show closed restaurants, then they might be tricked into thinking that there are no closed restaurants; on top of that if the click the "Load more" button they may see no changes because the next 10 or 20 restaurants might also be open. This problem arises from mixing filtering and pagination and usually forces us to push the filtering to the BE.

## Optimization Opportunities

Although the application is small there is still space for improvement and optimizations.

- Use SSR or bundle split (or both): right now the build step generates one JS bundle that is loaded each time we access the application. This obviously impacts the performance, especially the loading times. This could be improved by either splitting the bundle into multiple chunks or using server side rendering. Personally, I think the best solution would be to use NextJS which comes bakes in with SSR.

- Improve the review pagination: the Detail page includes a list of reviews which are paginated (although the API only returns three items 🤔). However, each time the user clicks the "Load more" button the query also returns the detail data. It's possible to configure the `useQuery` hook with a different query when calling the `fetchMore` callback, unfortunately I didn't have enough to pull that through.

- Upload source maps to Sentry: uploading source maps to Sentry could be really helpful when debugging the application in the production environment.

- Add mobile support: the specs included some mocks for mobile. Unfortunately, I didn't have enough time to do this.
