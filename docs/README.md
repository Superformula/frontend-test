# Solution Notes

Component catalog: [https://frontend-test-storybook.netlify.app/](https://frontend-test-storybook.netlify.app/)

App demo: [https://frontend-test-sup.netlify.app/](https://frontend-test-sup.netlify.app/index.html)


## Component driven Approach.

The test was done in a "component-driven" way. First, I created all UI components and tested them in Storybook. When the presentation components were mostly ready I proceeded to compose the pages using them as building blocks.

The components catalog can be seen [here](https://frontend-test-storybook.netlify.app/)

## Deployment

Demo URL: [https://frontend-test-sup.netlify.app/](https://frontend-test-sup.netlify.app/index.html)

To have automatic deployment a Netlify site was connected to the Github repository. To overcome the CORSS limitation, Netlify provides proxy redirection rules (setup in the netlify.toml file)

## Component tests

Besides Storybook I setup react-testing-library and added a sample test for the filter component that emulates user interaction and checks the DOM against expected values. 

## Styles

Because of the CSS library restriction I used normal SASS in a modular way (Each component as its companion .scss file). 

## State management

For this excercise, state was handled with the React useState hook. With a more complex state I would have used something like Redux or MobX.

## Local testing

When testing locally I used a local proxy (https://www.npmjs.com/package/local-cors-proxy). The api checks the NODE_ENV variable and uses the local url when in development mode.

# Pending tasks

A list of things that were not included due to lack of time:

- Modify the dropdown component to allow multi-select.
- More cross-browser compatibility (Only tested on Chrome and Safari)
- Use of CSS base variables for values instead of hardcoded ones.
- A Map component (The skeleton is ready but didn't include any 3rd party map component)
- Add Aria roles and other accessibility improvements.
- Responsiveness: Even though the grid adjusts correctly, there are other elements that need some adjustments to behave well on mobile.

