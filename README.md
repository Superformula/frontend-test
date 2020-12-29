# Faster Food, The Fake App to Find Real Restaurants

This app is powered by the Yelp API, and it was done as a technical challenge. Without further ado, let's get to the interesting part.

## The Stack

Thanks to the fair bit of freedom on stack choices, I could choose each technology used on this project.

- Typescript
- Next.JS
- Storybook
- SCSS, using CSS modules for scoping
- Cypress, for the unit and integration tests

If this was a big project, I probably would not use SCSS and prefer Styled Components instead, since it fits really well with React/Typescript. But I choose to go the SCSS route, to get a feel about how challenging it would be.

--------------------------

## Architecture

First of all, the metodology I used in this project was Component Driven Development, where we write the components first and then we worry about the business logic. This works really well when coupled with the concepts of Atomic Design, because we can decompose whole pages in small atoms and build from there. Great tools like Storybook bring this all together and made this a solid and scalable combo of technologies.

## Design Choices

One design choice I made that deviated a little from the mockup was regarding to the typography. The font used on the mockup was Helvetica Neue. Since that font is proprietary, and not easily available on Linux and Windows systems, I switched it for Liberation Sans, a royalty-free alternative that still has almost the same look and feel.

## Technology Choices

When I started the project I knew using Redux for this would be overkill. So I set out from the beginning with the Context API in mind. After designing the visual components and thinking about the data flow, I saw that even the Context API would be too much. That would mean over engineering a simple solution that didn't really needed it.

## Next Steps

If this was a production app, I would implement some features/libraries to help the future development, like: localization, Redux/Context API, switch from SCSS to Styled Components, write more extensive tests and set up a pipeline for CI/CD.

--------------------------

## Project Setup

```
yarn install
```

### Start in development mode
```
yarn dev
```

### Build for production
```
yarn build
```

### Start the built code in production mode
```
yarn start
```

### Run Storybook
```
yarn storybook
```

### Build Storybook for production
```
yarn build-storybook
```

### Run unit tests on Cypress in headless mode
```
yarn test:unit
```

### Run e2e tests on Cypress in headless mode
```
yarn test:e2e
```

### Open the Cypress interface
```
yarn test:open
```

--------------------------

## Known Issues

There is one known issue I found, regarding the unit testing. It happens on Windows environments and is related to the node-sass version incompatibility with the internal node version of Cypress. The solution for it would be to ditch node-sass entirely for dart-sass or write a specific webpack configuration dealing with the sass loading issues for Cypress. I don't think a lot of people work with React + SCSS + Cypress (for unit testing, I mean), so this issue is really niche and will probably take a fair bit of time to fix.
