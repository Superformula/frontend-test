import styled from 'styled-components'
import { Center } from '@components/Layout/utils'
import { rem } from '@utils/tools'

export const Tag = styled.section`
  padding: ${rem(64)} 0 0;
`

export const Env = styled(Center)``

export const Title = styled.h2`
  color: ${props => props.theme.colors.offblack};
  font-size: ${rem(34)};
  font-weight: 300;
  letter-spacing: ${rem(1)};
  line-height: ${rem(40)};
  margin: 0 0 ${rem(3)};
`

export const List = styled.ul`
  align-items: stretch;
  display: flex;
  flex-flow: row wrap;
  margin: 0 ${rem(-16)};
  padding: 0;
  width: calc(100% + ${rem(32)});
`