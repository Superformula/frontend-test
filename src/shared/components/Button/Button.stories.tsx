import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';

const clickHandler = () => alert('clicked');

storiesOf('Button', module)
  .add('Primary blue (small)', () => (
    <div style={{ width: 270 }}>
      <Button fullWidth size={Button.size.SMALL} onClick={clickHandler}>
        LEARN MORE
      </Button>
    </div>
  ))
  .add('Primary blue (medium)', () => (
    <div style={{ width: 300 }}>
      <Button fullWidth onClick={clickHandler}>
        LEARN MORE
      </Button>
    </div>
  ))
  .add('White with border (small)', () => (
    <Button size={Button.size.SMALL} variant={Button.variant.WHITE} onClick={clickHandler}>
      Clear all
    </Button>
  ))
  .add('White with border (medium)', () => (
    <Button variant={Button.variant.WHITE} onClick={clickHandler}>
      Clear all
    </Button>
  ))
  .add('White with border (disabled)', () => (
    <Button disabled variant={Button.variant.WHITE} onClick={clickHandler}>
      Clear all
    </Button>
  ));
