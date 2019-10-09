import React from "react";

import Label from "../Label/Label";
import { storiesOf } from '@storybook/react';
import notes from './Label.md';

storiesOf('Label', module).add("All Labels ", () => 
  <div style={{ display: "grid" }}>
    <Label> Default Label </Label>
    <Label divider> Label with divider interpunct </Label>
    <Label large> Label with Large Text </Label>
  </div>,
  {notes:{notes}}
);