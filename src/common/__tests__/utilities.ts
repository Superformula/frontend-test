import { renderHook } from '~/test'
import { orderedBreakpointKeys } from '../constants'
import {
    BreakpointValues,
    useTargetBreakpoint,
    useBreakpointValue,
} from '../utilities'

describe('useTargetBreakpoint', () => {
    it('should return breakpoint match results', () => {
        orderedBreakpointKeys.forEach((target, tI) => {
            orderedBreakpointKeys.forEach((current, cI) => {
                const { result } = renderHook(
                    () => useTargetBreakpoint(target),
                    { breakpoint: current },
                )

                expect(
                    result.current,
                    `Current: ${current}; Target: ${target}`,
                ).toEqual({
                    current,
                    target,
                    gt: cI > tI,
                    gte: cI >= tI,
                    eql: cI === tI,
                    lte: cI <= tI,
                    lt: cI < tI,
                })
            })
        })
    })
})

describe('useBreakpointValue', () => {
    it('should return undefined without values provided', () => {
        const values: BreakpointValues<string> = {}

        orderedBreakpointKeys.forEach((current) => {
            const { result } = renderHook(() => useBreakpointValue(values), {
                breakpoint: current,
            })

            expect(result.current, `Current: ${current}`).toEqual(undefined)
        })
    })

    it('should return undefined for breakpoints smaller than first value provided', () => {
        const value = 'foo'
        const values: BreakpointValues<string> = {
            lg: value,
        }
        const tI = orderedBreakpointKeys.indexOf('lg')

        orderedBreakpointKeys.forEach((current, cI) => {
            const { result } = renderHook(() => useBreakpointValue(values), {
                breakpoint: current,
            })

            expect(result.current, `Current: ${current}`).toEqual(
                cI >= tI ? value : undefined,
            )
        })
    })

    it('should return value of largest breakpoint provided lte current breakpoint', () => {
        const xxs = 'foo'
        const value = 'bar'

        orderedBreakpointKeys.forEach((target, tI) => {
            const values: BreakpointValues<string> = {
                xxs,
                [target]: value,
            }

            orderedBreakpointKeys.forEach((current, cI) => {
                const { result } = renderHook(
                    () => useBreakpointValue(values),
                    { breakpoint: current },
                )

                expect(
                    result.current,
                    `Current: ${current}; Target: ${target}`,
                ).toEqual(tI <= cI ? value : xxs)
            })
        })
    })
})
