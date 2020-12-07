# Superformula Coding Challenge

## Getting Started 🏃

Create an `.env` file and copy the contents of `.env.example`, insert your own Yelp API key

### `npm install && npm run dev`

## Instructions 📚

See [requirements](/.requirements/README.md) and [designs](https://www.figma.com/file/4MqQhKPsnKetTud9tm6kDY/Superformula-FE-test-264388d?node-id=0%3A1)

## Tech Stack 🤖

-   [Typescript](https://www.typescriptlang.org/)
-   [React](https://reactjs.org/)
-   [Next](https://nextjs.org/)
-   [GraphQL](https://graphql.org/)
-   [Apollo](https://www.apollographql.com/docs/react/)
-   [Styled Components](https://styled-components.com/)

## Tooling 🧰

-   [Codegen](https://graphql-code-generator.com/)
-   [CommitLint](https://commitlint.js.org/#/)
-   [ESLint](https://eslint.org/)
-   [Jest](https://jestjs.io/)
-   [Prettier](https://prettier.io/)
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-   [Storybook](https://storybook.js.org/)

## Decisions 💭

I opted to go against the guidelines in one important way: I decided to use NextJS which may fall within the bounds of "_Do not_ use any React boilerplate, such as Create React App". What this means:

-   The project comes with a bunch of out of the box features, optimizations, etc
-   **I won't be showing:** technical skills related to routing, bundler tooling, bundle optimization, or establishing server side rendering (I can speak to/provide examples of these as needed)
-   **I will be showing:** writing clear, concise, testable and transferable code that is not specific to this or any other React template
-   **Why I chose to do this:** I wanted to deliver quickly while focusing on the core "what you should strive for" skills, NextJS provides an extremely easy to establish API which I used to proxy the Yelp API and is readily deployable to a service like Vercel

I opted to use a local Storybook deployment tool (that can be setup as part of a CI/CD pipeline as well) and Github pages simply down to ease of implementation. In its current state, it requires a developer to run the deployment command, but ideally for a long-standing production application this would be automated to be kept up-to-date
