import * as React from 'react'
import { RestaurantHeaderProps } from '@utils/types'
import Rating from '@components/Rating'
import Status from '@components/Status'
import { Tag, Title, Info, Small } from './styles'

const RestaurantHeader: React.FunctionComponent<RestaurantHeaderProps> = ({ name, rating, is_closed, price, category }) => (
  <Tag>
    <Title>
      { name }
    </Title>
    <Rating
      value={rating}
    />
    <Info>
      <Small>
        { category } • { price }
      </Small>
      <Status 
        active={(is_closed) ? "closed" : "open"}
      />
    </Info>
  </Tag>
)

export default RestaurantHeader