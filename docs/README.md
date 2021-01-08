# Stack

- Parcel for bundling the web app
- react-testing-library and jest for tests
- Storybook for quick component tests
- Netlify for deploying

# Workflow


## Strategy

- Setup stack and deployment with Netlify
- Setup Testing libraries
- Download sample JSON responses from Yelp's Api.
- Focus on the UI components, use Storybook stories.


## Setup stack

As a first step I focused on setting up the tools, libraries and deployment details before moving to implementation. 

This includes initializing the project, setting up Parcerl and Storybook, and testing that it works on Netlify for automatic deploys.

Key points:

- Using Netlify as proxy for CORS requests

Netlify supports redirection of specific paths. This is useful to overcome the CORS limitation with the Yelp Api. The redirection rules can be found in the netlify.toml file. The Api key was added as environment variable in the Netlify deploy settings.


- Store sample JSON responses for quick local iterations

As a testing utility, sample JSON responses were saved into the tests/responses folder.


