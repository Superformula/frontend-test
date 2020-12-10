import React, { memo, ReactElement, useState } from 'react'

import { CaretDown } from '~/assets'
import { useTargetBreakpoint } from '~/common'
import { Button, ButtonKind } from '../Button'
import { Checkbox } from '../Checkbox'
import { Container } from '../Container'
import { Dropdown } from '../Dropdown'
import {
    Root,
    Label,
    DesktopContainer,
    DesktopFilters,
    DesktopActions,
    MobileContainer,
    MobileModal,
    MobileModalHeader,
    MobileModalActions,
    MobileModalFilters,
} from './styled'

export * as StyledFilters from './styled'

export interface Values {
    categories: string[]
    price: number | null
    open: boolean
}

export interface Props {
    categories: Array<{ label: string; value: string }>
    onChange: (values: Values) => void
}

export const Filters = memo(
    ({ categories, onChange }: Props): ReactElement => {
        const { lte } = useTargetBreakpoint('sm')
        const {
            categories: selectedCategories,
            price,
            open,
            modalOpen,
            disableApply,
            disableClear,
            toggleModal,
            clearAll,
            applyAll,
            resetCategories,
            toggleCategory,
            updatePrice,
            toggleOpen,
        } = useFilters(onChange)

        return (
            <Root>
                <Container>
                    {lte ? (
                        <>
                            <MobileContainer>
                                <Label>Filter By:</Label>
                                <Button
                                    kind={ButtonKind.Blank}
                                    onClick={toggleModal}
                                >
                                    <span>All</span>
                                    <CaretDown />
                                </Button>
                            </MobileContainer>
                            {modalOpen && (
                                <MobileModal>
                                    <MobileModalHeader>
                                        <Label>Filter By:</Label>
                                        <Button
                                            kind={ButtonKind.Blank}
                                            onClick={toggleModal}
                                        >
                                            Close
                                        </Button>
                                    </MobileModalHeader>
                                    <MobileModalActions>
                                        <Button
                                            kind={ButtonKind.Outline}
                                            disabled={disableClear}
                                            onClick={clearAll}
                                        >
                                            Clear All
                                        </Button>
                                        <Button
                                            disabled={disableApply}
                                            onClick={applyAll}
                                        >
                                            Apply
                                        </Button>
                                    </MobileModalActions>
                                    <MobileModalFilters>
                                        Filters
                                    </MobileModalFilters>
                                </MobileModal>
                            )}
                        </>
                    ) : (
                        <DesktopContainer>
                            <DesktopFilters>
                                <Label>Filter By:</Label>
                                <Dropdown label="Categories">
                                    <Button
                                        kind={ButtonKind.Blank}
                                        onClick={() => resetCategories(true)}
                                    >
                                        <Checkbox
                                            checked={
                                                selectedCategories.length === 0
                                            }
                                        />
                                        <span>All</span>
                                    </Button>
                                    {categories.map(({ label, value }) => {
                                        const selected = selectedCategories.includes(
                                            value,
                                        )

                                        return (
                                            <Button
                                                key={value}
                                                kind={ButtonKind.Blank}
                                                onClick={toggleCategory(
                                                    value,
                                                    selected,
                                                    true,
                                                )}
                                            >
                                                <Checkbox checked={selected} />
                                                <span>{label}</span>
                                            </Button>
                                        )
                                    })}
                                </Dropdown>
                                <Dropdown label="Price">
                                    <Button
                                        kind={ButtonKind.Blank}
                                        onClick={updatePrice(null, true)}
                                    >
                                        <Checkbox checked={!price} />
                                        <span>All</span>
                                    </Button>
                                    {new Array(4).fill(null).map((_, index) => (
                                        <Button
                                            key={index}
                                            kind={ButtonKind.Blank}
                                            onClick={updatePrice(
                                                index + 1,
                                                true,
                                            )}
                                        >
                                            <Checkbox
                                                checked={index + 1 === price}
                                            />
                                            <span>
                                                {new Array(index + 1)
                                                    .fill('$')
                                                    .join('')}
                                            </span>
                                        </Button>
                                    ))}
                                </Dropdown>
                                <Button
                                    kind={ButtonKind.Blank}
                                    onClick={() => toggleOpen(true)}
                                >
                                    <span>Open Now</span>
                                    <Checkbox checked={open} />
                                </Button>
                            </DesktopFilters>
                            <DesktopActions>
                                <Button
                                    kind={ButtonKind.Outline}
                                    disabled={disableClear}
                                    onClick={clearAll}
                                >
                                    Clear All
                                </Button>
                            </DesktopActions>
                        </DesktopContainer>
                    )}
                </Container>
            </Root>
        )
    },
)

Filters.displayName = 'Filters'

const defaultValues: Values = {
    categories: [],
    price: null,
    open: false,
}

export interface FiltersHookResult extends Values {
    modalOpen: boolean
    toggleModal: () => void
    disableClear: boolean
    disableApply: boolean
    clearAll: () => void
    applyAll: () => void
    resetCategories: (apply?: boolean) => void
    toggleCategory: (
        value: string,
        selected: boolean,
        apply?: boolean,
    ) => () => void
    updatePrice: (value: number | null, apply?: boolean) => () => void
    toggleOpen: (apply?: boolean) => void
}

export function useFilters(onChange: Props['onChange']): FiltersHookResult {
    const [state, setState] = useState({
        prev: defaultValues,
        next: defaultValues,
        open: false,
        dirty: false,
    })

    function update(next: Values, apply: boolean): void {
        setState({
            prev: apply ? next : state.prev,
            next,
            open: !apply,
            dirty: !apply,
        })

        if (apply) {
            onChange(next)
        }
    }

    return {
        ...state.next,
        modalOpen: state.open,
        toggleModal: (): void => {
            setState({
                ...state,
                open: !state.open,
                dirty: false,
            })
        },
        disableClear:
            state.prev.categories.length === 0 &&
            !state.prev.price &&
            !state.prev.open,
        disableApply: !state.dirty,
        clearAll: (): void => update(defaultValues, true),
        applyAll: (): void => update(state.next, true),
        resetCategories: (apply = false): void => {
            update(
                {
                    ...state.next,
                    categories: [],
                },
                apply,
            )
        },
        toggleCategory: (
            value: string,
            selected: boolean,
            apply = false,
        ) => (): void => {
            update(
                {
                    ...state.next,
                    categories: selected
                        ? state.next.categories.filter(
                              (category) => category !== value,
                          )
                        : [...state.next.categories, value],
                },
                apply,
            )
        },
        updatePrice: (value: number | null, apply = false) => (): void => {
            update(
                {
                    ...state.next,
                    price: value,
                },
                apply,
            )
        },
        toggleOpen: (apply = false): void => {
            update(
                {
                    ...state.next,
                    open: !state.next.open,
                },
                apply,
            )
        },
    }
}
