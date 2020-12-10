import React, { memo, ReactElement } from 'react'

import { useBreakpointValue, useTargetBreakpoint } from '~/common'
import { Button } from '../Button'
import { Rating } from '../Rating'
import { Ratio } from '../Ratio'
import { Status, StatusKind } from '../Status'
import {
    Root,
    Thumbnail,
    ImageContainer,
    Image,
    Content,
    Name,
    Meta,
    Details,
    Anchor,
} from './styled'

export * as StyledRestaurant from './styled'

export interface Props {
    id: string
    thumbnail: string
    name: string
    rating: number
    type: string
    cost: string
    open: boolean
}

export const Restaurant = memo(
    ({
        id,
        thumbnail,
        name,
        rating,
        type,
        cost,
        open,
        ...rest
    }: Props): ReactElement => {
        const { lte } = useTargetBreakpoint('sm')
        const kind = useBreakpointValue({
            xxs: StatusKind.Pill,
            md: StatusKind.Dot,
        })

        return (
            <Root {...rest}>
                <Thumbnail>
                    <Ratio />
                    <ImageContainer>
                        <Image src={thumbnail} />
                    </ImageContainer>
                </Thumbnail>
                <Content>
                    <Name>{name}</Name>
                    <Rating rating={rating} />
                    <Meta>
                        <Details>
                            {type} &bull; {cost}
                        </Details>
                        <Status kind={kind} open={open} />
                    </Meta>
                    {lte ? (
                        <Anchor href={`/restaurants/${id}`}>Learn more</Anchor>
                    ) : (
                        <Button href={`/restaurants/${id}`}>Learn more</Button>
                    )}
                </Content>
            </Root>
        )
    },
)

Restaurant.displayName = 'Restaurant'
