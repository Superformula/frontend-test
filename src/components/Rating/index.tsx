import * as React from 'react'
import { Tag } from './styles'
import Star from './Star'

interface RatingProps {
  readonly value: number
}

const Rating: React.FunctionComponent<RatingProps> = ({ value }) => {

  return (
    <Tag value={value}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </Tag>
  )
}

export default Rating