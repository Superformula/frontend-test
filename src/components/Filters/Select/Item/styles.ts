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
`

export const Tag = styled.li<ItemProps>`
  align-items: center;
  color: ${props => props.theme.colors.darkgray};
  cursor: pointer;
  display: inline-flex;
  font-size: ${rem(16)};
  font-weight: 300;
  letter-spacing: ${rem(0.5)};
  line-height: ${rem(24)};
  list-style: none;
  padding: ${rem(5)} ${rem(16)};
  transition: ${props => props.theme.transition};
  width: 100%;

  &:hover {
    background-color: ${props => props.theme.colors.lightgray};
  }

  ${props => props.isActive && css`
    color: ${props => props.theme.colors.black};

    ${Check} {
      background-color: ${props => props.theme.colors.black};
      border-color: ${props => props.theme.colors.black};
    }
  `}
`

export const Icon = styled.svg`
  height: ${rem(7)};
  width: ${rem(10)};
`