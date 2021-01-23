import styled, { css } from 'styled-components'
import { rem } from '@utils/tools'

interface StatusTagProps {
  readonly status: String
}

export const Tag = styled.div<StatusTagProps>`
  align-items: center;
  color: ${props => props.theme.colors.offgray};
  display: inline-flex;
  font-size: ${rem(12)};
  font-weight: 300;
  line-height: ${rem(16)};
  letter-spacing: ${rem(0.5)};
  text-transform: uppercase;

  &:before {
    background-color: ${props => props.theme.colors.red};
    border-radius: 50%;
    content: '';
    flex: 0 0 auto;
    height: ${rem(8)};
    margin-right: ${rem(4)};
    width: ${rem(8)};
  }

  ${props => props.status === 'open' && css`
    &:before {
      background-color: ${props => props.theme.colors.green}
    }
  `}
`