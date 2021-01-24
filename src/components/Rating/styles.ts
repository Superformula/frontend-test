import styled, { css } from 'styled-components'
import { Tag as Star, Half } from './Star/styles'
import { rem } from '@utils/tools'

interface StarProps {
  readonly value: number
}

export const Tag = styled.div<StarProps>`
  align-items: center;
  display: flex;
  margin-bottom: ${rem(16)};

  ${props => props.value >= 0.5 && css`
    ${Star}:nth-child(1) ${Half} {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 1 && css`
    ${Star}:nth-child(1) {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 1.5 && css`
    ${Star}:nth-child(2) ${Half} {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 2 && css`
    ${Star}:nth-child(2) {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 2.5 && css`
    ${Star}:nth-child(3) ${Half} {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 3 && css`
    ${Star}:nth-child(3) {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 3.5 && css`
    ${Star}:nth-child(4) ${Half} {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 4 && css`
    ${Star}:nth-child(4) {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 4.5 && css`
    ${Star}:nth-child(5) ${Half} {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 5 && css`
    ${Star}:nth-child(5) {
      fill: ${props => props.theme.colors.blue};
    }
  `}
`

