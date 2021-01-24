import styled from 'styled-components'
import { Center } from '@components/Layout/utils' 
import { rem } from '@utils/tools'

export const Tag = styled.section`
  border-bottom: ${rem(1)} solid ${props => props.theme.colors.lightgray};
  padding: ${rem(48)} 0;
`

export const Env = styled(Center)`
  align-items: stretch;
  display: flex;
`

export const Map = styled.div`
  flex: 1 1 50%;
  height: auto;
  margin-right: ${rem(32)};
`

export const List = styled.ul`
  display: flex;
  flex: 1 1 50%;
  margin: 0;
  padding: 0;
  overflow: auto;
`

export const Item = styled.li`
  flex: 1 1 auto;
  list-style: none;
  max-height: ${rem(228)};
  margin: 0 ${rem(32)} 0 0;
  padding: 0;

  &:last-child {
    margin-right: 0;
  }
`

export const Address = styled.address`
  color: ${props => props.theme.colors.black};
  display: block;
  font-size: ${rem(20)};
  font-style: normal;
  font-weight: 300;
  letter-spacing: ${rem(1)};
  line-height: ${rem(28)};
  margin-top: ${rem(15)};
`

export const Image = styled.img`
  display: block;
  max-height: 100%;
  max-width: 100%;
  width: auto;
`