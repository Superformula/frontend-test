import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Star } from './Star';

export const Wrapper = styled.div`
  ${Star} {
    margin-right: 2px;
    &:last-of-type {
      margin-right: 0;
    }
  }

  ${({ $xs }) => $xs && XS}
  ${({ $lg }) => $lg && LG}
`;

const XS = css`
  zoom: 0.8;
`;

const LG = css`
  zoom: 1.2;
`;

Wrapper.displayName = 'Wrapper';

Wrapper.propTypes = {
  $xs: PropTypes.bool,
  $lg: PropTypes.bool,
};
