import styled from 'styled-components'
import { Center } from '@components/Layout/utils'
import { rem } from '@utils/tools'

export const Tag = styled.header`
  background-color: ${props => props.theme.colors.background};
  border-bottom: ${rem(1)} solid ${props => props.theme.colors.lightgray};
  margin-bottom: ${rem(-1)};
  padding: ${rem(36)} 0;
`

export const Env = styled(Center)``

export const Title = styled.h1`
  color: ${props => props.theme.colors.offblack};
  display: block;
  font-size: ${rem(32)};
  font-weight: 300;
  line-height: ${rem(40)};
  letter-spacing: ${rem(0.964286)};
  margin: 0 0 ${rem(9)};

  @media(min-width: ${props => props.theme.media.md}) {
    font-size: ${rem(54)};
    line-height: ${rem(64)};
    margin: 0 0 ${rem(24)};
  }
`

export const Description = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: ${rem(16)};
  font-weight: 300;
  line-height: ${rem(24)};
  margin: 0;
  max-width: ${rem(752)};

  @media(min-width: ${props => props.theme.media.md}) {
    font-size: ${rem(22)};
    line-height: ${rem(32)};
  }
`
