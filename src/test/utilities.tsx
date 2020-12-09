import { render as defaultRender, RenderResult } from '@testing-library/react'
import {
    renderHook as defaultRenderHook,
    RenderHookOptions as RenderHookOptionsDefault,
    RenderHookResult,
} from '@testing-library/react-hooks'
import MatchMediaMock from 'jest-matchmedia-mock'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import type { NextRouter } from 'next/router'
import React, { ReactElement, PropsWithChildren, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import { minWidthMediaQueries, SSR_BREAKPOINT, theme } from '~/common'
import type { BreakpointKey } from '~/types'

interface MediaOptions {
    breakpoint?: BreakpointKey
    mediaQuery?: string
}

export const matchMediaMock = new MatchMediaMock()

export function mockMatchMedia({
    breakpoint = SSR_BREAKPOINT,
    mediaQuery = minWidthMediaQueries[breakpoint],
}: MediaOptions): void {
    matchMediaMock.useMediaQuery(mediaQuery)
}

afterEach(() => {
    matchMediaMock.clear()
})

type DefaultRenderParams = Parameters<typeof defaultRender>
type RenderUI = DefaultRenderParams[0]

export type RenderOptions = DefaultRenderParams[1] & {
    breakpoint?: BreakpointKey
    router?: Partial<NextRouter>
}

const mockRouter: NextRouter = {
    basePath: '',
    pathname: '/',
    route: '/',
    asPath: '/',
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
    },
    isFallback: false,
}

const NoopWrapper = ({
    children,
}: PropsWithChildren<unknown>): ReactElement => <>{children}</>

NoopWrapper.displayName = 'NoopWrapper'

export function render(
    ui: RenderUI,
    {
        wrapper = NoopWrapper,
        breakpoint = SSR_BREAKPOINT,
        router,
        ...options
    }: RenderOptions = {},
): RenderResult {
    const Wrapper = wrapper
    const WrapperWithContext = ({
        children,
    }: PropsWithChildren<unknown>): ReactElement => {
        useEffect(() => {
            mockMatchMedia({ breakpoint })
        }, [])

        return (
            <RouterContext.Provider value={{ ...mockRouter, ...router }}>
                <ThemeProvider theme={theme}>
                    <Wrapper>{children}</Wrapper>
                </ThemeProvider>
            </RouterContext.Provider>
        )
    }

    WrapperWithContext.displayName = 'Wrapper'

    return defaultRender(ui, {
        wrapper: WrapperWithContext,
        ...options,
    })
}

export type RenderHookOptions<P> = Omit<
    RenderHookOptionsDefault<P>,
    'wrapper'
> & {
    breakpoint?: BreakpointKey
}

export function renderHook<P, R>(
    callback: (props: P) => R,
    { breakpoint = SSR_BREAKPOINT, ...options }: RenderHookOptions<P> = {},
): RenderHookResult<P, R> {
    const WrapperWithContext = ({
        children,
    }: PropsWithChildren<unknown>): ReactElement => {
        useEffect(() => {
            mockMatchMedia({ breakpoint })
        }, [])

        return <>{children}</>
    }

    WrapperWithContext.displayName = 'Wrapper'

    return defaultRenderHook(callback, {
        wrapper: WrapperWithContext,
        ...options,
    })
}
