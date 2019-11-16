import { configure } from '@storybook/react';
import '../src/styles/core.scss';

configure(require.context('../src', true, /\.stories\.(tsx|js)$/), module);
