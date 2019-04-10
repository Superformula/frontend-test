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

### Yelp API

You can ask us and we will provide you a Yelp API Key to use for your PR.

> NOTE: Yelp's API does not allow CORS. To get around this, you will need to setup a local proxy with CORS support and 
proxy your requets to Yelp's endpoints.

### Page Structure

```
Main
  - Index navigation
    - Open now (client side filter)
    - Price (client side filter)
    - Categories/Cuisines (server side search filter)
  - Section
    - Restaurant item
      - Image (use first item in `photos`)
      - Cuisine / Categories (use first item in `categories`)
      - Rating
      - Price range
      - Open / Closed
      - Restaurant name
      - Learn more (open modal to show more details)
Detail View
  - Restaurant Name & Rating
  - Map (optional, if time allows)
  - Section
    - Review item
      - Image
      - Name
      - Rating
      - Text
```

### Functionality

- The filter navigation needs to be able to perform real time filtering on both client side data, as well as server side
 queries.
- Yelp's `/businesses/search` endpoint requires a `location`, please use `Las Vegas`
- `Categories` can be pre-filled from the 
[Categories endpoint](https://www.yelp.com/developers/documentation/v3/all_categories)
- The items should always show 4-6 items 
per row depending on viewport size. Use your own judgement for when to change 
per breakpoints.
- Please see the [Yelp documentation](https://www.yelp.com/developers/documentation/v3) for more details.

### Tech stack

- JS oriented
  - Use **React**.
  - _Do not_ use any React boilerplate, such as Create React App
- Feel free to use a preprocessor like SASS/SCSS/Less but _do not_ use any CSS frameworks or libraries.

### Bonus

- Also create mobile version included in Sketch comp.
- Write clear **documentation** on how the app was designed and how to run the code.
- Provide proper unit tests.
- Provide components in [Storybook](https://storybook.js.org) with tests.
- Use Yelp's [Graph QL](https://www.yelp.com/developers/graphql/guides/intro) endpoint
- Write concise and clear commit messages.
- Provide an online demo of the application.
- Include subtle animations to focus attention
- Describe optimization opportunities when you conclude

## What We Care About

Use any libraries that you would normally use if this were a real production App. Please note: we're interested in your 
code & the way you solve the problem, not how well you can use a particular library or feature.

_We're interested in your method and how you approach the problem just as much as we're interested in the end result._

Here's what you should strive for:

- Good use of current HTML, CSS, and JavaScript & performance best practices.
- Solid testing approach.
- Extensible code.

## Q&A

> Where should I send back the result when I'm done?

Fork this repo and send us a pull request when you think you are done. There is no deadline for this task unless 
otherwise noted to you directly.

> What if I have a question?

Just create a new issue in this repo and we will respond and get back to you quickly.
