import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import Caret from 'assets/caret.svg';

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;

    background-image: url(${Caret});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    ${({ expanded }) => expanded && EXPANDED};
  }
`;

const EXPANDED = css`
  transform: translateY(-50%) rotate(180deg);
`;

Wrapper.propTypes = {
  expanded: PropTypes.bool,
};
