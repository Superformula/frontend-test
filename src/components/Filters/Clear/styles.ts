import styled, { css } from 'styled-components'
import { rem } from '@utils/tools'

interface ClearProps {
  isActive: boolean;
};

export const Tag = styled.button<ClearProps>`
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  border: ${rem(1)} solid ${props => props.theme.colors.lightgray};
  border-radius: 0;
  color: ${props => props.theme.colors.darkwhite};
  cursor: normal;
  display: inline-flex;
  letter-spacing: ${rem(0.8571)};
  font-size: ${rem(12)};
  font-weight: 400;
  line-height: ${rem(16)};
  justify-content: center;
  height: ${rem(38)};
  padding: ${rem(5)} ${rem(15)};
  outline: none;
  transition: ${props => props.theme.transition};
  text-transform: uppercase;
  user-select: none;
  pointer-events: none;
  width: ${rem(151)};

  ${props => props.isActive && css`
    border-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.blue};
    cursor: pointer;
    pointer-events: all;

    &:hover {
      background-color: ${props => props.theme.colors.blue};
      color: white;
    }

    &:active,
    &:focus {
      border: ${rem(1)} solid ${props => props.theme.colors.blue};
      border-radius: 0;
    }
  `}
`