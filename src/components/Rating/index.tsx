import * as React from 'react'
import { Tag } from './styles'
import Star from './Star'
import { RatingProps } from '@utils/types'

const Rating: React.FunctionComponent<RatingProps> = ({ value }) => {

  return (
    <Tag value={value} data-testid="rating">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </Tag>
  )
}

export default Rating
