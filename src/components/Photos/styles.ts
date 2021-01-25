import styled from 'styled-components'
import { Center } from '@components/Layout/utils' 
import { rem } from '@utils/tools'

export const Tag = styled.section`
  border-bottom: ${rem(1)} solid ${props => props.theme.colors.lightgray};
  padding: ${rem(32)} 0;
  overflow: hidden;
`

export const Env = styled(Center)`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 ${rem(-16)};
  width: calc(100% + ${rem(32)});

  @media(min-width: ${props => props.theme.media.lg}) {
    flex-wrap: nowrap;
  }
`

export const Map = styled.div`
  flex: 1 1 50%;
  height: auto;
  margin: ${rem(16)};
`

export const List = styled.ul`
  display: flex;
  flex: 1 1 50%;
  margin: ${rem(16)};
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