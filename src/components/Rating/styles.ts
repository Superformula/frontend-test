import styled, { css } from 'styled-components'
import { rem } from '@utils/tools'

export const Tag = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${rem(16)};

  ${props => props["data-value"] >= 0.5 && css`
    svg:nth-child(1) .half {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props["data-value"] >= 1 && css`
    svg:nth-child(1) {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props["data-value"] >= 1.5 && css`
    svg:nth-child(2) .half {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props["data-value"] >= 2 && css`
    svg:nth-child(2) {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props["data-value"] >= 2.5 && css`
    svg:nth-child(3) .half {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props["data-value"] >= 3 && css`
    svg:nth-child(3) {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props["data-value"] >= 3.5 && css`
    svg:nth-child(4) .half {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props["data-value"] >= 4 && css`
    svg:nth-child(4) {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props["data-value"] >= 4.5 && css`
    svg:nth-child(5) .half {
      fill: ${props => props.theme.colors.blue};
    }
  `}

  ${props => props["data-value"] >= 5 && css`
    svg:nth-child(5) {
      fill: ${props => props.theme.colors.blue};
    }
  `}
`

