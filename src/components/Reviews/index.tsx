import * as React from 'react'
import { ReviewsProps } from '@utils/types'
import Rating from '@components/Rating'
import { Tag, Env, Total, List, Item, Left, User, Mask, Image, Info, Name, Created, Right, Testimonial } from './styles'

const Reviews: React.FunctionComponent<ReviewsProps> = ({ review_count, reviews }) => {

  return (
    <Tag data-testid="reviews">
      <Env>
        <Total>
          { review_count } { (review_count === 1 ? 'Review' : 'Reviews')}
        </Total>
        <List>
        { reviews.map(({ rating, text, time_created, user }, key) => (
          <Item key={key}>
            <Left>
              <User>
                <Mask>
                  <Image
                    src={ user.image_url }
                    alt={ user.name }
                  />
                </Mask>
                <Info>
                  <Name>{ user.name }</Name>
                  <Created>{ formatDate(time_created) }</Created>
                </Info>
              </User>
            </Left>
            <Right>
              <Rating 
                value={ rating }
              />
              <Testimonial>
                { text }
              </Testimonial>
            </Right>
          </Item>
        ))}
      </List>
      </Env>
    </Tag>
  )
}

const formatDate = (date) => {
  const formattedDate = new Date(date)
  return formattedDate.toLocaleDateString('en-US')
}

export default Reviews