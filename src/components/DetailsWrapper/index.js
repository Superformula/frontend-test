import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const SpaceBetween = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({ spaced }) => spaced && SPACED}
`;

const SPACED = css`
  margin-top: 24px;
`;

SpaceBetween.displayName = 'SpaceBetween';

SpaceBetween.propTypes = {
  spaced: PropTypes.spaced,
};
