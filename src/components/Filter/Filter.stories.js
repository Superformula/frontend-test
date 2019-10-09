import React from "react";

import { storiesOf } from '@storybook/react';
import notes from './Filter.md';

import Filter from "./Filter";
import SectionWrapper from '../SectionWrapper/SectionWrapper';

storiesOf('Filter', module).add('A Filter', () => 
  
    <SectionWrapper>
      <Filter />
    </SectionWrapper>
    ,
    {notes: {notes} }
);
