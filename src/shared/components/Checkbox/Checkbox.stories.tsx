import React from 'react';
import { storiesOf } from '@storybook/react';

import { Checkbox } from './Checkbox';

storiesOf('Checkbox', module)
  .addDecorator(storyFn => <div style={{ display: 'flex' }}>{storyFn()}</div>)
  .add('Default', () => <Checkbox name="open" onChange={checked => console.log(checked)} />);
