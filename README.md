# A coding challenge

![Node.js CI](https://github.com/franleplant/frontend-test/workflows/Node.js%20CI/badge.svg)

A rather simple application built with `next.js`, `typescript`, `react`, `emotion`, `graphql`, `prettier`
among others that showcases cool concepts and structures in modern app development.

## Highlights

- use `next.js` and deploy it to `vercel` in very simple steps
- use `typescript` effectively and efficiently by letting `graphql-codegen` to generate ts types out of the gql schema
- use `emotion` for styles and theming and sharing variables
- everything is automatically formatted by `prettier`
- use `graphql` and `apollo` for effective and efficient data fetching
- use `react-testing-library` for good unit testing of react components
- use `jest` as a amazing testing framework with good support for `mocks` out of the box
- use `storybook` as a component explorer / development environment
- all components are created and styled from scratch (which takes unsurprisingly a lot of time)
- use css `grid layout` for responsive grid views
- use `React Portals` to create a very simple but powerful implementation of a `Tooltip` see [src/components/Tooltip](./src/components/Tooltip)
- good overall project structure that I have used to scale up to a million lines of code
- all the data accessing is abstracted in the `dal` layer and relies heavily on the gql codegen for types, queries and hooks
- cool use of gql `Fragments` in order to be able to reference them as Typescript types in the rest of the app
- use of `css` variables as a efficient way of passing dynamic runtime props to emotion styled components
- `CI` setup via github actions
- `CD` setup via vercel (mostly automagically)

## Run it

```bash
# install dependencies
yarn

# setup your local env variables
# Ask your team mates for the right ones
cp .env .env.local

# Run dev mode
yarn dev

# Run storybook
yarn storybook


# Fetch the grapqhl schema
# (it is not something you need to do to often)
yarn build:glq-schema

# Build typescript types out of the gql schema
yarn build:glq-codegen

# do both
yarn build:glq
```

## TODOs

- improve Apollo isomorphic features to allow certain data to be fetched in the sever
- improve A11y support via eslint analyzers (tried a few but were confused by emotion)
- add more unit tests
- add user level testing? react testing library is pretty good and high level though
