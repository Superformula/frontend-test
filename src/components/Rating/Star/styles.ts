import styled from 'styled-components'
import { rem } from '@utils/tools'

export const Border = styled.path``

export const Half = styled.rect``

export const Tag = styled.svg`
  display: block;
  flex: 0 0 auto;
  height: ${rem(20)};
  margin-right: ${rem(1)};
  width: ${rem(20)};

  ${Border} {
    stroke: ${props => props.theme.colors.blue};
  }
`
