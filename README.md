# Superformula Front-end Developer Coding Test

To showcase my skills as a frontend developer, here is an example project used to create a webpage similar to the [mockup](./design/mockup.png) provided.

## Usage
The following are required to run this project:

- [Node.js](https://nodejs.org/en/)

## Prequisite

To run the application properly, make sure to set the appropriate environment vairables before proceeding in the `.env` file:

- `API_URL`: Your client-side API endpoint (for Yelp).
- `YELP_API_KEY`: Your Yelp API key.
- `YELP_URL`: The Yelp API endpoint.
- `USE_MOCK_DATA`: Whether you wish to use data from Yelp or bundled JSON.

### Run the Application (Development Mode)
To run this application in development mode, it will need access to http://localhost:8080. With 
`webpack-dev-server`, the application with start in development mode with a server, along with hot
reloading.

<details><summary><b>Show instructions</b></summary>

1. Install the required packages outlined in `package.json`:

    ```shell script
    $ npm install
    ```

2. Run the application in development mode:

    ```shell script
    $ npm run start
    ```
   
3. Go to http://localhost:8080 in your web browser.

</details>

### Build the Application (Production Mode)
With `webpack`, the application with build in production mode.

<details><summary><b>Show instructions</b></summary>

1. Install the required packages outlined in `package.json`:

    ```shell script
    $ npm install
    ```

2. Build the application in production mode:

    ```shell script
    $ npm run build
    ```
   
4. Run the build by opening `dist/index.html` in a web browser.
   
</details>

### Run the Application Tests

#### Unit Tests

This project contains unit tests for the React components. Both snapshot testing and functional 
tests are run to achieve near full coverage.

<details><summary><b>Show instructions</b></summary>

1. Install the required packages outlined in `package.json`:

    ```shell script
    $ npm install
    ```

2. Run the application's unit tests without a coverage report:

    ```shell script
    $ npm run test
    ```
   
   Or run the application's unit tests with a coverage report:
   
   ```shell script
   $ npm run test:coverage
   ```

</details>

#### Code Analysis Tests

The project also contains code analysis tests through linting. 

<details><summary><b>Show instructions</b></summary>

1. Install the required packages outlined in `package.json`:

    ```shell script
    $ npm install
    ```

2. Run `eslint` on the application's source code:

    ```shell script
    $ npm run lint:src
    ```
   
   Run `eslint` with the `--fix` flag to potentially fix linting issues:
   
   ```shell script
   $ npm run lint:src:fix
   ```

</details>
