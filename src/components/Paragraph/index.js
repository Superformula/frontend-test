import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS } from 'consts/colors';
import { MEDIA_MIN } from 'utils/mediaQuery';

export const Paragraph = styled.p`
  color: ${COLORS.GRAY_700};
  max-width: 792px;
  font-size: 16px;
  line-height: 24px;

  ${MEDIA_MIN.MD`
    font-size: 22px;
    letter-spacing: .92px;
    font-weight: 300;
    line-height: 32px;
  `}

  ${({ bottomSpaced }) => bottomSpaced && BOTTOM_SPACED}
  ${({ extraWeight }) => extraWeight && EXTRA_WEIGHT}
`;

const BOTTOM_SPACED = css`
  margin-bottom: 42px;

  ${MEDIA_MIN.MD`
    margin-bottom: 36px; 
  `}
`;

const EXTRA_WEIGHT = css`
  letter-spacing: 0.8px;
  line-height: 22px;
  margin-top: 24px;

  ${MEDIA_MIN.MD`
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 1px;
    margin-top: 20px;
  `}
`;

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  bottomSpaced: PropTypes.bool,
  extraWeight: PropTypes.bool,
};
