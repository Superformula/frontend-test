import { format, parseISO } from 'date-fns'
import React, { memo, ReactElement } from 'react'

import { Rating } from '../Rating'
import { Ratio } from '../Ratio'
import {
    Root,
    Profile,
    AvatarContainer,
    Avatar,
    Meta,
    Name,
    Date,
    Content,
    Message,
} from './styled'

export * as StyledReview from './styled'

export interface Props {
    avatar: string
    name: string
    date: string
    rating: number
    comments: string
}

export const Review = memo(
    ({ avatar, name, date, rating, comments }: Props): ReactElement => {
        return (
            <Root>
                <Profile>
                    <AvatarContainer>
                        <Ratio ratio={100}>
                            <Avatar src={avatar} />
                        </Ratio>
                    </AvatarContainer>
                    <Meta>
                        <Name>{name}</Name>
                        <Date>{format(parseISO(date), 'M/d/yyyy')}</Date>
                    </Meta>
                </Profile>
                <Content>
                    <Rating rating={rating} />
                    <Message dangerouslySetInnerHTML={{ __html: comments }} />
                </Content>
            </Root>
        )
    },
)

Review.displayName = 'Review'
