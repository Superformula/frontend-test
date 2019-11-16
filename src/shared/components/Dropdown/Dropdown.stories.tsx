import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../Button/Button';

import { Dropdown } from './Dropdown';

storiesOf('Dropdown', module).add('Default', () => (
  <Dropdown
    target={isOpened => (
      <Button variant={Button.variant.WHITE} style={{ width: 150 }}>
        {isOpened ? 'close' : 'open'}
      </Button>
    )}
  >
    {() => (
      <div style={{ backgroundColor: 'white', border: '1px solid #cecece', padding: 10 }}>
        Content of popup #1: <br />
        Item 1 <br />
        Item 2
      </div>
    )}
  </Dropdown>
));
