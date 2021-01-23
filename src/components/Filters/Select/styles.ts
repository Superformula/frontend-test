import styled, { css } from 'styled-components'
import { rem } from '@utils/tools'

interface TagProps {
  isOpen: Boolean,
  minWidth?: number
}

export const Arrow = styled.svg`
  height: ${rem(8)};
  position: absolute;
  right: ${rem(2)};
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  transition: ${props => props.theme.transition};
  width: ${rem(8)};
`

export const Title = styled.span`
  color: ${props => props.theme.colors.blue};
  display: block;
  font-size: ${rem(16)};
  font-weight: 300;
  line-height: ${rem(32)};
  letter-spacing: ${rem(1)};
`

export const List = styled.ul`
  background-color: ${props => props.theme.colors.white};
  border: ${rem(1)} solid ${props => props.theme.colors.darkwhite};
  border-bottom: 0 none;
  box-shadow: 0 ${rem(6)} ${rem(5)} rgba(0, 0, 0, 0.1), inset 0 ${rem(-1)} 0 ${props => props.theme.colors.darkwhite};
  display: block;
  margin: ${rem(-10)} 0 0;
  overflow: hidden;
  padding: ${rem(5)} 0;
  position: absolute;
  left: 0;
  top: 100%;
  opacity: 0;
  visibility: hidden;
  transition: ${props => props.theme.transition};
  z-index: -1;
`

export const Tag = styled.div<TagProps>`
  border-bottom: ${rem(1)} solid ${props => props.theme.colors.darkwhite};
  cursor: pointer;
  margin-right: ${rem(32)};
  min-width: ${props => (props.minWidth) ? rem(props.minWidth) : rem(96)};
  position: relative;
  transition: ${props => props.theme.transition};
  user-select: none;

  &:hover {
    border-color: ${props => props.theme.colors.blue};
  }

  ${props => props.isOpen && css `
    ${Arrow} {
      transform: translateY(-50%) rotate(0);
    }

    ${List} {
      margin: 0;
      opacity: 1;
      visibility: visible;
      z-index: 10;
    }
  `}
`
