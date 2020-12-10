import React, {
    memo,
    ReactElement,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react'
import { ThemeProvider } from 'styled-components'

import { CaretDown, CaretUp } from '~/assets'
import { Button, ButtonKind, StyledButton } from '../Button'
import { Root, Drop } from './styled'

export * as StyledDropdown from './styled'

export interface Props {
    children: ReactNode
    kind?: StyledButton.Kind
    label: string
}

export const Dropdown = memo(
    ({ children, kind = ButtonKind.Blank, label }: Props): ReactElement => {
        const [open, setOpen] = useState(false)
        const ref = useRef<HTMLDivElement>(null)

        function toggle(): void {
            setOpen(!open)
        }

        function handleClickOutside(event: MouseEvent): void {
            if (!ref.current?.contains(event.target as Node | null)) {
                setOpen(false)
            }
        }

        useEffect(() => {
            document.addEventListener('click', handleClickOutside, true)

            return () =>
                document.removeEventListener('click', handleClickOutside, true)
        })

        return (
            <ThemeProvider theme={{ open }}>
                <Root ref={ref}>
                    <Button kind={kind} onClick={toggle}>
                        <span>{label}</span>
                        {open ? <CaretUp /> : <CaretDown />}
                    </Button>
                    {open && <Drop>{children}</Drop>}
                </Root>
            </ThemeProvider>
        )
    },
)

Dropdown.displayName = 'Dropdown'
