import React from 'react';
import { storiesOf } from '@storybook/react';
import { useState } from '@storybook/addons';

import { Button } from '../Button/Button';

import { AnimateOnAppear } from './AnimateOnAppear';

storiesOf('AnimateOnAppear', module).add('Primary blue', () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <Button variant={Button.variant.WHITE} onClick={() => setVisible(!isVisible)}>
        Toggle
      </Button>
      <AnimateOnAppear isVisible={isVisible}>
        <p>Example of text</p>
        <p>Example of text</p>
      </AnimateOnAppear>
    </>
  );
});
