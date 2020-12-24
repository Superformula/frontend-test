import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { COLORS } from 'consts/colors';

export const Separator = styled.hr`
  border: 0;
  border-top: 1px solid ${COLORS.GRAY_200};

  ${({ spaced }) => spaced && SPACED}
`;

const SPACED = css`
  margin-top: 24px;
  margin-bottom: 24px;
`;

Separator.propTypes = {
  spaced: PropTypes.bool,
};
