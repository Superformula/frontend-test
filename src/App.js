import React from 'react';
import styled from 'styled-components';
import { Rating } from './components/Rating';

const Paragraph = styled.p`
  color: red;
`;

export const App = () => (
  <Paragraph>
    Superformula app <Rating />
  </Paragraph>
);
