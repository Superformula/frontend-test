import { useEffect, useMemo, useState } from 'react'

import { BreakpointKey, MaybeArray } from '~/types'
import {
    minWidthMediaQueries,
    orderedBreakpointKeys,
    SSR,
    SSR_BREAKPOINT,
} from './constants'

export function getBreakpoint(): BreakpointKey {
    return SSR
        ? SSR_BREAKPOINT
        : orderedBreakpointKeys
              .slice(0)
              .reverse()
              .find(
                  (key) => window.matchMedia(minWidthMediaQueries[key]).matches,
              ) || SSR_BREAKPOINT
}

export function isNil(value: unknown): value is null | undefined {
    return isNull(value) || isUndefined(value)
}

export function isNull(value: unknown): value is null {
    return value === null
}

export function isUndefined(value: unknown): value is undefined {
    return value === undefined
}

export function nonNilFilter<T>(array?: MaybeArray<T>): T[] {
    if (!array) {
        return []
    }

    return array.reduce((values: T[], value) => {
        if (!isNil(value)) {
            values.push(value)
        }

        return values
    }, [])
}

interface RandomOptions {
    min?: number
    max?: number
    round?: (value: number) => number
}

export function randomInt({
    min = 0,
    max = 10,
    round = Math.round,
}: RandomOptions = {}): number {
    return Math.max(min, round(Math.random() * max))
}

export function useBreakpoint(): BreakpointKey {
    const [current, setCurrent] = useState<BreakpointKey>(getBreakpoint())

    useEffect(() => {
        const callbacks = SSR
            ? []
            : orderedBreakpointKeys.map((key, index) => {
                  const match = window.matchMedia(minWidthMediaQueries[key])
                  const change = (event: MediaQueryListEvent): void => {
                      if (event.matches) {
                          setCurrent(key)
                      } else {
                          setCurrent(orderedBreakpointKeys[index - 1])
                      }
                  }

                  match.addEventListener('change', change)

                  return () => match.removeEventListener('change', change)
              })

        return () => callbacks.forEach((callback) => callback())
    }, [])

    return current
}

export interface BreakpointMatch {
    current: BreakpointKey
    target: BreakpointKey
    gt: boolean
    gte: boolean
    eql: boolean
    lte: boolean
    lt: boolean
}

export function useTargetBreakpoint(target: BreakpointKey): BreakpointMatch {
    const current = useBreakpoint()
    const cI = useMemo(() => orderedBreakpointKeys.indexOf(current), [current])
    const tI = useMemo(() => orderedBreakpointKeys.indexOf(target), [target])

    return {
        current,
        gt: cI > tI,
        gte: cI >= tI,
        eql: cI === tI,
        lte: cI <= tI,
        lt: cI < tI,
        target,
    }
}

export type BreakpointValues<T> = {
    [P in BreakpointKey]?: T
}

export function useBreakpointValue<T>(
    values: BreakpointValues<T>,
): T | undefined {
    const current = useBreakpoint()
    const cI = useMemo(() => orderedBreakpointKeys.indexOf(current), [current])

    return useMemo(() => {
        let value: T | undefined = undefined

        orderedBreakpointKeys.every((breakpoint, index) => {
            if (index > cI) {
                return false
            }

            if (breakpoint in values) {
                value = values[breakpoint]
            }

            return true
        })

        return value
    }, [values, cI])
}
