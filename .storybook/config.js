import {configure} from '@storybook/react';
import '../src/css/main.scss';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    requireAll(require.context('../stories', true, /\.(story|stories)\.jsx?$/));
}

configure(loadStories, module);
