import styled from 'styled-components';
import { Star } from './Star';

export const Wrapper = styled.div`
  ${Star} {
    margin-right: 2px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

Wrapper.displayName = 'Wrapper';
