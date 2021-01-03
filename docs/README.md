# Stack

- Parcel for bundling the web app
- react-testing-library and jest for tests
- Storybook for quick component tests
- Netlify for deploying

# Workflow


## Plan

- Setup stack and deployment with Netlify
- Setup Testing libraries


## Setup stack

As a first step I focused on setting up the tools, libraries and deployment details before moving to implementation. 

This includes initializing the project, setting up Parcerl and Storybook, and testing that it works on Netlify for automatic deploys.

Interesting points:

- A custom build step was needed to replace the API KEY env var in the netlify setup as they don't support using ENV VARS from the redirection rules.


