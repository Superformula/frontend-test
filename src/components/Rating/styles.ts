import styled, { css } from 'styled-components'
import { rem } from '@utils/tools'

interface StarProps {
  readonly value: number
}

export const Tag = styled.div<StarProps>`
  align-items: center;
  display: flex;
  margin-bottom: ${rem(16)};

  ${props => props.value >= 0.5 && css`
    svg:nth-child(1) .half {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 1 && css`
    svg:nth-child(1) {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 1.5 && css`
    svg:nth-child(2) .half {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 2 && css`
    svg:nth-child(2) {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 2.5 && css`
    svg:nth-child(3) .half {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 3 && css`
    svg:nth-child(3) {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 3.5 && css`
    svg:nth-child(4) .half {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 4 && css`
    svg:nth-child(4) {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 4.5 && css`
    svg:nth-child(5) .half {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props.value >= 5 && css`
    svg:nth-child(5) {
      fill: ${props => props.theme.colors.blue};
    }
  `}
`

