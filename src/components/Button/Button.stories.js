import React from "react";

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import notes from './Button.md';

import Button from "./Button";

storiesOf('Button', module)
.addDecorator(withKnobs)
.add('A Button', () => 
    <Button inverted={boolean('inverted', false)}>Learn More</Button>,
    {notes: {notes} }
);
