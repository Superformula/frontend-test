import styled, {keyframes} from 'styled-components'
import { rem } from '@utils/tools'

export const Tag = styled.li`
  align-items: center;
  background-color: rgba(255, 255, 255, .8);
  display: flex;
  list-style: none;
  position: absolute;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const loadingEffect = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

export const Icon = styled.span`
  display: block;
  height: ${rem(60)};
  width: ${rem(60)};

  &:after {
    content: "";
    display: block;
    width: ${rem(44)};
    height: ${rem(44)};
    margin: ${rem(8)};
    border-radius: 50%;
    border: ${rem(6)} solid ${props => props.theme.colors.blue};
    border-color: ${props => `${props.theme.colors.blue} transparent ${props.theme.colors.blue} transparent`};
    animation: ${loadingEffect} 1.2s linear infinite;
  }
`