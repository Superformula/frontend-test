import styled from 'styled-components'
import { Center } from '@components/Layout/utils'
import { rem } from '@utils/tools'

export const Tag = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-bottom: ${rem(1)} solid ${props => props.theme.colors.lightgray};
  border-top: ${rem(1)} solid ${props => props.theme.colors.lightgray};
  padding: ${rem(11)} 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
`

export const Env = styled(Center)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const List = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`

export const Title = styled.span`
  color: ${props => props.theme.colors.darkgray};
  flex: 0 0 auto;
  font-size: ${rem(16)};
  font-weight: 300;
  line-height: ${rem(24)};
  letter-spacing: ${rem(1)};
  margin-right: ${rem(24)};
`