import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components'

import theme from '../src/theme/theme';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    requireAll(require.context("../", true, /story\.(js|jsx)$/));
}

addDecorator((story) => (
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
));

configure(loadStories, module);