import styled, { css } from 'styled-components'
import { rem } from '@utils/tools'

interface ItemProps {
  isActive: Boolean
}

export const Check = styled.span`
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  border: ${rem(1)} solid ${props => props.theme.colors.darkwhite};
  border-radius: 50%;
  display: flex;
  height: ${rem(16)};
  justify-content: center;
  margin-right: ${rem(8)};
  transition: ${props => props.theme.transition};
  width: ${rem(16)};

  &:before {
    background-color: ${props => props.theme.colors.blue};
    border-radius: 50%;
    content: '';
    height: ${rem(8)};
    transition: all 150ms ease-in-out;
    opacity: 0;
    visibility: hidden;
    width: ${rem(8)};
  }
`

export const Tag = styled.span<ItemProps>`
  align-items: center;
  border-bottom: ${rem(1)} solid ${props => props.theme.colors.darkwhite};
  cursor: pointer;
  display: flex;
  color: ${props => props.theme.colors.blue};
  font-size: ${rem(16)};
  font-weight: 300;
  line-height: ${rem(32)};
  letter-spacing: ${rem(1)};
  margin-right: ${rem(32)};
  position: relative;
  justify-content: center;
  transition: ${props => props.theme.transition};
  user-select: none;

  &:hover {
    border-color: ${props => props.theme.colors.blue};
  }

  ${props => props.isActive && css`
    ${Check}:before {
      opacity: 1;
      visibility: visible;
    }
  `}
`