import { cleanup, fireEvent, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'

import { render } from '~/test'
import { Props, TEST_IDS, Restaurants } from '.'

describe('Restaurants', () => {
    afterEach(cleanup)

    function setup({
        loading = false,
        more = false,
        restaurants = [],
        onLoadMore = jest.fn(),
        ...rest
    }: Partial<Props> = {}): RenderResult & {
        props: Props
    } {
        return {
            ...render(
                <Restaurants
                    loading={loading}
                    more={more}
                    restaurants={restaurants}
                    onLoadMore={onLoadMore}
                    {...rest}
                />,
            ),
            props: {
                loading,
                more,
                restaurants,
                onLoadMore,
                ...rest,
            },
        }
    }

    const restaurants = [
        {
            id: '',
            thumbnail: '',
            name: '',
            rating: 0,
            type: '',
            cost: '',
            open: true,
        },
    ]

    it('should not render without restaurants', () => {
        const { queryByTestId } = setup()

        expect(queryByTestId(TEST_IDS.root)).not.toBeInTheDocument()
    })

    it('should render if restaurants are provided', () => {
        const { queryAllByTestId, queryByTestId, props } = setup({
            restaurants,
        })

        expect(queryByTestId(TEST_IDS.root)).toBeInTheDocument()
        expect(queryAllByTestId(TEST_IDS.cell)).toHaveLength(
            props.restaurants.length,
        )
    })

    it('should render if children are provided', () => {
        const TEST_ID = 'foo'
        const { queryByTestId } = setup({
            children: <div data-testid={TEST_ID}>No results</div>,
        })

        expect(queryByTestId(TEST_IDS.root)).toBeInTheDocument()
        expect(queryByTestId(TEST_ID)).toBeInTheDocument()
    })

    it('should render load more button if more is true or if loading is true', () => {
        const { props, queryByTestId, rerender } = setup({
            children: 'Force render',
        })

        expect(queryByTestId(TEST_IDS.load)).not.toBeInTheDocument()

        rerender(
            <Restaurants {...props} restaurants={restaurants} more={true} />,
        )

        expect(queryByTestId(TEST_IDS.load)).toBeInTheDocument()

        rerender(
            <Restaurants {...props} restaurants={restaurants} loading={true} />,
        )

        expect(queryByTestId(TEST_IDS.load)).toBeInTheDocument()
    })

    it('should call onLoadMore if more is true and loading is false', () => {
        const { getByTestId, props, rerender } = setup({
            restaurants,
            more: true,
        })
        const load = getByTestId(TEST_IDS.load)

        fireEvent.click(load)

        expect(props.onLoadMore).toHaveBeenCalledTimes(1)

        rerender(<Restaurants {...props} loading={true} />)

        fireEvent.click(load)

        expect(props.onLoadMore).toHaveBeenCalledTimes(1)

        rerender(<Restaurants {...props} more={false} loading={true} />)

        fireEvent.click(load)

        expect(props.onLoadMore).toHaveBeenCalledTimes(1)
    })
})
