import { cover } from 'polished'
import styled, { ThemeProps } from 'styled-components'

interface Theme {
    maxWidth: string
    ratio: number
}

export const Root = styled.div`
    width: 100%;
    padding-top: ${({ theme }: ThemeProps<Theme>) => theme.ratio}%;
    position: relative;
`

export const Container = styled.div`
    display: flex;
    ${cover()};
`
