import styled from 'styled-components'
import { rem } from '@utils/tools'

export const Tag = styled.button`
  background: ${props => props.theme.colors.background};
  border: ${rem(1)} solid ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.blue};
  cursor: pointer;
  display: block;
  font-size: ${rem(14)};
  font-weight: 300;
  letter-spacing: ${rem(1)};
  line-height: ${rem(16)};
  height: ${rem(48)};
  margin: 0 auto ${rem(60)};
  max-width: ${rem(416)};
  outline: none;
  text-transform: uppercase;
  transition: ${props => props.theme.transition};
  width: 100%;

  &:active,
  &:focus {
    border-radius: 0;
  }

  &:hover {
    background-color: ${props => props.theme.colors.blue};
    color: white;
  }
`