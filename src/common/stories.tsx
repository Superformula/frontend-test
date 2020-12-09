import { action, withActions } from '@storybook/addon-actions'
import React, { Fragment, ReactElement, useEffect } from 'react'
import { loremIpsum } from 'lorem-ipsum'

import { useTargetBreakpoint } from './utilities'

export default {
    title: 'Global',
    decorators: [withActions],
}

export const mediaQueries = (): ReactElement => {
    const result = useTargetBreakpoint('md')

    useEffect(() => {
        action('breakpoint')(result)
    }, [result])

    return <>{result.current}</>
}

export const typography = (): ReactElement => {
    return (
        <>
            {new Array(6).fill(null).map((_, index) => {
                const num = index + 1
                const Element = `h${num}` as keyof JSX.IntrinsicElements

                return (
                    <Fragment key={index}>
                        <Element>Heading {num}</Element>
                    </Fragment>
                )
            })}
            <p className="large">
                Paragraph Large - {loremIpsum({ units: 'sentences', count: 4 })}
            </p>
            <p>
                Paragraph Normal -{' '}
                {loremIpsum({ units: 'sentences', count: 4 })}
            </p>
        </>
    )
}
