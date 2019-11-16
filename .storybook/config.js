import { configure, addDecorator} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/styles/core.scss';

configure(require.context('../src', true, /\.stories\.(tsx|js)$/), module);
addDecorator(withInfo); 
