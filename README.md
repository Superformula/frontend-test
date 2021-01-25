# Superformula Front-end Developer Coding Test

This project is a coding test created by Superformula developed by Frederico Soares.

## Project Requirements
- [Node.js](https://nodejs.org/en/)

## Environment Variables
Brief description of each variable listed in the file:

- `YELP_API_BASEURL`: Yelp's graphql endpoint
- `YELP_API_CLIENT_ID`: Yelp's client id (not required for this project)
- `YELP_API_KEY`: Yelp's API key.
- `WEBSITE_API_BASEURL`: Website's proxy URL.
- `DEFAULT_LOCATION`: Default restaurants location.
- `GOOGLEMAPS_API_KEY`: Google Maps API key.


## Run the Application (Development Mode)
This application uses Next.js to handle routes, styling SSR, and proxy configuration. 
Follow the instructions below to run it locally.

<details><summary><b>Show instructions</b></summary>

1. Install required packages as described in `package.json`:

    ```shell script
    $ yarn
    ```

2. Run application in development mode:

    ```shell script
    $ yarn dev
    ```
   
3. Go to http://localhost:3000.

</details>


## Run the Application (Test Mode)
Cypress is the end-to-end testing tool used in this project. It simulates real user interactions and returns precious test feedback.

Run Cypress in dev mode:
  ```shell script
  $ yarn cypress:open
  ```

Run Cypress in test mode:
  ```shell script
  $ yarn test
  ```

**PS:** By running Cypress in the test mode, it will provide you videos and screenshots of the whole test flow.

## Build the Application (Production Mode)
To create an optimized and bundled version of the project, follow the instructions below.

<details><summary><b>Show instructions</b></summary>

1. Install the required packages as described in `package.json`:

    ```shell script
    $ yarn
    ```

2. Build the application in production mode:

    ```shell script
    $ yarn build
    ```

2. Run build files locally

    ```shell script
    $ yarn start
    ```
</details>

## Components Library (Storybook Mode)
This project contains a components library created with Storybook to test components with mock data.
To run Storybook, follow the instructions below:

1. Run storybook script:

    ```shell script
    $ yarn storybook
    ```
2. A new window should open with your IP address accessed by port 6006. There you can test all components and change their status and props.

## Technology decisions

### Typescript
Typescript helps us creating a strongly typed code, robust code base, reduces static type erroring, and improves scalability.

### Babel
A must nowadays, it compiles ES6+ in ES5 or lowers compatible specs to ensure browser compatibility. It also has some great plugins for SSR and alias.

### GraphQL
Query language to fetch only the necessary data from an API. Super helpful during this project since Yelps API returns tons of unused data.
### Apollo Client
Apollo Client handles GraphQL requests. It provides a straightforward interface to work with.

### TSLint
TSLint is used to improve code quality.

### Axios
Axios is used to handle server-side requests in this project since Apollo HOOKS are not available in such instances.

### Styled-Components
A CSS-in-JS approach, chose over Emotion by personal preference and project requirements matter; both are great.

### Google Maps React
A simple google maps component to render the map inside the Restaurants page.

## Accomplishments
- Application deployed and optimized on Vercel.
- All desktop designs.
- Multiple filtering feature (categories on the server-side, price, and "Open Now" on the client-side).
- Include Maps API on the Restaurant page.
- End-to-end testing with all functionalities covered.
- Commit messages convention.
- Loading, hover, and click animations.

## Future Improvements
- Add Husky to handle CLI commands to run tests.
- Add Jest to handle some unit testing.
- Change the mobile experience to match the designed version.
- Add all possible requests to SSR.
- Load more restaurants by scroll.
