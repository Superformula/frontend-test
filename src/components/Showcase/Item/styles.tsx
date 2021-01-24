import styled, { css } from 'styled-components'
import { rem } from '@utils/tools'

export const Tag = styled.li`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 ${rem(250)};
  margin: ${rem(40)} ${rem(16)};
  overflow: hidden;
`

export const Mask = styled.span`
  align-items: center;
  background-color: ${props => props.theme.colors.offwhite};
  cursor: pointer;
  display: inline-flex;
  flex: 0 0 auto;
  height: ${rem(228)};
  justify-content: center;
  margin: 0 0 ${rem(16)};
  max-width: 100%;
  width: 100%;
  overflow: hidden;
`

export const Description = styled.div`
  flex: 1 1 auto;
`

export const Image = styled.img`
  object-fit: cover;
  border: 0 none;
  display: block;
  height: ${rem(228)};
  margin: 0;
  width: 100%;
`

export const Name = styled.h3`
  color: ${props => props.theme.colors.black};
  font-size: ${rem(20)};
  font-weight: 300;
  line-height: ${rem(28)};
  letter-spacing: ${rem(1)};
  display: block;
  margin: 0 0 ${rem(8)};
`

export const Info = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${rem(16)};
`

export const Small = styled.span`
  color: ${props => props.theme.colors.offgray};
  font-size: ${rem(12)};
  font-weight: 300;
  line-height: ${rem(16)};
  letter-spacing: ${rem(0.5)};
  text-transform: uppercase;
`

export const More = styled.span`
  align-items: center;
  background-color: ${props => props.theme.colors.blue};
  border-radius: ${rem(2)};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  display: inline-flex;
  font-size: ${rem(14)};
  font-weight: 300;
  height: ${rem(48)};
  justify-content: center;
  letter-spacing: ${rem(1)};
  line-height: ${rem(16)};
  flex: 0 0 auto;
  text-align: center;
  text-transform: uppercase;
  transition: ${props => props.theme.transition};
  width: 100%;

  &:hover {
    background-color: ${props => props.theme.colors.hoverBlue};
  }
`