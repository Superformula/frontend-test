import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
 
addDecorator(StoryRouter());

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
