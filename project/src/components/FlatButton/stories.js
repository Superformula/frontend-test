import React from 'react';
import { storiesOf } from '@storybook/react';
import FlatButton from "./index"

storiesOf('FlatButton', module)
  .add('without props', () => <FlatButton>flat button</FlatButton>)
  .add('with some props', () => <FlatButton text="uhhhh" />);
